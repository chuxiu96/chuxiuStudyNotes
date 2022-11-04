

## 术语

### 实例

> 实例是某个类的对象
>

***

### 回调函数(Callback function)

函数可以作参数，如果一个函数A被当做另一个函数B的参数使用，那么函数A可以称为回调函数

```javascript
// 函数执行之后会产生一个子线程，子线程会等待 3 秒，然后执行回调函数 "print"，
function print() {
    document.getElementById("demo").innerHTML="RUNOOB!";
}
setTimeout(print, 3000);
```

作用：

- 恰当时机发通知

- 按照实际需要调整代码的功能
- 提高运行效率

#### 回调地狱

回调函数嵌套回调函数的情况

缺点：

- 维护和处理异常十分繁琐
- 缩进格式非常冗赘，可读性差

```javascript
setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Second");
        setTimeout(function () {
            console.log("Third");
        }, 3000);
    }, 4000);
}, 1000);
```

### 异步编程(Asynchronous, async)

- 异步代码总在同步之后执行

    ```javascript
    var a =10;
    setTimeout(() => {
    a++;
    },0)
    consoke.log(a)  // result:10
    ```

### 异常处理

#### 术语

##### 异常/错误

- 当 JavaScript 引擎执行 JavaScript 代码时，发生各种错误，导致程序停止运行

##### 抛出（throw）异常/错误

- 当错误发生时，JavaScript 引擎通常会停止，并生成一个错误消息。

##### 捕获（catch）异常/错误

- 有错误发生时，执行；无错误发生时，跳过

    ```javascript
            function fn() {
                try {
                    alert(str);
                } catch(e) {
                    alert(e);  // 弹出对话框：ReferenceError: str is not defined
                }
            }
            fn();
    ```

##### throw语句

- 创建一个自定义错误（给出提示）



- **try** 语句	 —— 测试代码块的错误。

    - 无异常，执行，忽略 catch 语句，跳转到 finally 语句

    - 有异常，异常处及之后的代码停止执行，跳转执行 catch 中的代码

        ```javascript
                try {
                    console.log(111);
                    console.log(222);
                    addlert('出错')
                    console.log(333);
                    console.log(444);
                } catch (e) {
                    console.log(555);
                    console.log(e);
                }
        ```

        ![](javascript.assets/异常处理-1.png)

- **catch** 语句 —— 处理错误。

    - catch( ) 的参数是一个对象，引用 Error 对象

        ```javascript
                try {
                    console.log(111);
                    console.log(222);
                    addlert('出错')
                    console.log(333);
                    console.log(444);
                } catch (e) {
                    console.log(e);			// ReferenceError: addlert is not defined
                    console.log(e.name);	// ReferenceError
                    console.log(e.message);	// addlert is not defined
                }
        ```

    - Error 

        - 通过 `Error` 的构造器可以创建一个错误对象

        - 运行时错误产生时，`Error` 的实例对象会被抛出

        - 用户自定义异常

            ```javascript
            // 参数message：可选。可阅读的错误描述信息。
            new Error([message])
            ```

        - ECMA-262 规范了 7 种错误类型

            |      类型      |                             说明                             |
            | :------------: | :----------------------------------------------------------: |
            |     Error      | 普通异常。与 `throw` 语句和 `try/catch` 语句一起使用，属性 `name` 可以读写异常类型，`message` 属性可以读写详细错误信息。 |
            |   EvalError    |               不正确的使用 `eval()` 方法时抛出               |
            |  SyntaxError   |                      出现语法错误时抛出                      |
            |   RangeError   |                    数字超出合法范围时抛出                    |
            | ReferenceError |               读取不存在的变量时抛出，无效引用               |
            |   TypeError    |                   变量或参数不属于有效类型                   |
            |    URIError    |                   URI 编码和解码错误时抛出                   |

            

- **throw** 语句 —— 创建自定义错误。

    catch ( ) 系统内定， throw 可以自定义

    ```javascript
            var a = -5;
            if (a < 0) {
                throw 'a 不是正整数'  // Uncaught a 不是正整数
            }
    ```

- **finally** 语句 —— 在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行

    不接受任何参数

    ```javascript
            try {
                console.log(111);
                alert(str)
                console.log(222);
            } catch (e) {
                console.log(e);
            } finally {
                console.log('执行完毕');
            }
    ```

    ![](javascript.assets/异常处理-2.png)

### 事件循环（[EventLoop](https://www.bilibili.com/video/BV1zq4y1p7ga?p=245&spm_id_from=333.1007.top_right_bar_window_history.content.click)）

#### 同步与异步

为防止某个耗时任务导致程序假死的问题，JavaScript将待执行任务分为同步任务和异步任务

- 同步任务（synchronous）
    - 又称非耗时任务，指在主线程上排队执行的任务
    - 只有前一个任务执行完毕，才能执行后一个任务
- 异步任务（asynchronous）
    - 又称耗时任务，异步任务由JavaScript委托给宿主环境（web浏览器/node.js）进行执行
    - 异步任务执行完成后，会通知JavaScript主线程执行异步任务的回调函数

#### 同步任务与异步任务的执行过程

- 同步任务由 JavaScript 主线程在执行栈中次序执行
- <span style="color: #e3371e">异步任务</span>委托给<span style="color: #e3371e">宿主环境</span>执行
- <span style="color: #e3371e">已完成</span>的<span style="color: #e3371e">异步任务</span>对应的<span style="color: #e3371e">回调函数</span>，会被加入到<span style="color: #e3371e">任务队列</span>中排队等待执行
- <span style="color: #e3371e">JavaScript 主线程</span>的<span style="color: #e3371e">执行栈被清空</span>后，会读取任务队列中的<span style="color: #e3371e">回调函数</span>，次序执行
- <span style="color: #e3371e">JavaScript 主线程</span>不断重复第 4 步

![](javascript.assets/eventloop.png)

#### EventLoop 的基本概念

EventLoop : JavaScript 主线程从“任务队列”中读取异步任务的回调函数，放到执行栈中一次执行，这个<span style="color: #e3371e">过程</span>是循环不断的，整个机制又称为 <span style="color: #e3371e">EventLoop </span>（事件循环）。

#### 案例分析

```javascript
import thenFs from 'then-fs'

console.log('A')
thjenFs.readFile('./files/1.txt','utf8').then(dataStr => {
	console.log('B')
})
setTimeout(() => {
	console.log('C')
},0)
console.log('D')

// 打印
// A
// D
// C
// B

// 分析：
// A 和 D 属同步任务，次序执行
// B 和 C 属异步任务，被委托给宿主环境执行
// C 优先于 D 先输出
```

## 深入

### 1 - 函数

![](03-javascript.assets/1-函数定义.png)

#### 1.1 - 匿名函数

是没有函数名的函数，在实际开发中使用的频率非常高

```javascript
function () {
//	code
}
```

- 匿名函数的自调用
    - Javascript 中，圆括号`()`是一种运算符，跟在函数名之后，表示调用该函数
    - 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”，目的：
        - 一是不必为函数命名，避免了污染全局变量；
        - 二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

```javascript
(function(){
//运行的代码
})()
```

