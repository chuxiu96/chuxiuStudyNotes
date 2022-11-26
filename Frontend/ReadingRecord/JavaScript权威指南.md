# 第一章、JavaScript概述

### 1 - JavaScript 基本介绍

- JavaScript是面向web的编程语言
- 所有现代web浏览器都内置了JavaScript解释器，JavaScript使用广泛
- JavaScript是动态的、弱类型的编程语言
- JavaScript
    - 语法源自 Java
    - 一等函数（first-class function）源自Scheme
    - 基于原型（prototype-based）的继承源自 Self
- JavaScript语言核心针对文本、数组、日期和正则表达式的操作定义了很少的API
    - API 中不包含输入输出功能，输入输出功能由宿主环境（host environment，如web浏览器）提供



### 2 - JavaScript 语言核心

- JavaScript 注释、直接量、unicode 字符集、标识符和保留字、分号
- JavaScript 数据类型、变量和赋值
- 表达式和运算符
- 语句
- 对象
- 数组
- 函数
- 类和模块
- 正则表达式
- JavaScript子集和超集
- 服务端JavaScript

# 第二章、词法结构

编程语言的词法结构是一套基础性规则，用以描述如何编写程序。

### 1 - 字符集

JavaScript 程序是用 <span style="color: #e3371e">Unicode</span> 字符集编写的，支持地球上 几乎所有正在使用的语言

#### 1.1 - 区分大小写

- <span style="color: #e3371e">JavaScript</span> 是<span style="color: #e3371e">区分大小写</span> 的语言，<span style="color: #0099dd">关键字</span>、<span style="color: #0099dd">变量</span>、<span style="color: #0099dd">函数名</span>和所有的<span style="color: #0099dd">标识符</span>（identiier）都必须采取一致的大小写形式
- <span style="color: #e3371e">HTML</span> <span style="color: #49bf51">严格意义上</span>是<span style="color: #e3371e">区分大小写</span> 的，但因浏览器强大的纠错能力，不严格的大小写仍能正确解析渲染



#### 1.2 - 空格、换行符和格式控制符

- 空格、换行符

    - JavaScript 会<span style="color: #e3371e">忽略</span> 程序中标识（token）之间的<span style="color: #e3371e">空格</span> 
    - 多数情况也会<span style="color: #e3371e">忽略换行符</span> 
    - 由于代码中可以随意使用空格和换行符，因此采用<span style="color: #0099dd">整齐、一致的缩进</span> 形成统一的编程风格，可以<span style="color: #0099dd">提高</span> 代码的<span style="color: #0099dd">可读性</span> 

- 格式控制符

    - 格式控制符：“从右至左书写标记”，“从左至右书写标记”这些，控制着文本的视觉显示
    - 格式控制符可以用在 JavaScript的注释、字符串直接量’正则表达式直接量中
    - 但不能用在标识符（如，变量名）中
        - 例外：零宽连接符（\u2000）、零宽非连接符（\uFEFF）可以出现在标识符中，但不能作为首字符

- Unicode 转义序列

    - 有些计算机硬件和软件里，无法显示或输入 unicode 字符全集，因此 JavaScript 定义了一种特殊序列（\u 前缀 + 4个 16 进制数 ，如，\u00e9）

    - Unicode 转移写法可用在 字符串直接量、正则表达式直接量和标识符（关键字除外）中

        ```javascript
        "café" === "caf\u00e9"	// true
        ```



#### 1.3 - 标准化

- Unicode 允许使用多种方法对同一字符编码（它们的二进制编码不同）
- Unicode 标准为所有字符定义一个首选的编码格式，并给出一个标准化的处理方式将文本转化为一种适合比较的标准格式
- JavaScript 会认为正在解析的程序代码已是这种标准格式，不会再对气标识符、字符串或正则表达式作标准化处理

### 2 - 注释

JavaScript 支持两种格式的注释

- <span style="color: #e3371e">单行注释</span> 

```javascript
// 这是单行注释
<!-- 哈哈 -->
```

- <span style="color: #e3371e">多行注释</span> 

```javascript
/*	这是多行注释 */	// 这是单行注释
/*
*	这是
*	多行
*	注释
*/
```



### 3 - 直接量

<span style="color: #e3371e">直接量</span> （literal），就是程序中<span style="color: #e3371e">直接使用的数据值</span> 

```javascript
"chuxiu"		//	字符串文本
12				//	数字
1.2				//	浮点数
true			//	布尔值
/javascript/gi	//	正则表达式直接量（用作模式匹配）
null			//	空
```



### 4 - 标识符和保留字

<span style="color: #e3371e">标识符</span> 就是一个 <span style="color: #e3371e">名字</span> 

- 用来对 <span style="color: #0099dd">变量</span> 和 <span style="color: #0099dd">函数</span> 进行命名
- 或用作某些循环语句中的 <span style="color: #0099dd">跳转位置</span> 的标记

#### 4.1 - 标识符命名

- 必须以字母、下划线(_)、或美元符($)开始
- 后续可以是字母、数字、下划线(_)或美元符($)
    - 以便 JavaScript 正确区分标识符和数字，数字不允许作为首字符出现
- 处于可移植性和易书写的考虑，通常只使用 ASCⅡ <span style="color: #0099dd">字母</span> 和 <span style="color: #0099dd">数字</span> 书写标识符



#### 4.2 - 保留字

和其他任何语言一样，JavaScript 保留了一些标识符为自己所用

- JavaScript 把一些标识符拿出来用作自己的关键字，因此，就不能在程序中用这些关键字来做标识符了
- 一些当前语言版本并未使用，但在未来版本可能会用到的关键字，也作为保留字



### 5 - 可选的分号

- JavaScript 使用分号( <span style="color: #e3371e">;</span> )将语句分隔开，增强代码可读性和整洁性
- 缺少分隔符，一条语句的结束就成了下一条语句的开始，反之亦然
- JavaScript 中， <span style="color: #e3371e">如果语句独占一行</span> ，通常 <span style="color: #e3371e">可以省略语句之间的分号</span> 
    - 程序 <span style="color: #0099dd">结尾</span> 的分号
    - 或右花括号" <span style="color: #0099dd">｝</span> " <span style="color: #0099dd">之前</span> 的分号

#### 5.1 - 两种编码风格

- 使用分号明确标记语句的结束，即时并不完全需要使用分号
- 省略任何可以省略的分号，只在不得不用的情况下使用分号



#### 5.2 - JavaScript 中可选分号的细节

- JavaScript 会在 <span style="color: #e3371e">缺少分号无法正确解析代码</span> 的时候，自动在 <span style="color: #e3371e">换行处填补分号</span> 

    即当前语句和随后的非空格语句字符不能作为整体来解析，JavaScript 会在当前语句结束处填补分号

```javascript
a = 3;			// 第一个分号可以省略
b = 4;
/******************************/
a =3; b = 4;	//	第一个分号不能省略
/******************************/
var a			//	无法解析 var a a，此处添加 ;
a				//	可与后面代码解析为 "a = 3",并不给 a 结尾添加 ;
=
3
console.log(a)
//	JavaScript 将其解析为
var a; a = 3; console.log(a)
/******************************/
```



#### 5.3 - 若选择尽量不加分号的代码风格

