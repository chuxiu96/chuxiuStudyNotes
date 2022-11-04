# 第一章、介绍

## 1 - 什么是 pinia

Pinia 是 Vue 的存储库，允许跨组件/页面共享一个状态

> 独立的生成，最终联系在一起



### 1.1 - 设计意图 & 开发现状

Pinia最初是为探索 Vuex 的下一个迭代版本而设计的，融合了核心团队关于 Vuex 5 的许多想法，最终，实现了在 Vuex 5 中想要的功能

- **设计意图** 
  - 最初目的是为 Vue 重新设计一个 <span style="color: #e3371e">组合式API</span> 风格的状态管理库
- **开发现状** 
  - 在 Vue2 指、和 Vue3 中皆可使用，不强制要求使用 组合式API
  - 除了 <span style="color: #0099dd">安装</span> 和 <span style="color: #0099dd">SSR</span> 不同，其他是相同的



### 1.1 - 优点

- **开发工具支持** 
  - 追踪 <span style="color: #e3371e">actions，mutation</span> 的时间线
  - 组件中显示使用的 <span style="color: #e3371e">Stores</span> 
  - 事件旅行&轻易调试
- **热模块替换** 
  - 修改stores无需重新加载页面
  - 开发中保持任何现有状态
- **使用插件扩展 Pinia 功能** 
- **Typescript支持 | 自动完成for Js用户** 
- **服务端渲染支持** 



### 1.2 - 与 Vuex 对比

- 提供一个更简单的 API 而无需多余操作
- 提供 <span style="color: #e3371e">组合式API样式</span> 的APIs
- 更重要地，与 TypeScript 一起使用时具有可靠的 <span style="color: #e3371e">类型推断</span> 支持



**Pinia APIs 与 Vuex≤4 有很大不同**

- **不再存在  <span style="color: #0099dd">mutations</span>**  
  - mutations 经常被认为非常冗长
- **不再需要创建 <span style="color: #0099dd">custom complex wrappers</span> 来支持 Typescript** 
  - 一切都已确定好类型
  - API 的设计方式是尽可能利用 TS 类型推断
- **不再需要注入魔幻的  <span style="color: #0099dd">strings</span>**  
  - 导入并调用函数，享受自动化!
- **不再需要动态添加 <span style="color: #0099dd">stores</span>**  
  - 默认情况下，它们都是动态的
  - 但当你想要时，仍然可手动使用 store 来注册它
- **不再需要嵌套 <span style="color: #0099dd">模块结构</span>**  
  - 仍然可以通过在另一个 store 中导入和使用 store，来隐式地嵌套 stores
  - 但 Pinia 设计并提供了一个扁平的结构，同时仍允许 store 之间交叉组合
  - **甚至可以有循环依赖的 stores**
- **没有 <span style="color: #0099dd">命名空间模块</span> ** 
  - 由于 store 的扁平化结构，所有 store 都是命名空间



### 1.3 - 基本示例

#### （1）创建 store

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也能被定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```



#### （2）组件中使用

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // 自动完成 ✨
    counter.$patch({ count: counter.count + 1 })
    // 或使用 actions
    counter.increment()
  },
}
```



#### （3）使用风格

##### # 组合式API 风格

使用函数更优雅的定义 store

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```



##### # Vuex风格

可以使用 `mapStores()`, `mapState()`, or `mapActions()` 等辅助函数

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // 其他计算属性
    // ...
    // 允许访问 this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // 授予读取权限 this.count and this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // 允许访问 this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}
```



#### （4）更完整的实例

即使是在 JavaScript 中，您也可以使用 Pinia 中的 API 来处理类型

```js
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 自动推断类型为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动完成! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 自动调用其他getters ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // 可以直接 mutate 这个 state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```



## 2 - 安装

> 如果应用程序使用的 Vue < 2.7，还需要安装复组合式 API @vue/composition-api

```bash
$ npm install pinia
# or with yarn
$ yarn add pinia
```



### 2.1 - 使用 Vue CLI

