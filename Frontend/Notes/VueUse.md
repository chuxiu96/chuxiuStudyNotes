# 第一章、About

 <span style="color: #e3371e; font-weight: 600">[VueUse](https://vueuse.org/)</span>  是一个基于Vue3 <span style="color: #e3371e">组合 API</span> 的 <span style="color: #49bf51">工具函数集</span> 



## 1 - 安装



## 2 - 最佳实践

### 2.1 - 解构赋值

VueUse 中的大多数函数返回一个 refs 对象，可以使用ES6中的对象结构赋值语法，去获取需要的

```js
import { useMouse } from '@vueuse/core'

// "x" and "y" are refs
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)
```



如果更喜欢将它们以对象属性的风格使用，不解包 ref 对象，可以使用 `reactive()` 

```js
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())

// "x" and "y" 将自动解包, 无需 `.value`
console.log(mouse.x)
```



### 2.2 - 副作用清除

类似于vue的 `watch` 和 `computed`，VueUse 的 函数，会在组件卸载时 <span style="color: #0099dd">自动清除副作用</span> ，所有的 VueUse 函数都遵守这个传统



#### 手动清除副作用

一些函数会返回一个停止处理程序，就像 `watch` 函数一样

```js
const stop = useEventListener('mousemove', () => {})

// ...

// 手动注销事件监听器
stop()
```



并非所有的函数都返回一个停止处理程序，一个更通用的解决方案是使用 <span style="color: #e3371e">vue</span> 中的 <span style="color: #e3371e; font-weight: 600">effectScope</span> API

```js
import { effectScope } from 'vue'

const scope = effectScope()

scope.run(() => {
  // ...

  useEventListener('mousemove', () => {})
  onClickOutside(el, () => {})
  watch(source, () => {})
})

// 所有在‘ scope.run’中调用的可组合件将被释放
scope.stop()
```



### 2.3 - Ref 作为参数传递

在vue中，使用 `setup()` 函数构建 数据和逻辑之间的联系，为了灵活性，大多数 VueUse 函数，接受 ref 作为参数



以 useTitle 为例

#### 正常使用

通常情况下，`useTitle` 返回一个反映页面标题的 ref。当你重新给这个 ref 赋值，将会自动地更新标题

```js
const isDark = useDark()
const title = useTitle('Set title')

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})
```



#### 联结使用

也可以传递一个  ref ，使其绑定到页面标题

```js
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```



#### 响应式 getter

VueUse 9.0开始，引入了一个新的约定，将 <span style="color: #0099dd">响应式 getter</span> 作为参数传递，它与响应式对象和响应式变换工作得很好。

```js
const isDark = useDark()

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
```



## 3 - 配置

### 3.1 - 事件过滤器



### 3.2 - 响应时机



### 3.3 - 可配置的全局依赖项