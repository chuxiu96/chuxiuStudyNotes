# 第一章、Web Components

Web Components 允许你在自己的应用中**创建和复用**自定义元素。

## 1 - 概念及使用

### 1.1 - 主要技术组成

- Custom elements（自定义元素）
  - 一组 JavaScript API，定义自定义元素及其行为
- Shadowo DOM（影子 DOM）
  - 一组 JavaScript API，用于将封装的“影子DOM树”附加到元素（与主文档DOM分开呈现），并控制其关联的功能
- HTML templates（HTML 模版）
  - 使用 `<template>` 和 `<slot>` 元素编写不在页面中显示的标记模板，可作为自定义元素结构的基础被多次复用



### 1.2 - 基本实现方法

- 创建一个类或函数来指定 web 组件的功能
- 使用 [`CustomElementRegistry.define()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法注册您的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素
- 如果需要的话
  - 使用[`Element.attachShadow()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow) 方法将一个 shadow DOM 附加到自定义元素上。使用通常的 DOM 方法向 shadow DOM 中添加子元素、事件监听器等等
- 如果需要的话
  - 使用 `<template>` 和 `<slot>` 定义一个 HTML 模板。再次使用常规 DOM 方法克隆模板并将其附加到您的 shadow DOM 中
- 在页面任何您喜欢的位置使用自定义元素，就像使用常规 HTML 元素那样



## 2 - 使用 custom elements

### 2.1 - CustomElementRegistry

CustomElementRegistry接口的实例对象允许注册一个 custom element，返回已注册 custom elements 的信息，等等

- [`CustomElementRegistry.define()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法

  - 用来注册一个 custom element

  - 各参数

    - 表示所创建的元素名称的字符串，符合 [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 标准	<!--custom element 的名称不能是单个单词，且其中必须要有短横线-->
    - 用于定义元素行为的 类
    - `可选参数`，一个包含 `extends` 属性的配置对象

  - 示例

    - 定义一个个叫做 [word-count](https://mdn.github.io/web-components-examples/word-count-web-component/) 的 custom elemen

      ```js
      // 这个元素叫做 word-count，它的类对象是 WordCount, 继承自 <p> 元素
      customElements.define('word-count', WordCount, { extends: 'p' });
      ```

    - 一个 custom element 的类对象可以通过 ES 2015 标准里的类语法生成。所以，`WordCount`可以写成下面这样

      ```js
      class WordCount extends HTMLParagraphElement {
        constructor() {
          // 必须首先调用 super 方法
          super();
      
          // 元素的功能代码写在这里
      
          ...
        }
      }
      ```

      

### 2.2 - custom elements 分类

- **Autonomous custom elements**（独立自定义元素）

  - 不继承其他内建的 HTML 元素，可以直接把它们写成 HTML 标签的形式，来在页面上使用

  - **使用**

    - ```html
      <popup-info>
      ```

    - ```js
      document.createElement("popup-info")
      ```

  - **示例** [Autonomous custom elements](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements#autonomous_custom_elements)

- Customized built-in elements**（自定义内置元素）

  - 继承自基本的 HTML 元素

    - 创建时，你必须指定所需扩展的元素
    - 使用时，需要先写出基本的元素标签，并通过 [`is`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-is) 属性指定 custom element 的名称

  - **使用**

    - ```html
      <p is="word-count">
      ```

    - ```js
      document.createElement("p", { is: "word-count" })
      ```

  - **示例** [Customized built-in elements](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements#customized_built-in_elements)