在根 store 创建 Pinia 实例，作为一个插件传给 app

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```



### 2.2 - 使用 Vue2

需要安装一个插件，并将创建的 pinia 注入到 app

```js
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // 其他选项...
  // ...
  // 注意，相同的`pinia`实例，可跨同一页面的多个 Vue apps 使用
  pinia,
})
```



## 3 - 什么是 store

 <span style="color: #e3371e">Store</span> 是一个保持 <span style="color: #0099dd">状态</span> 和 <span style="color: #0099dd">业务逻辑</span> 的实体，独立于组件树。

换言之， <span style="color: #e3371e">Store</span> 承载着 <span style="color: #0099dd">全局状态</span> 。有点像个一直存在的组件，任何人都可以从中读写。



 <span style="color: #e3371e">Store</span> 有 3 个概念，可等价为组件中的`data`, `computed` 和 `methods`

- **state** 
- **getters** 
- **actions** 



# 第二章、核心概念

## 1 - 定义 Store

使用 `defineStore()` 定义一个 <span style="color: #0099dd">store</span> 

- 且需要一个 <span style="color: #ff8b24">唯一的 name</span> 传入第 <span style="color: #49bf51">1</span> 个参数
- 第 <span style="color: #49bf51">2</span> 个参数，接受两种完全不同的值
  - 一个 `setup()` 函数
  - 一个 <span style="color: #e3371e">选项对象</span> 

```js
import { defineStore } from 'pinia'

// 可根据需要将`defineStore()`的返回值命名为任何名称
// 但最好使用 `use` 和 `Store`将其包围，例如`useUserStore`, `useCartStore`
// 第一个参数是应用程序中 store 的唯一id
export const useStore = defineStore('main', {
  // 其他选项...
})
```

- 这个 name 也称 id，是 pinia 用来 连接 store 和 devtools
- 使用 *use...* 命名，是一个跨可组合件的约定，使其用法成为惯例



### 1.1 - Option Stores #

> 直观、简单

与 Vue 的选项 API 类似，我们可以传入一个 **<span style="color: #ab04d9">选项式对象</span>** ，包含`state`, `actions`, and `getters` 属性

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

可认为

-  **<span style="color: #e3371e">`state`</span>** 是 store 中的  **<span style="color: #49bf51">`data`</span>** 
-  **<span style="color: #e3371e">`getters`</span>** 是 store 中的  **<span style="color: #49bf51">`computed` 属性</span>** 
-  **<span style="color: #e3371e">`actions`</span>** 是 store 中的  **<span style="color: #49bf51">`methods`</span>** 



### 1.2 - Setup Stores #

> 更灵活、可在store中创建 watchers、自由组合
>
> 但使用组合件带来更复杂的 SSR

类似于 Vue 的 组合式API 中的 setup() 函数，我们可以传入一个函数，其定义了 **<span style="color: #ab04d9">响应式属性和方法并返回</span>** 一个对象，对象中包含有我们想暴露出去的包含如上 <span style="color: #e3371e">属性</span> 和 <span style="color: #e3371e">方法</span> 

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
```

在 *Setup Stores* 中

-  **<span style="color: #e3371e">`ref()`</span>**s 成为  **<span style="color: #49bf51">`state`</span>** 属性
-  **<span style="color: #e3371e">`computed()`</span>**s 成为  **<span style="color: #49bf51">`getters`</span>** 属性
-  **<span style="color: #e3371e">`function()`</span>**s 成为  **<span style="color: #49bf51">`actions`</span>** 属性



