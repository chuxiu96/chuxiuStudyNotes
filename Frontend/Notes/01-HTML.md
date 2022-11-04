# HTML Learning Notes

## 零、web基础

### 1 - 基础软件

#### 1.1 - 文本编辑器

用来写代码

- [Visual Studio Code](https://code.visualstudio.com/docs)
- Sublime Text
- Atom
- ……

#### 1.2 -  网络浏览器

用来测试代码

- 浏览器 - 网页显示、运行的平台
- 浏览器内核 - 排版引擎、解释引擎、渲染引擎
    - 负责读取网页内容，整理讯息、计算网页的显示方式并显示页面

|      浏览器       |  内核   |                             说明                             |
| :---------------: | :-----: | :----------------------------------------------------------: |
|      chorme       |  blink  | 由 Google 公司开发一款开源免费的 web 浏览器。它发布于 2008 年，是当今最常用的浏览器 |
| Internet Explorer | Trident |          微软公司（Microsoft）发行的一款 web 浏览器          |
|  Microsoft Edge   |  blink  | 微软新的 IE 浏览器项目 Project Spartan 在 Build 2015 上正式更名为 Microsoft Edge |
|      Firefox      |  Gecko  |                  Mozilla 的一款 web 浏览器                   |
|      Safari       | webkit  | 苹果公司开发的一款 web 浏览器，它是 Mac 系统的默认浏览器。Safari 以其时尚的设计而著称 |
|       Opera       |  blink  | 快速小巧、符合工业标准、适用于多种操作系统。现在跟随 chorme 用 blink 内核 |

#### 1.3 - 图形编辑器

为网页制作图像或图形

- Photoshop

#### 1.4 - 版本控制系统

- 用来管理服务器上的文件，与团队合作开展项目，共享代码和资产，避免编辑冲突。
- [Git](https://git-scm.com/) 是最流行的版本控制系统
- 还有 [GitHub](https://github.com/) 或 [GitLab](https://gitlab.com/) 托管服务

#### 1.5 - 自动化构建工具

自动执行重复性任务，如简化代码和运行测试

-  [Webpack](https://webpack.js.org/)
- [Grunt](https://gruntjs.com/)
- [Gulp](https://gulpjs.com/)

### 2 - 设计网站外观

- 计划
    - 确定网站主题
    - 基于主题确定展示信息
    - 网站外观 - 背景色、字体
- 绘制草图
- 组织内容
- 图像
- 字体

[设计指南](https://design.firefox.com/photon/)

### 3 - 网站文件结构

一个网站包含许多文件：文本内容、代码、样式表、媒体内容，需要在计算机上将这些文件以合理的结构组织起来，确保文件之间交互畅通。

- 网站保存

    - 一个单独文件夹
    - 命名
        - 文件夹和文件名使用小写，用短横线来分隔

- 网站结构

    - index.html
        - 一般会包含主页内容，也就是人们第一次进入网站时看到的文字和图片
    - images 文件夹
        - 包含网站上使用的所有图片
    - styles 文件夹
        - 包含用于设置内容样式的 CSS 代码（例如，设置文本和背景颜色）
    - scripts 文件夹
        - 包含所有用于向网站添加交互功能的 JavaScript 代码（例如，点击时加载数据的按钮）

- 文件路径

    - 引用 <span style="color: #e3371e">同级</span> 文件，直接使用 <span style="color: #0099dd">文件名</span> 。例：`my-image.jpg`
    - 引用  <span style="color: #e3371e">子目录中</span> 文件，路经前写上 <span style="color: #0099dd">目录名</span> ，再加上 <span style="color: #0099dd">正斜杠</span> 。例：`subdirectory/my-image.jpg`
    - 引用  <span style="color: #e3371e">上级</span> 文件，需要加上 <span style="color: #0099dd">两个点</span> 。例：如果 `index.html` 在 `test-site` 的一个子文件夹内，而 `my-image.jpg` 在 `test-site` 内，你可以使用`../my-image.jpg` 从 `index.html` 引用 `my-image.jpg`

    ==备注：==Windows 的文件系统使用反斜杠，例：`C:\Windows`，但代码中应该使用 <span style="color: #ab04d9">正斜杠</span> （即时处于 windows系统 开发）

### 4 - web 标准

Web 标准是由 W3C 组织和其他标准化组织制定的一系列标准的集合

#### 4.1 - web 标准的需要

浏览器不同，它们显示的页面或者排版有些许差异。遵循Web标准除了可以让不同的开发人员写出的页面更标准、更统一。

web 标准的优点

- 让Web标准发展前景更为广阔
- 内容能被更广泛的设备访问
- 更容易被搜索引擎了搜索
- 降低网站流量费用
- 易于维护
- 提高页面浏览速度

#### 4.2 - web 标准的构成

| 标准 |                             说明                             |
| :--: | :----------------------------------------------------------: |
| 结构 |        结构对网页元素进行整理和分类，现阶段主要是HTML        |
| 表现 | 表现用于设置网页元素的版式、颜色、大小等外观样式，主要是指CSS |
| 行为 |     行为是指网页模型的定义以及交互的编写，现阶段主要是JS     |

Web标准提出的最佳体验方案： <span style="color: #e3371e">结构、表现、行为相分离</span> 。



### 5 - 兼容性

IE 卒于 2022-06-16

## 一、HTML 简介

### 1 - HTML

HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)

- HTML 不是一种编程语言，而是一种*标记语言* (markup language)
- 标记语言是一套**标记标签** (markup tag)，HTML 使用**标记标签**来描述网页
- HTML 文档包含了HTML **标签**及**文本**内容
- HTML文档也叫做 **web 页面**

HTML 由一系列的**元素（elements）**组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。

例如：为将`云无心以出岫`作为一个段落输出，使其在网页中独占一行呈现，可使用 paragraph 元素 将文本内容封装。

```html
<P>云无心以出岫</P>
```

#### 1.1 - HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)

- HTML 标签是由 <span style="color: #e3371e">尖括号包围</span> 的 <span style="color: #e3371e">关键词</span> ，比如 `<html>`
- HTML 标签通常是 <span style="color: #e3371e">成对出现</span> 的，比如 `<b>` 和 `</b>`
- 标签对中的第一个标签是 <span style="color: #e3371e">开始标签</span> （也称，开放标签），第二个标签是 <span style="color: #e3371e">结束标签</span> （也称，闭合标签）
- 有些特殊标签必须是单个标签（极少情况），例如`<br/>`，我们称之为 <span style="color: #e3371e">单标签</span> 。

#### 1.2 - HTML文档与网页

Web 浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们

- HTML 文档描述网页，HTML 文档也被称为网页
- HTML 文档包含 HTML 标签和纯文本

#### 1.3 - HTML 元素与HTML 标签

"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思。

但是 <span style="color: #e3371e">严格来讲</span> , 一个  <span style="color: #0099dd">HTML 元素</span>  <span style="color: #ab04d9">包含</span> 了 <span style="color: #0099dd">开始标签</span> 与 <span style="color: #0099dd">结束标签</span> 