- 请勿以  <span style="color: #e3371e">[</span>  、 <span style="color: #e3371e">(</span>  、 <span style="color: #e3371e">`</span>  开始新的一行
    - [	- 与上一行形成数组取下标或访问对象属性
    - (	- 与上一行形成函数调用
    - `	- 与上一行形成模版字符串

```javascript
[1, 2, 3].forEach(bar)

// 解决方法1	前面加 ;
;[1, 2, 3].forEach(bar)

//	解决方法2	声明一个变量接受
const nums = [1, 2, 3]
nums.forEach(bar)
```

**两个例外**：

- `return`、`break` 和 `continue` 语句和稍后的表达式之间不能有换行

    ```js
    return
    ture;
    
    // JS 解析为 return;true;
    ```

- "++"和"--"做后缀表达式，应与表达式位于同一行，否则，表达式行尾将填补分号，同时，"++"和"--"会作为下一行代码的前缀操作符

    ```js
    x
    ++
    y
    
    // JS 解析为 x; ++y
    ```



# 第三章、类型、值和变量

编程语言中，能够表示并操作的 <span style="color: #e3371e">值的类型</span> 称作 <span style="color: #e3371e">数据类型（type）</span> 

- 编程语言最基本的特性就是能够支持多种数据类型。
- 另一个基本特性是变量的工作机制。变量（variavle）是一个值的符号名称，通过名称即可获得对值的引用

## JavaScript 的数据类型分类

- 原始类型（primitive type）

    - 字符串
    - 数字
    - 布尔值
    - null（空）
    - undefined（未定义）

- 对象类型（object type）

    - 普通的 JavaScript 对象	- "键值对"的无序集合
    - 数组（array）                 - 带编号的值的有序集合

    - 函数
        - 具有与它相关联的可执行代码的对象，通过调用函数运行可执行代码，并返回运算结果

## 类

- 构造函数：用来初始化（使用 new 运算符）一个新建的对象的函数
- 每个构造函数定义了一类对象——由构造函数初始化的对象的集合
    - 类可看作对象类型的子类型
    - JavaScript 定义类
        - 数组类
        - 函数类
        - 日期类    - `代表日期的对象`
        - 正则表达式类    - `表示正则表达式的对象`
        - 错误类    - `表示 JavaScript 程序运行时错误和语法错误的对象`

## JavaScript 的垃圾回收

JavaScript 解释器由自己的内存管理机制，可自动对内存进行垃圾回收（garbage collection）。当不再有任何引用指向一个对象，解释器就知道这个对象没用，然后自动回收它所占用的内存资源。

## 方法

- 技术上，只有 JavaScript 对象才能拥有方法
- 实际上，数字，字符串和布尔值也有自己的方法
- 只有 null 和 undefined 无法拥有方法

## JavaScript 变量

- JavaScript  <span style="color: #e3371e">变量</span> 是 <span style="color: #e3371e">无类型</span> 的（untyped）
- 变量可被赋予任何类型的值，也可重新赋予不同类型的值
- 词法作用域（lexical scoping）
    - 全局变量（global variable）
        - 不在任何函数类型内声明的变量
        - 全局可见
    - 函数作用域（function scope）
        - 在函数内声明的变量
        - 只在函数内可见



### 3.1 - 数字

与其他编程语言不同，JavaScript <span style="color: #e3371e">不区分整数值和浮点数值</span> 

<span style="color: #e3371e">数字直接量</span> （numeric literal）指一个数字直接出现在 JavaScript 程序中

 <span style="color: #e3371e">注意：</span> 任何数字直接量前添加负号（-）可得到负值，但负号时一元求反运算符，并非数字直接量语法的组成部分

#### 3.1.1 - 整数型直接量

- 十进制值

```javascript
0
3
1000
```

- 十六进制值	- 以`"0x"或"0X"`为前缀

```javascript
0xff	//	对应十进制数 255
0xCAFE911
```

- 八进制值	- 以`"0"`为前缀	（ <span style="color: #e3371e">不建议使用</span> ；严格模式下，八进制直接量明令禁止）

```java
0377	//	对应十进制数	255
```



#### 3.1.2 - 浮点型直接量

浮点型直接量可以含有小数点

- 由整数部分、小数点和小数部分组成
- 也可使用指数计数法表示

```javascript
3.14
2345.789
6.02e23		// 6.02×10²³
1.47E-32
```



#### 3.1.3 - 算术运算符

使用 JavaScript 提供的算术运算符进行数字运算，还支持通过Math对象的方法进行更加复杂的算术运算

| 算术运算符 |    符号     |
| :--------: | :---------: |
|    加法    |      +      |
|    减法    |      -      |
|    乘法    |      *      |
|    除法    |      /      |
|    指数    |     **      |
|    取余    |      %      |
|    自增    | ++x 或 x++  |
|    自减    | -- x 或 x-- |
|    数值    |     +x      |
|   负数值   |     -x      |

```javascript
Math.pow(2,4)	//	16
Math.round(.6)	//	1.0
Math.ceil(.6)	//	1.0
Math.floor(.6)	//	0.0
```



##### 3.1.3.1 - 溢出、下溢、除以零

JavaScript 的算术运算在 <span style="color: #e3371e">溢出</span> （overflow）、 <span style="color: #e3371e">下溢</span> （underflow）或 <span style="color: #e3371e">被零整除时</span> 不会报错

- 溢出
    - 当数字运算结果超过 JavaScript 所能表示的数字上限（溢出），结果为一个特殊的无穷大（infinity）值，在 JavaScript 中以 `Infinity` 和 `-Infinity` 表示
- 下溢
    - 运算结果无限接近零并比 JavaScript 能表示的最小值还小时，JavaScript会 <span style="color: #e3371e">返回 0</span> ，负数下溢， <span style="color: #e3371e">返回"负零"</span> 
    - 负零与正常零完全一样； JavaScript 中很少用到负零
- 被零整除
    - 不报错，返回 `Infinity` 或 `-Infinity`
    - 例外，`0 / 0` 是无意义的，返回 `NaN`



##### 3.1.3.2 - Infinity 和 NaN

Infinity 和 NaN 在 ECMAScript 3 中，可读/写，并可修改

在 ECMAScript 5 中 修正，定义为只读

###### NaN的特殊

NaN 与任何值都 <span style="color: #e3371e">不相等</span> ，包括 <span style="color: #e3371e">自身</span> 

```javascript
x == NaN	// 无法判断 x 是否是 NaN
x != x		// 可以判断。当且仅当 x 是 NaN 时，结果为 true 
```



###### 负零值的特殊

负零值与正零值 <span style="color: #e3371e">相等</span> ，作为除数时不相等

```javascript
var zero = 0		//	正零值
var negz = -0		//	负零值
zero === negz		//	=> true:正零值和负零值相等
1/zero === 1/negz	//	=> false:正无穷大和负无穷大不相等
```



#### 3.1.4 - 二进制浮点数和四舍五入错误

JavaScript 使用实数常常只是真实值的近似表示，由于采用 IEEE-754 浮点表示法（一种二进制表示法），可精确表示分数，如 1/2、1/8、1/1024，但不能精确表示类似 0.1 这种简单的数字。

JavaScript 中的数字具有足够精度，可以及其近似于 0.1，但不是 0.1。

```javascript
var x =.3 - .2
var y =.2 - .1
x == y			//	=> false
x == .1			//	=> false
// JavaScript真是运行环境中，0.3 - 0.2 = 0.099 999 999 999 999 98
y == .1			//	=> true
```



#### 3.1.5 - 日期和时间

JavaScript 语言核心中包括  <span style="color: #e3371e">Date()</span> 构造函数，用来创建表示日期和事件的 <span style="color: #e3371e">对象</span> 

这些日期对象的方法为日期计算提供了简单的 API

```javascript
            var then = new Date(2022, 4, 28)
            console.log(then);  //  =>  Sat May 28 2022 00:00:00 GMT+0800 (中国标准时间)
            var later = new Date(2022, 4, 28, 18, 0, 0)
            console.log(later); //  =>  Sat May 28 2022 18:00:00 GMT+0800 (中国标准时间)
            var now = new Date() // 当前日期和时间
            console.log(now); 	//  =>  Sat May 28 2022 10:40:30 GMT+0800 (中国标准时间)
            var elapsed = now - then
            console.log(elapsed);					// =>  38453957
            console.log(later.getFullYear());		//  =>  2022
            console.log(later.getMonth());			//  =>    4
            console.log(later.getDate());			//  =>  28
            console.log(later.getDay());			//  =>  6
            console.log(later.getHours());			//  =>    18
            console.log(later.getMinutes());		//  =>      0
            console.log(later.getMilliseconds());	//  => 0
```



### 3.2 - 字符串

#### 3.2.1 - 字符串直接量

JavaScript 中的字符串直接量，是由 <span style="color: #e3371e">单引号</span> 或 <span style="color: #e3371e">双引号</span> 括起来的字符序列

- 由单引号界定的字符串可包含双引号
- 由双引号界定的字符串可包含单引号
- ECMAScript 5 中，字符串直接量可 <span style="color: #e3371e">拆分成数行</span> ，每行必须以反斜线（ <span style="color: #e3371e">\</span> ）结束；如果希望 <span style="color: #e3371e">另起一行</span> ，可使用转义字符  <span style="color: #e3371e">\n</span> 

```javascript
""						// 空字符串
"test"
'3.14'
"name='出岫'"
'I see "rainbow"'
'一行\n另一行'			// 显示为两行
'Long\
long\
string'
// => 'Long long string'
```

##### 代码风格——字符串

HTML、JavaScript都可使用单引号和双引号来界定字符串，因此，当 JavaScript 代码和 HTML 代码混杂在一起时，最好各自使用独立的引号风格，例如：

- HTML 中使用双引号表示字符串
- JavaScript 中使用单引号表示字符串

```html
<button onclick="alert('出岫')">点我</button>
```



#### 3.2.2 - 转义字符

JavaScript 字符串中，反斜线 <span style="color: #e3371e">（ \ ）</span> 有特殊用途，反斜线负号加一个字符，就不再表示它们的字面含义了。

| 转义字符 |          含义          |
| :------: | :--------------------: |
|    \n    |    换行符（\u000A）    |
|    \o    |   NUL字符（\U0000）    |
|    \b    |    退格符（\u0008）    |
|    \t    |  水平制表符（\u0009）  |
|    \v    |  垂直制表符（\u000B）  |
|    \f    |    换页符（\u000C）    |
|    \r    |    回车符（\u000D）    |
|    \"    |    双引号（\u0022）    |
|    \'    | 撇号或单引号（\u0027） |



#### 3.2.3 - 字符串的使用

- 字符串连接

    - （<span style="color: #e3371e">+</span>）运算符作用于数字，表示两数相加；作用于 <span style="color: #e3371e">字符串</span> ，表示 <span style="color: #e3371e">字符串连接</span>

    ```javascript
    msg = 1 + 'hello'	// => '1hello'
    ```

- 字符串 length 属性

    - 确定字符串的长度

    ```javascript
    's'.length		// => 1
    ```

- [字符串的其他可调用方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

    ```javascript
                var s = 'hello, world'			//  定义字符串
                console.log(s.charAt(0))		//  => h：第一个字符
                console.log(s.charAt(s.length - 1))	//  => d：最后一个字符
                console.log(s.substring(1, 4))	//  => ell：第2~4个字符
                console.log(s.slice(1, 4)) 		//  => ell：同上
                console.log(s.slice(-3))		//  => rld ：最后三个字符
                console.log(s.indexOf('l'))		//  => 2：'l'首次出现的位置
                console.log(s.lastIndexOf('l'))	//  => 10：'l'最后一次出现的位置
                console.log(s.indexOf('l', 3))	//  => 3：在位置 3 之后，'l'首次出现的位置
                console.log(s.split(','))		//  => ['hello', 'world'] 分割成子串
    ```



#### 3.2.4 - 模式匹配

JavaScript 定义了 <span style="color: #e3371e">RegExp()</span> 构造函数，用来创建表示文本匹配模式的对象，这种模式称为“ <span style="color: #e3371e">正则表达式</span> ”（regular expression）

- RegExp 不是 JavaScript 的基本类型，与 Date 一样，只是一种具有实用 API 的特殊对象

- 虽然不是基本数据类型，但依然有直接量写法

    - 在两条斜线之间的文本构成一个正则表达式直接量
    - 第二条斜线后可跟随一个或多个字母，用来修饰匹配模式

    ```javascript
    /^HTML/				//	以匹配以 HTML 开头的字符串
    /[1-9][0-9]*/		//	匹配一个非零数字，后面可以是任意数字
    /\bjavascript\b/i	// 匹配单词"JavaScript"，忽略大小写
    ```

- RegExp 对象定义了很多有用的方法，字符串同样具有可以接收 RegExp 参数的方法

    ```javascript
    var text = 'testing:1, 2, 3'
    var pattern = /\d+/g	// 匹配所有包含一个或多个数字的实例
    pattern.test(text)		// => true：匹配成功
    text.search(pattern)	// =>	9：首次匹配成功的位置
    ```

### 3.3 - 布尔值

布尔值指代真或假、开或关、是或否。布尔值类型只有两个值，保留值 <span style="color: #e3371e">true</span> 和 <span style="color: #e3371e">false</span> 

- JavaScript 中的比较语句的结果通常是布尔值

- 布尔值通常用于 JavaScript 中的控制结构中

-  <span style="color: #0099dd">任意</span> JavaScript 的 <span style="color: #0099dd">值</span> 都可 <span style="color: #0099dd">转换为布尔值</span> ，下面值被转化为 <span style="color: #0099dd">false</span> ：

    - undefined
    - null
    - 0 或 -0
    - NaN
    - ''  // 空字符串

     <span style="color: #ab04d9">所有其他值</span> 被转化为  <span style="color: #ab04d9">true</span> 



#### 3.3.1 - 三个重要的布尔运算符

- &&
    - 逻辑与（AND）操作
    - 仅当两个操作数 <span style="color: #e3371e">同</span> 是 <span style="color: #e3371e">真</span> 值才返回 <span style="color: #e3371e">true</span> ，否则返回 false
- ||
    - 逻辑或（OR）操作
    - 仅当两个操作数 <span style="color: #e3371e">同</span> 是 <span style="color: #e3371e">假</span> 值才返回 <span style="color: #e3371e">false</span> ，否则返回 true
- !
    - 逻辑非（NOT）操作
    - 一元运算符，对操作数取反



### 3.4 - null 和 undefined

null 表示一个特殊值，常用来描述”空值“。

- null 可认为是一个特殊的对象值，含义是”非对象“

```javascript
console.log(typeof null)	// => object
```

- 通常认为，null 为它自有类型的唯一成员，可表示数字、字符串和对象是”无值“的

***

undefined1 用来表示更深层次的”空值“

- undefined 是预定义的全局对象（与null不一样，它不是关键字），值为”未定义“
    - 变量的一种取值，表面变量未初始化
    - 查询不存在的对象属性或数组元素时，返回undefined
    - 调用没有提供实参的函数得到undefined
- ECMAScript 3 中，undefined时可读/写的变量；ECMAScript 5 中修正为只读

***

- null 和 undefined 都表示”值的空缺“，往往可以互换

```javascript
console.log(null == undefined);     // => true
console.log(null === undefined);    //  => false
```

- 转化为布尔值时，都是假值
- 想将它们赋值给变量或属性时，给函数传参时，最佳选择是使用 null



### 3.5 - 全局对象

全局对象的属性是全局定义的符号，JavaScript 程序可以直接使用

当 JavaScript 解释器启动时，它将创建一个新的全局对象，并给它一组定义的初始属性：

- 全局属性，比如： <span style="color: #0099dd">undefined</span> 、 <span style="color: #0099dd">Infinity</span> 、 <span style="color: #0099dd">NaN</span> 
- 全局函数，比如： <span style="color: #0099dd">isNaN()</span> 、 <span style="color: #0099dd">parseInt()</span> 、 <span style="color: #0099dd">eval()</span> 
- 构造函数，比如： <span style="color: #0099dd">Date()</span> 、 <span style="color: #0099dd">RegExp()</span> 、 <span style="color: #0099dd">String()</span> 、 <span style="color: #0099dd">Object()</span> 和 <span style="color: #0099dd">Array()</span> 
- 全局对象，比如： <span style="color: #0099dd">Math</span> 和 <span style="color: #0099dd">JSON</span> 

在代码的最顶级（不再任何函数内的 JavaScript 代码），可以使用 JavaScript 关键字  <span style="color: #e3371e">this</span> 引用全局对象

```javascript
var global = this	// 定义一个引用全局对象的全局变量
```

- 客户端 JavaScript 中，运行在 <span style="color: #e3371e">浏览器</span> 中的 JavaScript 代码中， <span style="color: #e3371e">Window对象</span> 充当了全局对象
    - 全局 Window 对象有一个属性 window 引用其自身，可代替 this 来引用全局对象
    - Window 对象定义了核心全局属性，同时也针对 Web 浏览器和客户端 JavaScript 定义了一少部分其他全局属性
- 初次创建时，全局对象定义了 JavaScript 中所有的预定义全局值。这个特殊对象同样包含了为程序定义的全局值
- 如果代码声明了一个全局变量，这个全局变量就是全局对象的一个属性



### 3.6 - 包装对象

JavaScript 对象是一种复合值，它时 <span style="color: #e3371e">属性</span> 或 <span style="color: #e3371e">已命名值</span> 的集合

- 通过" <span style="color: #e3371e">.</span> "符号引用属性值
- 属性值是函数时，称其为方法。通过 <span style="color: #e3371e">o.m()</span> 调用对象 o 中的方法

***

##### 字符串不是对象，依然有属性的原因

只要引用字符串 str 的属性，JavaScript 就会通过调用 new String(str) 的方式将字符串转化为对象，这个对象继承了字符串的方法，被用来处理属性的引用。一旦属性引用结束，这个新创建的对象就会被销毁。

同字符串一样，数组和布尔值也具有各自的方法：通过 Number() 和 Boolean() 构造函数创建一个临时对象，这些方法的调用均来自这个临时对象

```javascript
var s = 'test'	// 创建一个字符串
s.len = 4		// 给它设置一个属性（此时创建一个临时字符串对象，给其len属性赋值为4，然后销毁这个临时对象）
var t = s.len	// 此时创建一个新的临时字符串对象，其len属性并不存在
console.log(t)	// => undefined
```

以上代码说明：读取字符串、数字和布尔值的属性值（或方法）时，表现地向对象一样；但尝试给其属性赋值，则会忽略这个操作：因为修改只是发生在临时临时身上，临时对象随后被销毁

***

存取字符串、数字或布尔值的属性时创建的 <span style="color: #e3371e">临时对象</span> 称作 <span style="color: #e3371e">包装对象</span> 

- 通常，包装对象被看作一种实现细节，不用特别关注
- 字符串、数字和布尔值的属性都是只读的，并不能定义新属性，需明白它们时有别于对象的



### 3.7 - 不可变的原始值和可变的对象引用

- JavaScript 中原始值不可修改

    - 数字、布尔值

    - 字符串

        - 字符串的所有方法看上去返回了一个修改后的字符串，实际上返回的时一个新的 字符串值

        ```javascript
        var s = 'hello'	// 定义一个由小写字母组成的文本
        s.toUpperCase()	// 返回'HELLO',但并为改变 s 
        console.log(s)	// => 'hello'
        ```

    - 原始值的比较是值的比较， <span style="color: #0099dd">仅值相等时，两个原始值才相等</span> 

        比如，比较两个单独的字符串，当且仅当它们的长度相等，且每个索引的字符都相等时，JavaScript 才认为它们相等

- JavaScript 中对象的值可修改

    ```javascript
    var obj = { x:1 }	// 定义一个对象
    obj.x = 2			// 通过修改对象属性值来更改对象
    obj.y = 3			// 再次更改此对象，给它增加一个新属性
    
    var a = [1, 2, 3]	// 数组也是可修改的
    a[0] = 0			// 更改数组的一个元素
    a[3] = 4			// 给数组增加一个新元素
    ```

    - 对象的比较并非值的比较

        - 对象通常称为 <span style="color: #e3371e">引用类型</span> （reference type），对象值都是引用，对象的比较均是引用的比较， <span style="color: #0099dd">当且仅当两个对象引用同一个基对象是，它们才相等</span> 

        ```javascript
                    var a = []      		// 定义变量 a 引用一个空数组
                    var b = a      			// 定义变量 b 引用同一个数组
                    b[0] = 1        		// 通过变量 b 修改引用的数组
                    console.log(a[0]);		// => 变量 a 也会改变
                    console.log(a === b)    // true：a和b 引用同一个数组，因此它们相等
        ```

        - 包含同样的属性及相同的值的对象，它们也不相等；各个索引元素完全相等的数组也不相等

        ```javascript
                    var o = { x: 1 }
                    var p = { x: 1 }
                    console.log(o === p) // => false： 两个单独的对象永不相等
                    var a = []
                    var b = []
                    console.log(a === b) // => false： 两个单独的数组永不相等
        ```

        - 将对象（数组）赋值给一个变量， <span style="color: #e3371e">仅仅是赋值的引用值</span> ，对象本身并没有赋值一次。
        - 必须显示复制对象的每个属性或数组的每个元素，才能得到它们的副本

        ```javascript
                    var a = [1, 2, 3]			// 待复制数组
                    var b = []					// 复制到目标空数组
                    for (let i = 0; i < a.length; i++) {	// 遍历
                        b[i] = a[i]				// 将元素值复制到数组b 中
                    }
                    console.log(a == b)    		//  => false
        ```



### 3.8 - 类型转换

JavaScript 将根据需要自行转换数据类型

|            值             |     转字符串     | 转数字 | 转布尔值  |        转对象         |
| :-----------------------: | :--------------: | :----: | :-------: | :-------------------: |
|         undefined         |   "undefined"    |  NaN   |   false   |   throws TypeError    |
|           null            |      "null"      |   0    |   false   |   throws TypeError    |
|           true            |      "true"      |   1    |           |   new Boolean(true)   |
|           false           |     "false"      |   0    |           |  new Boolean(false)   |
|            ""             |                  |   0    | **false** |    new String("")     |
|           "1.2"           |                  |  1.2   |   true    |   new String("1.2")   |
|           "one"           |                  |  NaN   |   true    |   new String("one")   |
|             0             |       "0"        |        | **false** |     new Number(0)     |
|            -0             |       "0"        |        | **false** |    new Number(-0)     |
|            NaN            |      "NaN"       |        | **false** |    new Number(NaN)    |
|         Infinity          |    "Infinity"    |        |   true    | new Number(Infinity)  |
|         -Infinity         |   "-Infinity"    |        |   true    | new Number(-Infinity) |
|             1             |       "1"        |        |   true    |     new Number(1)     |
|      { }（任意对象）      |                  |        |   true    |                       |
|      [ ]（任意数组）      |        ""        |   0    |   true    |                       |
|    [9]（1个数字元素）     |       "9"        |   9    |   true    |                       |
|     ['a']（其他数组）     | 使用 join() 方法 |  NaN   |   true    |                       |
| function() {}（任意函数） |                  |  NaN   |   true    |                       |

#### 3.8.1 - 显示类型转换

尽管 JavaScript 可以自动做许多类型转换，但有时仍需做 <span style="color: #e3371e">显示转换</span> ，或者为使代码 <span style="color: #e3371e">清晰易读</span> 而做显示转换

最简单的方式是使用 <span style="color: #e3371e">String()</span> 、 <span style="color: #e3371e">Number()</span> 、 <span style="color: #e3371e">Boolean</span> 、 <span style="color: #e3371e">Object()</span> 函数

- <span style="color: #0099dd">不</span> 使用 <span style="color: #0099dd">new</span> 运算符调用这些函数时，它们会作为 <span style="color: #0099dd">类型转换函数</span> 按规则做类型转换

    ```javascript
    Number('3')				// => 3
    String(false)			// => 'false'
    false.toString(false)	// => 'false'
    Boolean([])				// => true
    Object(3)				// => new Number(3)
    ```

- 除 null 或 undefined 之外的任何值都具有 toString() 方法。执行结果通常与 string() 方法一致

- 试图将 null 或 undefined 转换为对象，则会抛出一个类型错误（TypeError）；Object() 函数则不会，它仅简单返回一个新创建的空对象

##### 专门的函数和方法

###### 1 - 数字 -> 字符串

- <span style="color: #0099dd">toString()</span> 将数字转化为 <span style="color: #0099dd">其他进制的字符串类型</span> 

``` JavaScript 
var n = 17							// 默认 10 进制
binary_str = n.toString(2)			// 转化为	"10001"
octal_str ="0" + n.toString(8)		// 转化为	"021"
hex_str ="0x" + n.toString(16)		// 转化为	"0x11"
```

-  <span style="color: #0099dd">toFixed()</span> 根据小数点后指定位数将数字转化为 <span style="color: #0099dd">字符串</span> ，不使用指数计数法

-  <span style="color: #0099dd">toExponential()</span> 使用 <span style="color: #0099dd">指数计数法</span> 将数字转化为 <span style="color: #0099dd">字符串</span> ，参数决定小数点后位数
-  <span style="color: #0099dd">toPrecision()</span> 根据指定的的 <span style="color: #0099dd">有效位数</span> 将数字转化为 <span style="color: #0099dd">字符串</span> 

``` JavaScript 
var n = 123456.789
n.toFixed(0)		// "123457"
n.toFixed(2)		// "123456.79"
n.toExponential(1)		// "1.2e+5"
n.toExponential(3)		// "1.235e+5"
n.toPrecision(4)		// "1.235e+5"
n.toPrecision(10)		// "1.23456.7890"
```

###### 1 - 字符串 -> 数字

-  <span style="color: #0099dd">Number()</span>  将字符串转化为 <span style="color: #0099dd">整数或浮点数</span> 直接量， <span style="color: #49bf51">只基于10进制转换，且不能出现非法尾随字符</span> 

- parseInt() 和 parseFloat() （两个都是全局函数，不从属于任何类的方法）更灵活，都尽可能跳过任意数量的前导空格，尽可能解析更多数值字符，并忽略后面的内容；如果第一个非空格字符是非法数字直接量，最终返回 NaN

-  <span style="color: #0099dd">parseInt()</span> 只解析整数，第二个参数 <span style="color: #49bf51">指定数字转换基数，合法取值 2~36</span> 

    ``` JavaScript 
    parseInt("3 blind mice")	// => 3
    parseInt("-12.34")			// => 12
    parseInt("0xFF")			// => 255
    parseInt("0.1")				// => 0
    parseInt(".1")				// => NaN：非法，整数不能以'.'开始
    /****************/
    parseInt("11", 2)				// => 3（1*2 + 1）
    parseInt("ff", 16)				// => 255（15*16 + 15）
    ```

-  <span style="color: #0099dd">parseFloat()</span> 解析整数和浮点数

    ``` JavaScript 
    ParseFloat("3.14 meters")	// => 3.14
    ParseFloat(".1")			// => 0.1
    ParseFloat("$")			// => NaN：非法，数字不能以'$'开始
    ```



#### 3.8.2 - 隐式类型转换

 JavaScript 中的某些运算符会做隐式的类型转换

-  <span style="color: #e3371e">一元 " + "</span> 运算符，会将其操作数转化为 <span style="color: #0099dd">数字</span> 

    ```javascript
    +x		// 等价于 Number(x),也可写成 x-0
    ```

-  <span style="color: #e3371e">" + "</span> 运算符的 <span style="color: #e3371e">其中一个操作数是字符串</span> ，会将另一个操作数转换为 <span style="color: #0099dd">字符串</span> 

    ```
    x + ""	// 等价于 String(x)
    ```

-  <span style="color: #e3371e">一元"  !  "</span> 运算符将其操作数转换为 <span style="color: #0099dd">布尔值</span> 并 <span style="color: #0099dd">取反</span> 

    ``` JavaScript 
    !!x		// 等价于 Boolean(x)
    ```

- 除"+"以外的其他算术运算符( <span style="color: #e3371e">" - "</span>、 <span style="color: #e3371e"> <span style="color: #e3371e">" * "</span> </span>、 <span style="color: #e3371e">" / "</span>   )，会将另一个操作数转换为 <span style="color: #0099dd">数字</span> 

    ```
    5 - "1"		// => 4
    ```



#### 3.8.3 - 对象转化为原始值

 <span style="color: #e3371e">对象 -> 布尔值</span> 

所有对象（包括数组和函数）都将转化为  <span style="color: #0099dd">true</span> 

 <span style="color: #e3371e">对象 -> 字符串 & 对象 -> 数字</span> 

通过调用待转换对象的一个方法完成

-  <span style="color: #0099dd">toString()</span>  返回一个对象的字符串

    - 默认的 toString() 方法并不是返回一个有趣的值

    ``` JavaScript 
    ({x : 1, y : 2}).toString()		// => "[object Object]"
    ```

    - 很多类定义了特定的 toString() 方法
        - 数组类：将每个数组元素转换为一个字符串，元素中间添加逗号后合并形成字符串
        - 函数类：返回函数的实现定义的表示方式（通常转换为 JavaScript 源代码字符串）
        - 日期类：返回一个可读的日期和时间字符串
        - RegExp类：将 RegExp 对象转换为表示正则表达式直接量的字符串

    ``` JavaScript 
    [1,2,3].toString()					// => "1,2,3"
    ;(function(x) {f(x);}).toString()	// => "function(x) {\n f(x);\n}"
    ;/\d+/g.toString()					// => "/\d+/g"
    new Date().toString()				// => "Mon May 30 2022 10:27:11 GMT+0800 (中国标准时间)"
    ```

-  <span style="color: #0099dd">valueOf()</span> 

    - 如存在任意原始值，默认将对象转换为表示它的原始值
    - 如对象是复合值，默认返回对象本身
    -  <span style="color: #0099dd">数组、函数和正则表达式</span> 返回对象本身， <span style="color: #0099dd">日期类</span> 定义的 valueOf() 方法返回它的一个内部表示：1970年1月1日以来的毫秒数

    ``` JavaScript 
    var d =new Date()	// 今天是2022年5月30日
    d.valueOf()			// => 1653877964762
    ```



### 3.9 - 变量声明

- <span style="color: #e3371e">使用</span> 一个变量之 <span style="color: #e3371e">前</span> 应当 <span style="color: #e3371e">先声明</span> ，变量使用关键字 var 来声明

    ``` JavaScript 
    var i
    var sum
    ```

- <span style="color: #e3371e">未</span> 在 var 声明语句中给变量 <span style="color: #e3371e">指定初始值，</span> 变量初始值就是  <span style="color: #e3371e">undefined</span> 

    ``` JavaScript 
    var i
    console.log(i)		// => undefined
    ```

- 一个 var 关键字可声明多个变量，还可将变量声明和初始赋值合写在一起

    ``` JavaScript 
    var i,sum
    var i = 0, j = 0, k = 0
    ```

-  JavaScript 是 <span style="color: #e3371e">动态语言</span> ，变量声明时并没有指定变量的数据类型， JavaScript 变量可以任意数据类型

    ``` JavaScript 
    var i = 10
    i = 'ten'
    ```

    - 动态语言：运行期间才去作类型检查的语言，永远不用给任何变量指定数据类型；动态语言会在第一次赋值个变量时，在内部将数据类型记录下来
    - 静态语言：数据类型在编译期间检查，编程时，要声明所有变量的数据类型



### 3.10 - 变量作用域

一个 <span style="color: #e3371e">变量的作用域（scope）</span> 是程序源代码中定义这个变量的区域。

-  <span style="color: #e3371e">全局变量</span> 拥有全局作用域

    - 在任何地方都是有定义的

-  <span style="color: #e3371e">局部变量</span> 拥有局部性的作用域

    - 只在函数体内有定义

- 函数体内，局部变量的优先级 <span style="color: #e3371e">高于</span> 同名的全局变量

    ``` JavaScript 
                var scope = 'global' 
                function checkscope() {
                    var scope = 'local'
                    return console.log(scope)
                }
                checkscope()		// => local
    ```

- 变量在函数内没有声明（ <span style="color: #e3371e">没</span> 有使用  <span style="color: #e3371e">var</span>  关键字），该 <span style="color: #e3371e">变量为全局变量</span> 

    ``` JavaScript 
                var scope = 'global'
                function checkscope2() {
                    scope = 'local'	// 修改了全局变量
                }
                checkscope2()
                console.log(scope);	// => local
    ```

- 函数定义可嵌套，由于每个函数都有自己的作用域，因此，会出现几个 <span style="color: #e3371e">局部作用域嵌套</span> 的情况

    ``` JavaScript 
                var scope = 'global'       		// 全局变量
                function checkscope() {
                    var scope = 'local'     	// 局部变量
                    function nested() {
                        var scope = 'nested'    //  嵌套的内层变量
                        return console.log(scope);
                    }
                    return nested()
                }
                checkscope()               		// => nested
    ```



#### 3.10.1 - 函数作用域和声明提前

在一些类C语言中，花括号内每段代码都具有各自作用域，变量在声明它们的代码段外是不可见的，我们称为 <span style="color: #e3371e">块级作用域</span> （block scope）。

JavaScript 中没有块级作用域，取而代之的是 <span style="color: #e3371e">函数作用域</span> （function scope），变量在声明它们的 <span style="color: #0099dd">函数体</span> 以及函数体 <span style="color: #0099dd">嵌套的任意函数体内</span> 有时有定义的。

 JavaScript 的函数作用域指在函数内声明的所有变量在函数体内始终可见，变量甚至在声明之前已经可用，这个特性被非正式地称为 <span style="color: #e3371e">变量提升</span> （hoisting）：即 JavaScript 函数里声明的所欲哦变量（ <span style="color: #0099dd">但不涉及赋值</span> ）都被“提前”至函数体的顶部

- “变量提升”这步操作时在 JavaScript 引擎的“预编译”时进行的，是在代码运行之前

``` JavaScript 
var scope = 'global'
function f() {
    console.log(scope) 		// => "undefined" 而不是"global"
    var scope = 'local'
    console.log(scope) 		// => "local"
}
f()
```

<!-- 等价于 -->

``` JavaScript 
var scope = 'global'
function f() {
    var scope				// 函数顶部声明了局部变量
    console.log(scope)      // 变量存在，但值为"undefined"
    scope = 'local'			// 将局部变量初始化赋值
    console.log(scope)      // => "local"
}
f()
```

解析：由于函数作用域的特性，局部变量在整个函数体始终有定义，函数体内局部变量遮盖了同名全局变量；程序执行至 var 语句是时候，函数变量才会被真正赋值，之前由于“提升”出于已声明未赋值的状态，输出结果为"undefined"



##### 代码风格——变量声明位置

- 通常，在具有块级作用域的编程语言中，在狭小的作用域里让变量声明和使用变量的代码尽可能靠近彼此，这是一个非常不错的编程习惯
- 由于 JavaScript 没有块级作用域，因此一些程序员特意将变量声明放在函数体顶部，而非靠近使用变量之处，这使得他们的源代码非常清晰地反映了真是的变量作用域



#### 3.10.2 - 作为属性的变量

声明一个 JavaScript  <span style="color: #e3371e">全局变量</span> 时，实际时定义了 <span style="color: #e3371e">全局对象</span> 的一个 <span style="color: #e3371e">属性</span> ，ECMAScript 规范强制规定。

- 使用 var 声明变量时，创建的这个属性时不可配置的，无法通过 delete 运算符删除
- 不处于严格模式下，给一个未声明的变量赋值， JavaScript 会自动创建一个全局对象，有正常的可配置属性，可以删除

``` JavaScript 
var truevar = 1
fakevar = 2
this.fakevar2 = 3
console.log(truevar) 			// => 1
console.log(fakevar) 			// => 2
console.log(this.fakevar2) 		// => 3
delete truevar
delete fakevar
delete this.fakevar2
console.log(truevar) 			// => 1
console.log(fakevar) 			// => uncaught ReferenceError: fakevar is not defined
console.log(this.fakevar2) 		// => undefined
```

***

JavaScript 中 <span style="color: #e3371e">局部变量</span> 当做跟 <span style="color: #e3371e">函数调用相关的某个对象的属性</span> ，ECMAScript3 规范称该对象为"调用对象"（call object），ECMAScript5 规范称为" <span style="color: #ab04d9">声明上下文对象</span> "（declarative environment record）

- JavaScript 允许 this 关键字来引用全局对象
- 却没有方法引用局部变量中存放的对象。这种存放局部变量的对象的特有性质，是一种对我们不可见的内部实现



#### 3.10.3 - 作用域链

若将局部变量看作自定义实现的对象的属性，可换个角度来解读变量作用域。

- 每段代码（全局代码或函数）都有与之关联的 <span style="color: #e3371e">作用域链</span> （scope chain）
-  <span style="color: #e3371e">作用域链</span> 是一个 <span style="color: #e3371e">对象列表</span> 或者 <span style="color: #e3371e">链表</span> ，这组对象定义了这段代码“作用域中”的变量
- 当 JavaScript 需要解析变量 x 的值时
    - 它会从链中的第一个对象开始查找。如果对象有名为 x 的属性，则直接使用；若不存在，则继续查找链上的下一个对象
    - 如果第二个对象依然没有名为 x 的属性，则继续查找链上下一个对象，以此类推
    - 如果链上没有任何一个对象含有属性 x，那么认为这段代码的作用域链上不存在 x，在终端最终抛出引用错误异常（ReferenceError）
- 在 JavaScript  <span style="color: #e3371e">最顶层代码中</span> （不包含任何函数定义内的代码），作用域由一个全局对象组成
- 在 <span style="color: #e3371e">不包含嵌套的函数体内</span> ，作用域上有两个对象，第一个时 <span style="color: #0099dd">定义函数参数和局部变量的对象</span> ，第二个是 <span style="color: #0099dd">全局对象</span> 
- 在 <span style="color: #e3371e">嵌套函数体内</span> ，作用域链上至少有 3 个对象

##### 1 - 对象链的创建规则

- 定义一个函数时，实际上保存一个作用域链。调用此函数时，创建一个新的对象来保存它的局部变量，并将这个对象添加至保存的那个作用域链上，同时创建一个新的更长的表示函数调用作用域的链
- 对嵌套函数来说，每次调用外部函数的时候，作用域链都是不同的，内部函数在每次定义的时候都由微妙的差别——在每次调用外部函数时，内部函数的代码都是相同的，而且关联这段代码的作用域链也不相同



# 第四章、表达式和运算符

表达式（expression）是 JavaScript 中的一个短语， JavaScript 解释器会将其计算（evaluate）出一个结果

## 1 - 原始表达式

原始表达式（primary expression）是 <span style="color: #e3371e">最简单的表达式</span> ，是表达式的 <span style="color: #e3371e">最小单位</span> ——它们不再包含其他表达式

-  JavaScript 中的原始表达式包含 <span style="color: #0099dd">常量或直接量</span> 、 <span style="color: #0099dd">关键字</span> 和 <span style="color: #0099dd">变量</span> 

``` JavaScript 
1.23		// 数字直接量
"hello"		// 字符串直接量
/pattern/	// 正则表达式直接量
true		// 返回一个布尔值，真
false		// 返回一个布尔值，假
null		// 返回一个值，空
this		// 返回“当前”对象
sum			// 返回 sum 的值
undefined	// undefined 是全局变量，和 null 不同，它不是一个关键字
```



## 2 - 对象和数组的初始化表达式

对象和数组初始化表达式实际上是一个 <span style="color: #e3371e">新创建的对象和数组</span> 

``` JavaScript 
[]		// 一个空数组，没有任何元素
[1+2, 3+4]	// 拥有两个元素的数组
```

- 数组初始化表达式的元素初始化表达式可以时数组初始化表达式，这些表达式可嵌套

    ``` JavaScript 
    var matrix = [[1,2,3],[4,5,6],[7,8,9]]
    ```

- 数组直接量中的列表逗号之间的元素可以省略，省略的空位会填充值 undefined；元素列表结尾处可留下单个逗号，这是不会创建一个新的值为 undefined 的元素

    ``` JavaScript 
    var sparseArray = [1,,,4]	// 第 2、3 个元素值为 undefined
    ```

- 对象初始化表达式中，对象直接量也可嵌套

    ``` JavaScript 
    var rectangle = {upperLeft: { x: 2, y: 2},
    				 lowerRight: { x: 4, y: 5}}
    ```

- 对象直接量中的属性名可以是字符串而不是标识符

    ``` JavaScript 
    var side = 1
    var square = { "upperLeft": {x: p.x, y: p.y}, 
    			   "lowerRight": {x: p.x + side, y: p.y + side}};
    ```



## 3 - 函数定义表达式

函数定义表达式定义一个  JavaScript 函数，表达式的值是这个新定义的函数

``` JavaScript 
var myFunction = function() {
	// code
}
```



## 4 - 属性访问表达式

属性访问表达式运算得到一个对象属性或一个数组元素的值

语法：

`expression.identifier`

``expression[expression]`

``` JavaScript 
var o = {x: 1, y: {z: 3}}	// 一个示例对象
var a = [o, 4, [5, 6]]		// 一个包含对象 o 的示例数组
o.x			// => 1
o.y.x		// => 3
o["x"]		// => 1
a[1]		// => 4
a[2]["1"]	// => 6
a[0].x		// => 1
```

- " <span style="color: #e3371e">.</span> "和 <span style="color: #e3371e">[</span> 之前的表达式总会首先计算
    - 计算结果是 null 或 undefined，表达式会抛出一个类型错误异常
    - 运算结果不是对象或数组，会转化为对象
    - 对象表达式后跟随句号和标识符，查找并返回标识符所指定属性的值
    - 对象表达式后跟随方括号，计算方括号内的表达式并将其转换为字符串



## 5 - 调用表达式

 <span style="color: #e3371e">调用表达式</span> （invocation expression）时一种调用（或执行）函数（或方法）的语法表示

- 以一个函数表达式开始，指代要调用的函数

- 函数表达式后跟随一对圆括号，括号内是以逗号隔开的参数列表，参数个数：0~n

    ``` JavaScript 
    f(0)				// f 是一个函数表达式，0时一个参数表达式
    Math.max(x,y,z)		// Math.max 是一个函数，x，y 和 z 是参数
    a.sort()			// a.sort 是一个函数，它没有参数
    ```

***

对调用函表达式进行求值时

- 首先计算函数表达式
    - 如果函数表达式的值不是一个可调用的对象，则抛出一个类型错误异常
- 然后计算参数表达式
    - 实参的值一次赋值给形参
- 执行函数体
    - 函数使用 return 语句给出一个返回值，则返回值时整个调用表达式的值
    - 否则，调用表达式的值是undefined

***

 <span style="color: #e3371e">方法调用</span> ：如果表达式是一个属性访问表达式，则称这个调用为“方法调用”（method invovation）

- 方法调用中，执行函数体时，作为属性访问主题的对象和数组便是其调用方法内 this 的指向



## 6 - 对象创建表达式

 <span style="color: #e3371e">对象创建表达式</span> （object creation expression）创建一个对象并调用一个函数（称作 <span style="color: #e3371e">构造函数</span> ）初始化新对象的属性。和函数调用表达式非常相似，只不过对象创建表达式之前多了个关键字  <span style="color: #e3371e">new</span> 。

``` JavaScript 
new Object()
new Point(2, 3)
```

- 如果对象创建表达式 <span style="color: #0099dd">不需要传</span> 入任何参数给构造函数， <span style="color: #0099dd">空圆括号</span> 可以 <span style="color: #0099dd">省略</span> 

``` JavaScript 
new Object
new Date
```



## 7 - 运算符概述

运算符用于 <span style="color: #e3371e">算术表达式</span> 、 <span style="color: #e3371e">比较表达式</span> 、 <span style="color: #e3371e">逻辑表达式</span> 、 <span style="color: #e3371e">赋值表达式</span> 

- 大多数运算符有 <span style="color: #0099dd">标点符号</span> 表示，另一些则由 <span style="color: #0099dd">关键字表示</span> ，都是正规的运算符
- 不同运算符具有不同的 <span style="color: #0099dd">优先级</span> 

[JavaScript 运算符表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)



### 7.1 - 操作数个数

运算符按其 <span style="color: #e3371e">操作数的个数</span> 进行分类

-  <span style="color: #0099dd">大多数</span> 运算符时一个 <span style="color: #0099dd">二元运算符</span> ，将两个表达式合并成一个稍复杂表达式
-  JavaScript 同样支持 <span style="color: #0099dd">一元运算符</span> ，将一个表达式转换为另一个稍复杂的表达式
-  JavaScript 支持一个 <span style="color: #0099dd">三元表达式</span> ， <span style="color: #ab04d9">条件判断运算符</span> " <span style="color: #e3371e">? :</span> "，它将三个表达式合并称一个表达式



### 7.2 - 操作数类型和结果类型

- 一些运算符可作用于任何数据类型，但仍希望 <span style="color: #e3371e">操作数</span> 是 <span style="color: #e3371e">指定数据类型的数据</span> ，并且大多数运算符返回（或计算出）一个 <span style="color: #e3371e">特定数据类型的值</span> 

- JavaScript 运算符通常会 <span style="color: #e3371e">根据需要</span> 对操作数进行 <span style="color: #e3371e">类型转换</span> 
- 一些运算符对不同操作数类型进行不同的类型转换
    - " + "运算符可对数字进行加法运算，也可对字符串作连接
    - " < "运算符可对不同数字进行大小值的比较，也可比较字符在字母表中的次序先后



### 7.3 - 左值

左值（lvalue）指“表达式只能出现在赋值运算符的左侧”

-  JavaScript 中，变量、对象属性、数组元素 均是左值
- ECMAScript 规范允许内置函数返回一个左值，但自定义函数不能返回左值



### 7.4 - 运算符的副作用

- 简单的表达式不会对程序的运行状态造成任何影响

- 但有一些表达式具有很多副作用，前后表达式运算会相互影响
    -  <span style="color: #e3371e">赋值运算符</span> ：给变量或属性赋值，使用这个变量或表达式的指都会发送改变
    -  <span style="color: #e3371e">递增递减运算符</span> ：包含隐式的赋值，与赋值运算符副作用相似
    -  <span style="color: #e3371e">delete 运算符</span> ：删除一个属性就像（不完全一样）给这个属性赋值 undefined

- 函数体或构造函数内运用了这些运算符并产生了副作用时，我们说函数调用表达式和对象创建表达式是有副作用的



### 7.5 - 运算符优先级

运算符优先级控制这运算符的 <span style="color: #e3371e">执行顺序</span> 。优先级高的运算符的执行总是先于优先级低的运算符

- 赋值运算符"="具有最低的优先级，通常总是最后执行

- 运算符优先级可以通过显示 <span style="color: #e3371e">使用圆括号来重写</span> 

    ``` JavaScript 
                var num = 2 + 3 * 2
                console.log(num)		// => 8
                var num = (2 + 3) * 2
                console.log(num);		// => 10
    ```



### 7.6 - 运算符的结合性

结合性指定了在多个具有同样优先级的运算符表达式中的运算顺序

-  <span style="color: #e3371e">一元操作符</span> （new、typeof、void、delete、await、幂（**））、 <span style="color: #e3371e">赋值</span> 、 <span style="color: #e3371e">三元表达式运算符</span> 都具有从右至作的结合性



### 7.7 - 运算顺序

运算符的优先级和结合性规定了它们在复杂表达式中的运算顺序，但 <span style="color: #e3371e">并没规定</span> <span style="color: #0099dd">子表达式的计算过程中的运算顺序</span> 

-  JavaScript 总严格按从左至右的顺序来计算表达式

    ``` JavaScript 
    w = x + y * z
    // 首先，计算子表达式 w
    // 然后，计算 x、y、z
    // 其次，y * z 再加上 x 的值
    // 最后，将其赋值给表达式 w 所指代的变量或属性
    // 给表达式添加圆括号会改变乘法、加法和赋值的关系，但从左至右的顺序是不会改变的
    ```

- 只有任何表达式具有副作用而影响到其他表达式时，其求值顺序才会和看上去不同

    ``` JavaScript 
    var a = 1
    b = (a++) + a	// => 3
    // step1，计算 b
    // step2，计算 a++ （假设值为 c ）
    // step3，计算 a	注意：此步的 a 由于 ++运算符 的隐式赋值，已变为 2
    // step4，计算 a++ + a
    // step5，将上一步的值赋值给 b
    ```



## 8 - 算术表达式

进行算术计算的运算符，以及对操作数的算术操作

### 8.1 - " + "运算符

二元加法运算符 " <span style="color: #e3371e">+</span> "，可以对两个数字作 <span style="color: #0099dd">加法</span> ，也可以做 <span style="color: #0099dd">字符串连接</span> 操作

``` JavaScript 
1 + 2					// => 3
"hello" + "" + "world"	// => "hello world"
"1" + "2"				// => "12"
```

- 加号的规则 <span style="color: #e3371e">优先考虑</span><span style="color: #0099dd">字符串连接</span> 

    - 如果 <span style="color: #ab04d9">其中一个</span> 操作数是 <span style="color: #49bf51">字符串</span> 或转化为字符串的对象，另一个操作数将会转化为字符串，加法将进行 <span style="color: #ab04d9">字符串的连接</span> 操作
    - 如果 <span style="color: #ab04d9">两个</span> 操作数 <span style="color: #49bf51">都不是类字符串</span> （string-like），那么都将进行 <span style="color: #ab04d9">加法运算</span> 

-  <span style="color: #e3371e">加法操作符的行为表现为</span> ：

    - 如果 <span style="color: #ab04d9">其中一个</span> 操作数是 <span style="color: #49bf51">对象</span> ，则对象遵循 `对象 -> 原始值` 的转换规则转换为原始值类型：
        - 日期对象 通过 toString() 方法执行转换
        - 其他对象 按 valueOf() 方法执行转换（如果 valueOf() 方法返回一个原始值的话）
        - 多数对象都不具备可用的 valueOf() 方法，因此它们会通过 toString() 方法来执行转换

    - 进行 `对象 -> 原始值` 的转换后，如果其中一个操作数是字符串的话，另一个操作数也会转换为字符串，然后进行字符串链接
    - 否则，两个操作数都将转换为数字（或者 NaN），然后进行加法操作

``` JavaScript 
1 + 2			// => 3：加法
"1" + "2"		// => "12"：字符串连接
"1" + 2			// => "12"：数字转化为字符串后进行字符串连接
1 + {}			// => "1[object Object]"：对象转化为字符串后进行字符串连接
true + true		// => 2：布尔值转化为数字后做加法
2 + null		// => 2：null 转化为 0 后做加法
2 + undefined	// => NaN：undefined转化为 NaN 后做加法
```

- 当加号运算符和字符串和数字 <span style="color: #e3371e">一起使用</span> 时，需要考虑加法的结合性对运算顺序的影响

    ``` JavaScript 
    1 + 2 + " 出岫"	  // => "3 出岫"
    1 +（2 + " 出岫"）	 // => "12 出岫"
    ```



### 8.2 - 一元算术运算符

一元运算符作用于一个单独的操作数，并产生一个新值（注意：" <span style="color: #e3371e">+</span> "和" <span style="color: #e3371e">-</span> "是一元运算符，也是二元运算符）

- 一元运算符具有 <span style="color: #0099dd">很高的优先级</span> ，而且都是右结合（right-associative）
- 必要时，一元运算符会将操作数转换为数字

***

一元加法（ <span style="color: #e3371e">+</span> ）

- 将操作数转换为数字（或 NaN），并返回这个转换后的数字；如果操作数本身就是数字，则直接返回这个数字

一元减法（ <span style="color: #e3371e">-</span> ）

- 作一元运算符时，会根据需要把操作数转换为数字，然后改变运算结果的符号

递增（ <span style="color: #e3371e">++</span> ）

- 将操作数进行增量（+1）操作，操作数是一个左值（变量、数组元素或对象属性）

- 将操作数转换为数字，然后给数字 + 1，并将+1后数值重新赋值给操作数

- "++"运算符的返回值依赖于它相对于操作数的位置：

    -  <span style="color: #0099dd">前置递增</span>（pre-increment） ：对操作数进行增量计算，并返回计算后的值
    -  <span style="color: #0099dd">后置递增</span> （post-increment)：对操作数进行增量计算，但返回计算前的值

    ``` JavaScript 
    var i = 1, j = ++i  // => i=2, j=2
    var i = 1, j = i++	// => i=2, j=1
    ```

-  <span style="color: #e3371e">注意</span> ：`++x` 并不综合 `x=x+1` 完全一样，因为 "++"运算符从 <span style="color: #0099dd">不进行字符串连接</span> 操作

    ``` JavaScript 
    var x = "1"
    ++x			// => 2
    ```

    ``` JavaScript 
    var x = "1"
    x = x + 1	// => "11"
    ```

-  <span style="color: #e3371e">注意</span> ：由于 JavaScript 会自动进行分号补全，因此不能在后置递增运算符和操作数之间插入换行符

- 不管前置递增还是后置递增，"++"运算符 <span style="color: #e3371e">通常</span> 用在 <span style="color: #e3371e">for循环中</span> ，用于控制循环内的计数器

递减（ <span style="color: #e3371e">--</span> ）

- 将操作数进行减量（-1）操作，操作数是一个左值（变量、数组元素或对象属性）
- 将操作数转换为数字，然后给数字 - 1，并将 -1后数值重新赋值给操作数
- 与"++"相同，也分" <span style="color: #0099dd">前置递减</span> "和" <span style="color: #0099dd">后置递减</span> "
- 当递减运算符在操作数右侧时，运算符和操作数之间不能有换行符



### 8.3 - 位运算符

位运算符可对由数字表示的 <span style="color: #e3371e">二进制数据</span> 进行更低层级的 <span style="color: #e3371e">换位运算</span> 

- 4个运算符都是对操作数的 <span style="color: #e3371e">每个位</span> 进行 <span style="color: #e3371e">布尔运算</span> ，将操作数的每个位当做布尔值（1=true, 0=false），其他三个位运算符用来进行左移位和右移位
- 位运算符要求操作数都是整数，表示为 <span style="color: #0099dd">32位整型</span> 而不是64位浮点型
    - 必要时，位运算符首先将操作数转换为数字，并强制表示为32位整型，这会忽略原格式中的小数部分和任何超过32位的二进制位
    - 移位运算符要求右操作数在 0~31 之间
    - 操作数转换为32位整数后，会舍弃第5位之后的二进制位，以便生成一个位数正确的数字
    - 位运算符会将 NaN、Infinity、-Infinity 都装换为 0

换位与（ <span style="color: #e3371e">&</span> ）

- 对整型操作数逐位执行布尔与（ <span style="color: #0099dd">AND</span> ）操作。
- 只有两个操作位中相对应的位都是1，结果中的这一位才是1.例如，

换位或（ <span style="color: #e3371e">|</span> ）

换位异或（ <span style="color: #e3371e">^</span> ）

换位非（ <span style="color: #e3371e">~</span> ）

左移（ <span style="color: #e3371e"><<</span> ）

带符号右移（ <span style="color: #e3371e">>></span> ）

无符号右移（ <span style="color: #e3371e">>>></span> ）



## 9 - 关系表达式

关系表达式用于测试两个值之间的关系，根据关系是否存在返回 true 或 false



## 10 - 逻辑表达式



## 11 - 赋值表达式



## 12 - 表达式计算



## 13 - 其他运算符



# 第五章、语句

语句（statement）就是 JavaScript 整句或命令，以分号结束。

表达式计算出一个值，但语句用来执行以“使某件事发生”。



“使某件事发生”的方法

- 计算带有副作用的表达式
- 改变语句的默认执行顺序



## 1 - 表达式语句

具有副作用的表达式是 JavaScript 中最简单的语句



这类语句有：

- 赋值语句

  ```js
  greeting = `hello` + name;
  i *= 3;
  ```

- 递增运算符和递减运算符

  ```js
  counter++;
  ```

- delete运算符

  - 重要作用是删除一个对象的属性，一般作为语句使用，而不是复杂表达式的一部分

  ```js
  delete o.x;
  ```

- 函数调用

  ```js
  alert(greeting);
  ```

  



## 2 - 复合语句和空语句

### 2.1 - 复合语句

 JavaScript 中，使用 <span style="color: #49bf51">花括号</span> 将多条语句联合在一起，形成一条 <span style="color: #e3371e; font-weight: 600">复合语句</span> 

```js
{
	x = Math.Pi;
    cx = Math.cos(x);
    console.log(`cos(π) =${cx}`)
}
```



**关于语句块的注意点**：

- 语句块的 <span style="color: #0099dd">结尾不需要分号</span> ，语句块中的原始语句必须以分号结尾
- 语句块中的行都有 <span style="color: #0099dd">缩进</span> ，可以增强代码的可读性，但 <span style="color: #0099dd">非必需</span> 
- 语句块中声明的变量 <span style="color: #0099dd">不</span> 是语句块 <span style="color: #0099dd">私有</span> 的
- 形式上来说， JavaScript 语法 <span style="color: #e3371e">允许一</span> 个语句块中只包含一个子语句



### 2.2 - 空语句

 <span style="color: #e3371e; font-weight: 600">空语句</span> （empty statement）恰与复合语句相反，它允许包含 <span style="color: #e3371e">0</span> 条语句的语句

```js
;
```



JavaScript 解释器执行空语句时，不会执行任何动作。

但实践证明，创建一个具有空循环体的循环时，空语句是很有用的。

例如：

```js
// 初始化一个数组
for(i = 0; i < a.length; a[i++ = 0]);
/*
*	在此循环中，所有的操作都在表达式 a[i++] = 0 中完成，并不需要任何循环体；
*	然而， JavaScript 需要循环体中至少包含一条语句；
*	因此，这里只是用了一个单独的分号来表示一条空语句
*/
```



> TIPs：
>
> ​	注意，在 for 循环、while 循环或 if 语句的右括号后的分号很不起眼，而这，很可能造成一些难以定位的致命 bug。
>
> ​	如果有特殊目的需要使用空语句，最好在代码中添加注释

```js
if ((a == 0) || (b == 0));	//	terrible！这一行代码什么都没做
o = null;					//	这一行代码却总是会执行
```

```js
// 更清楚地说明空语句是有用的
for(i = 0; i < a.length; a[i++ = 0]);	/* empty */
```



## 3 - 声明语句

var 和 function 都是声明语句，用以声明或定义变量和函数。

声明语句本身什么都不做，但它通过创建变量和函数，可以 <span style="color: #e3371e; font-weight: 600">更好地组织代码的语义</span> 



### 3.1 - var

var 语句用以声明一个或多个变量：

```js
var name_1 [= value_1][,...,name_n [= value_n]]
```



如果var语句出现在 <span style="color: #49bf51">函数体内</span> ，它定义的是一个 <span style="color: #0099dd">局部变量</span> ，其作用域就是这个函数

如果var语句出现在 <span style="color: #49bf51">顶层代码中</span> ，它定义的是一个 <span style="color: #0099dd">全局变量</span> ，在 JavaScript 程序中都是可见的

全局变量是全局对象的属性。然而，和其他全局对象属性不同的是， <span style="color: #ab04d9">var声明的变量</span> <span style="color: #e3371e">无法通过delete删除</span> 



var语句声明变量时为初始化表达式，则变量的值初始为`undefined`。

- “变量提升”，但初始化的操作则还在原来 var 语句的位置执行，而声明语句之前变量的值是 undefined
- 在循环内声明的变量也会“提升”



### 3.2 - function

关键字function用来定义函数：

```js
function funcName([arg1 [, arg2 [..., argn]]]) {
	// statements
}
```



**函数语句**

- 函数体由 JavaScript 语句组成，语句数量不限，且用花括号括起来
- 定义函数时，并不执行函数体内的语句，它和调用函数时待执行的新函数对象相关联
- function 语句里的 <span style="color: #e3371e">花括号是必需的</span> ，即使函数体仅包含一条语句



**函数定义表达式和函数语句**

```js
// [函数定义表达式] 将函数定义表达式赋值给一个变量
var f = function(x) { return x + 1; }
// [函数语句] 含有变量名的语句
function f(x) { return x + 1; }
```

尽管函数声明语句和函数定义表达式包含相同的函数名，但二者仍然不同。

两种方式都创建了新的函数对象，但函数声明语句中的函数名是一个变量名，变量指向函数对象。



和通过var声明变量一样，函数定义语句中的函数被显式地“提前”到了脚本或函数的顶部，在整个脚本和函数内都是可见的

- 使用var
  - 变量声明提前，但变量初始化代码仍在原来的位置
- 函数声明语句
  -  <span style="color: #49bf51">函数名称和函数体均提前</span> 
  - 脚本中的所有函数和函数中所有套的函数都会在当前上下文中其他代码之前声明
  - 因此，可以在声明一个JavaScript函数之前调用它


和var语句一样，函数声明语句创建的变量也是无法删除的。但是这些变量不是只读的，变量值可以重写。



**函数声明语句的位置：**

- 通常出现在 JavaScript 代码的最顶层
- 也可 <span style="color: #e3371e">嵌套</span> 在其他函数体内
  -  <span style="color: #0099dd">只能出现</span> 在被嵌套函数的 <span style="color: #0099dd">顶部</span> 	<!-- 因此，ECMAScript 未将函数归类为真正的语句 -->
    - 函数定义不能出现在if语句、while循环或其他任何语句中
  - 一些 JavaScript 实现的确允许，但内部实现细节不同，不具备可移植性



## 4 - 条件语句



## 5 - 循环



## 6 - 跳转



## 7 - 其他语句类型



## 8 - JavaScript语句小结