## 2 - 使用 store

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()

    return {
      // 可以返回整个 store 实例以在模板中使用它
      store,
    }
  },
}
```

> TIP
>
> If you are not using `setup` components yet, [you can still use Pinia with *map helpers*](https://pinia.vuejs.org/cookbook/options-api.html).

**使用细则** :

- 可定义任意数量的 store

- 应在不同的文件中定义每个 store，以此来使 pinia 发挥最大最用
  - 使打包文件代码分离
  - Typescript 类型推断
- 一旦 store 实例化，可以直接通过 store，访问任何定义在 `state`, `getters`, and `actions` 的属性

***

`store` 是被 `reactive` 包裹的对象

- 意味着无须在 `getters` 后写 `.value` 
- 但在 `setup` 中的 `props`，我们无法分解它

```js
export default defineComponent({
  setup() {
    const store = useCounterStore()
    // ❌ 这将不会工作，因为它破坏了响应性
    // 这与从 `props` 破坏相同
    const { name, doubleCount } = store

    name // "Eduardo"
    doubleCount // 0

    setTimeout(() => {
      store.increment()
    }, 1000)

    return {
      // 总是 "Eduardo"
      name,
      // 总是 0
      doubleCount,
      // 总是 0
      doubleNumber: store.doubleCount,

      // ✅ 响应性
      doubleValue: computed(() => store.doubleCount),
    }
  },
})
```



***

在保持 `store` 响应性的同时，以便从 `store` 中提取属性，应该使用  <span style="color: #ab04d9">**storeToRefs()**</span> 

- 它将为每个反应属性创建引用
- 当仅使用存储中的 state 而不调用任何 action 时，这非常有用
- 注意，您可以直接从 store 中解构 actions，因为它们绑定在 store 本身中

```js
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    // `name` 和 `doubleCount` 是响应式 refs
    // 这也将为插件添加的属性创建引用
    // 但跳过任何 action 或非响应式（非ref/reactive）属性
    const { name, doubleCount } = storeToRefs(store)
    // 可以只提取 increment action
    const { increment } = store

    return {
      name,
      doubleCount,
      increment,
    }
  },
})
```



## 3 - State

大多数时间，state 是 store 的中心，人们通常从定义代表他们应用程序的状态开始

在 pinia 中， state 被定义为 <span style="color: #e3371e">一个返回初始 state 的函数</span> ，这使得 Pinia 可以同时在服务器端和客户端工作

```js
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // 建议使用箭头函数获取完整类型推断
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
```

> TIP
>
> 如果使用 Vue 2，在 state 中创建的数据与 在Vue 实例中的数据遵循相同的规则
>
> 即，State 对象必须是普通的，并且在向其添加新属性时需要调用 Vue.set ()



### 3.1 - Typescript

使 state 与 TS 兼容，无需做太多

- 确保 `strict` (至少`noImplicitThis`)，Pinia 将 <span style="color: #0099dd">自动推断</span> state 类型
- 然而，有些情况下，需要帮它一把

```js
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 对于初始空列表
      userList: [] as UserInfo[],
      // 对于尚未加载的数据
      user: null as UserInfo | null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```

- 也可以用接口定义 state ，约束返回值的类型

```js
interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```



### 3.2 - 访问 state

默认情况下，可以通过 store 实例访问 state，从而直接读写 state

```js
const store = useStore()

store.count++
```



### 3.3 - 重置 state

通过调用 store 的 `$reset()` 方法， 可以将 state 重置为其初始值



#### 选项式API 用法 #

```js
// Example File Path:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
})
```

当你不使用组合式API，且在组件中使用选项式API时，可以使用辅助函数 `mapState()` 将 state属性 映射为可读的 computed 属性:

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // 允许在组件中访问 this.count，就像从 store.count 中读取一样
    ...mapState(useCounterStore, ['count'])
    // 与上同，但注册为 this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'count',
      // 还可以写一个访问 state 的函数
      double: store => store.count * 2,
      // 它可以访问 `this`，但它的类型不正确
      magicValue(store) {
        return store.someGetter + this.count + this.double
      },
    }),
  },
}
```



##### 可变的状态 #

如果想改写这些 state 属性，可使用 `mapWritableState()` 替换，但不能像 `mapState()` 一样传入函数

```js
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // 允许在组件中访问 this.count，且允许设置它
    // this.count++
    // 就像从 store.count 中读取一样
    ...mapWritableState(useCounterStore, ['count'])
    // 与上同，但注册为 this.myOwnName
    ...mapWritableState(useCounterStore, {
      myOwnName: 'count',
    }),
  },
}
```

