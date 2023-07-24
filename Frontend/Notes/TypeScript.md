# 第一章、概述

## 1 - 静态类型检查器

TypeScript 在执行之前，基于 <span style="color: #0099dd">值的类型</span> 检查程序是否有错误。它是 <span style="color: #e3371e">静态类型检查器</span> 



## 2 - Typescript 编译器

### 2.1 - 安装

```bash
# 这将全局安装 TypeScript 的编译器 tsc
$ npm install -g typescript
```



# 第二章、基础

JavaScript 中的每个值会随着我们执行不同的操作表现出一系列的行为，使得我们很难在代码执行前进行相关的预测

> - JavaScript
>   - 只提供了动态类型 —— 执行代码，然后才能知道会发生什么事
> - Typescript
>   - 提供静态的类型系统，在代码实际执行前预测代码的行为



## 1 - 静态类型检查

**静态类型系统**描述了程序运行时值的结构和行为

> 像 TypeScript 这样的静态类型检查器会利用类型系统提供的信息，会在我们执行错误代码之前首先抛出一个错误

```typescript
const message = "hello!";
 
message();
// This expression is not callable.
// Type 'String' has no call signatures.
```



## 2 - 非异常失败

**运行时错误**

- JavaScript 运行时，抛出异常，因为 [ECMAScript 规范](https://tc39.github.io/ecma262/) 明确规定了针对异常应该表现的行为



**非异常失败**

- JavaScript 中存在一些“合法bug”,不会马上引起错误的“有效” JavaScript 代码。

  ```js
  const user = {
      name: 'Daniel',
      age: 26,
  };
  user.location;       // 返回 undefined
  ```

- TypeScript 可以捕获到**很多**合法的 bug



## 3 - 类型工具

类型检查器可以通过获取的信息检查我们是否正在访问变量或者其它属性上的正确属性

- 一旦获取到了这些信息，Typescript ，也能够提示你可能想要访问的属性
- 在编辑器中输入的时候，核心的类型检查器能够提供**报错信息**和**代码补全**
- 支持 TypeScript 的编辑器可以通过“快速修复”功能**自动修复错误**，重构产生易组织的代码
- 具备有效的**导航功能**，能够让我们跳转到某个变量定义的地方，或者找到对于给定变量的所有引用



## 4 - TypeScript 编译器 —— tsc





## 5 - 报错时产出文件

默认情况下，报错后仍会产出对应的 `js文件`，这种结果其实和 TypeScript 的核心原则有关：大多数时候，**你**比 TypeScript 更了解代码。



通过开启 [noEmitOnError](https://www.typescriptlang.org/tsconfig#noEmitOnError) 编译选项，使 <span style="color: #0099dd">报错时不产出文件</span> 

```bash
$ tsc --noEmitOnError hello.ts
```



## 6 - 显式类型



## 7 - 擦除类型

类型注解并不属于 JavaScript（或者专业上所说的 ECMAScript）的内容，因此没有任何浏览器或者运行时能够直接执行不经处理的 TypeScript 代码

经过编译，才能去除或者转换 TypeScript 独有的代码，从而让这些代码可以在浏览器上运行



## 8 - 降级

将更新或者“更高”版本的 ECMAScript 向下降级为更旧或者“更低”版本的代码，就是所谓的**降级**。

默认情况下，TypeScript 会转化为 ES3 代码，这是一个非常旧的 ECMAScript 版本。我们可以使用 [target](https://www.typescriptlang.org/tsconfig#target) 选项将代码往较新的 ECMAScript 版本转换

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
```



```bash
$ tsc --target es2015 hello.ts
```



```js
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```

> 虽然默认的目标代码采用的是 ES3 语法，但现在浏览器大多数都已经支持 ES2015 了。
>
> 所以，大多数开发者可以安全地指定目标代码采用 ES2015 或者是更高的 ES 版本，除非你需要着重兼容某些古老的浏览器



## 9 - 严格性

不同的用户会由于不同的理由去选择使用 TypeScript 的类型检查器



#### noImplicitAny

启用 [noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny) 配置项，在遇到被隐式推断为 `any` 类型的变量时就会抛出一个错误



#### strictNullChecks

让处理 `null` 和 `undefined` 的过程更加明显



# 第三章、常见类型

## 1 - 基本类型

JavaScript 有三个非常常用的基本类型，各自在 Typescript 有对应的类型

> 类型名字 String、 Number 和 Boolean (以大写字母开头)是合法的
>
> - 但是引用一些特殊的内置类型，这些类型很少出现在代码中
> - 对于类型，始终使用 string、number、boolean



### string

表示类似`"Hello，world"`的字符串值



### number

表示类似`42`的数字



> JavaScript 对于整数没有特殊的运行时值
>
> - 不存在 `int` 或 `float`
> - 一切都是 `number`



### boolean

表示`true` 或 `false`



## 2 - Arrays

要指定类似`[1, 2, 3]`的数组类型，可以使用语法`number[]`，这种语法适用于任何类型

也可以写成 `Array<number>`，意思是一样的

在讨论泛型时，我们将更多地了解语法 `T<U>`



> // 请注意
>
> [number] 是另外一件事，请参阅元组类型一节



## 3 - any

TypeScript 中的一个特殊类型，可以在不希望特定值导致类型检查错误时使用



### 3.1 - 特点

- any 类型的值，可以访问它的任何属性，像函数一样调用它，给它赋给任意类型的值，或几乎任何其他语法合法的东西



```typescript
let obj: any = { x: 0 };
// 下列任何一行代码都不会引发编译器错误
// 使用“ any”禁用所有进一步的类型检查，
// 并假定您比 TypeScript 更了解环境
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```



### 3.2 - noImplicitAny 选项

如果没有指定类型，并且 TypeScript 无法从上下文推断类型，则编译器通常会 <span style="color: #0099dd">默认</span> 为 any 类型

通常希望避免这种情况，因为 any 类型不会进行类型检查

- 可以通过编译配置文件 noImpicity 字段，将任何隐式 any 标记为错误



## 4 - 变量的类型注解

### 4.1 - 类型注解

当使用 const、 var 或 let 声明变量时，可以选择添加 <span style="color: #e3371e">类型注释</span> 以**显式**指定变量的类型

```typescript
let myName: string = "Alice";
```



> typescript中，类型注释总是紧跟在被键入的内容之后。



### 4.2 - 类型推断

但是在大多数情况下，类型注解不需要的。只要有可能，TypeScript 会尝试自动推断代码中的类型。

例如，根据变量初始值设定项的类型推断变量的类型

```typescript
// 无需类型注解，'myName'被推断为 'string' 类型
let myName = "Alice";
```



## 5 - 函数

函数是在 JavaScript 中传递数据的主要方式

在 Typescript 中，可以指定函数 <span style="color: #e3371e; font-weight: 600">输入值</span> 和 <span style="color: #e3371e; font-weight: 600">输出值</span> 的类型



### 5.1 - 参数类型注解

声明函数时，可以在每个参数后面添加类型注解，以声明函数接受的参数类型



参数类型注解 <span style="color: #49bf51">位于</span> <span style="color: #ab04d9">参数名之后</span> 

```typescript
// 参数类型注解
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```



当函数参数具有类型注解时，将会检查该函数的参数

```typescript
// 如果执行，将是一个运行时错误
greet(42)
```



> 即使函数参数没有类型注解，TypeScript 仍将检查是否传递了正确数量的参数



### 5.2 - 返回值类型注释

也可以添加返回值类型注解



返回值类型注解出现在 <span style="color: #ab04d9">参数列表之后</span> 

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

- 与变量类型注释非常相似，通常不需要返回类型注释，因为 TypeScript 将根据返回语句推断函数的返回类型（上例中的类型注解，并没改变任何事情）
- 有些代码库会为文档目的显式指定返回类型，以防止意外更改，或者仅仅为了个人喜好



### 5.3 - 匿名函数

匿名函数与函数声明稍有不同

当一个函数出现在 TypeScript 可以决定如何调用它的地方时，该函数的参数将自动被赋予类型

```typescript
// 这里没有类型注释，但 TypeScript 可以发现 bug
const names = ["Alice", "Bob", "Eve"];
 
// 函数中的上下文类型
names.forEach(function (s) {
  console.log(s.toUppercase());
  // toUppercase()处出现报错
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 
  // 'toUpperCase'?
});
 
// 上下文类型推断，同样适用于箭头函数
names.forEach((s) => {
  console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 
  // 'toUpperCase'?
});
```



即使参数 `s` 并没指定类型，Typescript 使用forEach函数的类型，以及推断的数组类型，来决定参数 `s` 的类型



这一过程称为**上下文类型(contextual typing)**，因为函数所在的上下文，告知函数应有的类型。

类似于推断规则，并不需要显式地学习它是如何发生的，但理解它可帮助您明白何时不需要类型注释



## 6 - 对象类型

除了基本类型外，最常遇到的类型是**对象类型（object type）** 

这指的是任何具有属性的 JavaScript 值，几乎包含所有属性！



要定义对象类型，我们只需列出它的属性及其类型

```typescript
// 参数的类型注解是对象类型
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

- 此处，函数参数注解类型是两个number类型的属性，可以使用 `,` 和 `;` 来分隔属性，最后一个分隔符可选
- 每个属性的类型也是可选的，如果不指定类型，则假定为 any 类型



### 6.1 - 可选属性

对象类型还可以指定它们的部分或全部属性是可选的，只需在属性名后添加一个 `?`

```typescript
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK.
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```



在 JavaScript 中，访问不存在的属性，会返回 `undefined` 而非 `运行时错误`

因此，当从可选属性读取时，在使用它之前必须检查未定义的属性

```typescript
function printName(obj: { first: string; last?: string }) {
  // Error - 如果未提供'obj.last'，可能会崩溃！
  console.log(obj.last.toUpperCase());
  // Object 可能是 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // 一个安全的替代使用现代JavaScript语法（可选链运算符）:
  console.log(obj.last?.toUpperCase());
}
```



## 7 - 联合类型

TypeScript 的类型系统允许您使用各种各样的运算符从现有类型构建新类型。

现在我们已经知道如何编写一些类型，是时候开始以有趣的方式组合它们了。



### 7.1 - 定义一个联合类型

联合类型是由两个或多个其他类型形成的类型，表示可能是其中任何一种类型的值。

我们将联合类型中的每一种类型称为联合成员



```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```



### 7.2 - 使用联合类型

TypeScript仅允许您使用联合类型进行操作，前提是该操作对联合类型中的每个成员都有效

举个例子，如果你有一个 联合类型 `string | number`，则不能使用仅在字符串上可用的方法



```typescript
function printId(id: number | string) {
  console.log(id.toUpperCase());
  // Error - at `toUpperCase()`
  // Property 'toUpperCase' does not exist on type 'string | number'.
  // Property 'toUpperCase' does not exist on type 'number'.
}
```



解决方案是用代码缩小联合，就像在没有类型注释的JavaScript中一样。

当 TypeScript 可以基于代码的结构为值推导出更具体的类型时，就会发生收缩

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    // 在这个分支, id 的类型是 'string'
    console.log(id.toUpperCase());
  } else {
    // 此处，id 的类型是 'number'
    console.log(id);
  }
}
```

```typescript
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 此处: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // 此处: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// 注意，在 else 分支中，我们不需要做任何特殊的事情
// —— 如果 x 不是字符串[] ，那么它肯定是字符串
```



有时，联合类型中的所有联合成员有共同点。例如，arrays 和 strings 都有 `slice` 方法。

如果联合类型中的每个成员某一个属性相同，则可以不用收缩就可以使用这个属性

```typescript
// 返回值类型被推断为 number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```



> 这可能会让人感到困惑，联合类型似乎具有这些类型属性的交集。这并非偶然——"联合"（union）的名称来自类型理论。
>
> 联合类型 `number | string` 是由每种类型的值的联合组成的
>
> 注意，给定两个集合，每个集合都有相应的事实，只有这些事实的交集适用于集合本身的并集
>
> 例如，如果我们有一个房间里的高个子戴着帽子，另一个房间里的讲西班牙语的人戴着帽子，把这两个房间结合起来，我们对每个人的唯一了解就是他们一定戴着帽子



## 8 - 类型别名

我们通过直接在类型注解中编写对象类型和联合类型来使用它们。 这很方便，但是常常会想要多次使用同一个类型，并且通过一个名称引用它。

*类型别名* 正是如此 - 任意 *类型* 的一个名称

```typescript
type Point = {
  x: number;
  y: number;
};
 
// 与前面的示例完全相同
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```



实际上，不只是对象类型，你可以使用类型别名为任何类型命名

```typescript
type ID = number | string;
```



请注意，别名 *只是* 别名 - 你不能使用类型别名创建同一类型的不同“版本”。



## 9 - 接口

接口声明 是命名**对象类型**的另一种方式

```typescript
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```



### 9.1 - 类型别名和接口之间的区别

类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 几乎所有的 `interface` 功能都可以在 `type` 中使用

**关键区别**在于不能重新开放类型以添加新的属性，而接口始终是可扩展的



## 10 - 类型断言

有时您会有 TypeScript 无法知道的值类型的信息，可以使用类型断言来指定更具体的类型

```typescript
// Typescript 仅知道会 return  一个 HTMLElement
// 开发者知道会 return 一个 HTMLCanvasElement
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```



与类型注解一样，类型断言由编译器删除，不会影响代码的运行时行为

> **提醒:** 
>
> 因为类型断言在编译时被删除，所以没有与类型断言关联的运行时检查
>
> 如果类型断言是错误的，则不会产生异常或 null



语法

- as + Type

- 还可以使用尖括号语法(除非代码位于. tsx 文件中) ，这是等效的

  ```typescript
  const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
  ```





TypeScript 只允许将类型断言转换为更具体或更不具体的类型版本

这条规则可以防止“不可能”的强迫行为

```typescript
// ERROR
// Conversion of type 'string' to type 'number' may be a mistake 
// because neither type sufficiently overlaps with the other. If 
// this was intentional, convert the expression to 'unknown' first.
const x = "hello" as number;
```



有时，这一规则可能过于保守，不允许更复杂的有效强制转化。

如果需要，可以使用两个类型断言

- 首先，断言类型为 `any` 或者 `unknown`
- 然后，断言为所需的类型

```typescript
const a = expr as any as T;
```



## 11 - 文字类型

除了常规类型字符串和数字之外，我们还可以在类型位置中引用特定的字符串和数字

关键字 var 和 let 都允许改变变量保存的值，而 const 不允许，Typescript 正是利用这一点创建文字类型

```typescript
let changingString = "Hello World";
changingString = "Olá Mundo";
// 因为 `changingString` 可以表示任何可能的字符串
// let changingString: string;
 
const constantString = "Hello World";
// 因为 `constantString` 仅可以表示一个可能的字符串, 具有文字类型表示形式
// const constantString: "Hello World";
```



文字类型本身并不十分有价值，有一个只能有一个值的变量是没有多大用处的！

但是通过将文字组合成联合，您可以表达一个更加有用的概念——例如，只接受一组已知值的函数

```typescript
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
// ERROR
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```



当然，您可以将它们与非文字类型组合在一起

```typescript
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");
// ERROR
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
```



还有一种文字类型: 布尔文字类型，只有两种布尔文字类型，true 或 false。

布尔型本身实际上只是 联合类型 true | false 的别名



### 10.1 - 字面推理

使用对象初始化变量时，TypeScript 假定该对象的属性稍后可能会更改值

```typescript
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
// obj.counter 被推断为 number

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// ERROR
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// req.method 被推断为 string，而不是“ GET”
```

**解决方法：**

- 添加类型断言来更改推断

  ```typescript
  // Change 1:
  const req = { url: "https://example.com", method: "GET" as "GET" };
  // Change 2
  handleRequest(req.url, req.method as "GET")
  ```

- 使用 const 将整个对象转换为类型文字

  ```typescript
  const req = { url: "https://example.com", method: "GET" } as const;
  handleRequest(req.url, req.method);
  ```



对于类型系统，`as const`，确保所有属性都被赋予文本类型，而不是更通用的

 string 或 number



## 12 - null 和 undefined

JavaScript 有两个基本值用于表示缺少或未初始化的值: null 和 undefined。

TypeScript 有两个相同名称的对应类型，这些类型的行为取决于您是否开启 `strictNullChecks`。



### 12.1 - 关闭 strictNullChecks

关闭 strictNullChecks 后，仍然可以正常地访问可能为 null 或未定义的值，空值和未定义值可以赋给任何类型的属性。这类似于没有空检查的语言(例如 C # 、 Java)的行为。



缺乏对这些值的检查往往是 bug 的主要来源，建议打开 strictNullChecks。



### 12.2- 开启 strictNullChecks

打开 strictNullChecks 时，如果值为 `null` 或 `undefined`，则需要在对该值使用方法或属性之前测试这些值。

就像在使用可选属性之前检查未定义一样，我们可以使用窄化来检查可能为 null 的值

```typescript
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```



### 12.3 - 非空断言运算符（后缀`!`）

TypeScript 还有一种特殊的语法，可以在不执行任何显式检查的情况下从类型中删除 `null` 和 `undefined`。

在任何表达式后写`!`，断言值不可能为 `null` 或 `undefined`

```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```



与其他类型断言一样，这不会改变代码的运行时行为，所以只使用`!`非常重要，因为你知道这个值不能是 null 或者未定义的



## 13 - Enums

枚举是由 TypeScript 添加到 JavaScript 中的一个特性，它允许描述一个值，该值可以是一组可能的命名常量中的一个。

与大多数 TypeScript 特性不同，这不是对 JavaScript 的类型级别添加，而是添加到语言和运行时中



## 14 - 不太常见的类型

### 14.1 - bigint

从 ES2020开始，JavaScript 中有一个用于非常大的整数的原型，`BigInt`

```typescript
// 通过 BigInt 函数，创建一个 bigint
const oneHundred: bigint = BigInt(100);
 
// 通过字面量，创建一个 bigint
const anotherHundred: bigint = 100n;
```



### 14.2 - symbol

通过函数 Sign ()创建全局唯一引用

```typescript
const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
// Error
// This condition will always return 'false' since the types 'typeof 
// firstName' and 'typeof secondName' have no overlap.
    // Can't ever happen
}
```



# 第N章、声明文件

## 5 - Do's and Don'ts

### 5.1 - 一般类型（General Types）

#### （1）Number, String, Boolean, Symbol 和 Object

- ❌不要使用 Number, String, Boolean, Symbol 和 Object
  - 这些类型指的是JavaScript代码中几乎从未正确使用过的非基本包装对象
- ✅使用 number, string, boolean, symbol 和 object



```typescript
/* WRONG */
function reverse(s: String): String;

/* OK */
function reverse(s: string): string;
```



### 5.2 - 泛型（Generics）

永远不要有不使用其类型参数的泛型类型