> TIP
>
> 对于像数组这样的集合，不需要 mapWritableState()，除非将整个数组替换为 cartItems = []
>
> MapState() 仍然允许您调用集合上的方法



### 3.4 - 改变 state

除了直接用 `store.count++` 改变 store 之外，也可调用 `$patch()` 方法

`$patch()` 方法，允许您使用部分状态对象同时应用多个更改

```js
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
```

- 但，有些变化确实 <span style="color: #0099dd">很难或有代价</span> 地应用这种语法
  - 任何集合的更改需要创建一个新的集合
    - 例如，从一个数组中添加、删除、拼接一个元素

- 因此，$patch() 方法接受一个函数来将这种难以应用于补丁对象的 mutations 进行分组

```js
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```



> 主要的区别是，在 devtools 中，`$patch()` 允许您将多个更改分组到单个条目中
>
> 请注意，对 `state` 和 `$patch()` 的直接更改都会出现在 devtool 中，并且可能需要花费时间（vue3 中还没有）



### 3.5 - 替换 state

你不能完全替换 store 中的 state，因为那样会破坏响应性

但您可以对其进行修补

```js
// 实际上，这并没替换 `$state`
store.$state = { count: 24 }
// 它在内部调用 `$patch()`:
store.$patch({ count: 24 })
```

通过改变 pinia 实例的 state，您还可以设置整个应用程序的初始 state

```js
pinia.state.value = {}
```



### 3.6 - 订阅 state

您可以通过 store 的 `$subscribe()` 方法监听 state 及其变化，类似于Vuex的订阅方法

与常规 `watch()` 相比，使用 `$subscribe()` 的优点是：*subscriptions* 只会在修补后触发一次

```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // same as cartStore.$id
  mutation.storeId // 'cart'
  // only available with mutation.type === 'patch object'
  mutation.payload // patch object passed to cartStore.$patch()

  // 只要状态发生变化，就将整个状态保存到本地存储
  localStorage.setItem('cart', JSON.stringify(state))
})
```

默认情况下，状态订阅绑定到添加它们的组件（如果 store 在组件的 setup() 中），意味着，卸载组件时，它们将自动删除

如果希望在卸载组件后保留它们，传递 `{detached:true}` 作为从当前组件分离状态订阅的第 <span style="color: #49bf51">2</span> 个参数

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // 即使卸载了组件，此订阅也将保留
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
```



你可以在 pinia 实例中监听整个 state

```js
watch(
  pinia.state,
  (state) => {
    // 只要状态发生变化，就将整个状态保存到本地存储
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```



## 4 - Getters

 <span style="color: #e3371e">Getters</span> 可认为是 store 中 state 的 <span style="color: #0099dd">计算值</span> ，可以用 `defeStore()` 中的  <span style="color: #ab04d9">getters 属性</span> 定义

接收 state 作为第一个参数，推荐使用箭头函数

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
```

***

大多数情况下，getter 将只依赖于 state，但有时，需要使用其他的 getters。

因此，在定义 <span style="color: #0099dd">常规函数</span> 时，我们可以通过 <span style="color: #ab04d9">`this`</span> 访问整个  <span style="color: #0099dd">store 实例</span> 

- 但是有必要定义返回类型的类型(在 TypeScript 中)，这是由于 TypeScript 中的一个已知限制，不会影响用箭头函数定义的 getter，也不会影响不使用 `this` 的 getter

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // 自动推断返回类型为数字
    doubleCount(state) {
      return state.count * 2
    },
    // **必须** 明确设置返回类型
    doublePlusOne(): number {
      // 自动完成 and typings for the whole store ✨
      return this.doubleCount + 1
    },
  },
})
```

然后您可以直接访问存储实例上的 getter

```vue
<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>

<script>
export default {
  setup() {
    const store = useCounterStore()

    return { store }
  },
}
</script>
```

  

### 4.1 - 访问其他 getters





### 4.2 - 向 getters 传递参数



### 4.3 - 访问其他 store 中的 getter



### 4.4 - setup() 用法



### 4.5 - 选项 API 的用法



#### （1）使用 setup 钩子函数



#### （2）不使用 setup 钩子函数