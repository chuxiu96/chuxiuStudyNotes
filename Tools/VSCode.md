# 第零章

## 1 - 参考

### 1.1 - 相关网站

- [**vsCode官网**](https://code.visualstudio.com/)



# 第一章、概述 | Overview

### 1.1 - 关于 vsCode

VisualStudioCode 是一个 <span style="color: #e3371e">轻量级</span> 但功能强大的源代码编辑器，运行于桌面，可用于Windows, macOS 和Linux。

- 内置了对 <span style="color: #0099dd">JavaScript、TypeScript  和 Node.js</span> 的支持
- 对其他语言和运行时具有丰富的扩展生态系统 （例如 C++、C#、Java、Python、PHP、Go、.NET）





# 第三章、起步 | Get Started

## 1 - 基础 | Basics

### 1.1 - 开始 | Getting started

#### Help > Get Started

探索 vsCode 动手操作的最佳方法是打开 <span style="color: #ab04d9; font-weight: 600">“入门”</span> 页面

- 获得 VSCode 的 <span style="color: #49bf51">自定义</span> 和 <span style="color: #49bf51">特性</span> 的概述
- 通过设置步骤、特性和更深入的自定义选择一个自我导游演练
  - 随着发现和学习，演练将跟踪进展



#### Help > Editor Playground

打开 <span style="color: #ab04d9; font-weight: 600">“交互式编辑器操场”</span> ，提高代码编辑技能

- 尝试 vsCode 的代码编辑特性	
  - 比如多光标编辑、智能感应、代码片段、Emmet 等等……



### 1.2 - 命令面板 | Command Palette

- 根据当前上下文访问所有可用命令

> `Ctrl+Shift+P`



### 1.3 - 默认键盘快捷键 | Default keyboard shortcuts

在命令面板中的所有命令，都有相关的键绑定，可以随时通过命令面板查看

- [热键参考表](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_keyboard-reference-sheets)



### 1.4 - 快速打开

> Tips: 命令面板输入 <span style="color: #e3371e">`?`</span> 查看命令建议

- 快速打开文件

> `Ctrl+P`



## 2 - 命令行 | Command line

vsCode 拥有强大的命令行界面（CLI），允许用户自定义如何启动编辑器以支持各种方案

> 确保 VS Code 二进制文件在您的路径上，这样您就可以简单地键入`Code` 来启动 VS Code

```bash
# 用工作目录打开代码
code .

# 在最近(recently)使用的代码窗口中打开工作目录
code -r .

# 创建一个新(new)窗口
code -n

# 改变语言
code --locale=es

# 打开差异编辑器
code --diff <file1> <file2>

# 从指定的行列打开文件 <file:line[:character]>
code --goto package.json:10:5

# 查看帮助选项
code --help

# 禁用所有扩展
code --disable-extensions .
```



 <span style="color: #e3371e; font-weight: 600">.vscode</span> **文件夹**

工作区的特定文件在根目录的 <span style="color: #e3371e">.vscode</span> 文件夹中

- 例如，用于任务启动器的 `tasks.json` 和用于调试器的 `launch.json` 



## 3 - 状态栏 | Status Bar

### 3.1 - Errors and warnings

- 快速跳转到项目中的错误和警告

  > `Ctrl+Shift+M`

- 循环遍历 erros

  > `F8` or `Shift+F8`

可以根据类型(“错误”、“警告”)或文本匹配来过滤问题

![](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/Errors_Warnings.gif)



### 3.2 - 改变语言模式

> `Ctrl+K M`

如果要持久存储该文件类型的新语言模式，您可以使用“配置文件关联”命令来将当前文件扩展名与安装的语言关联



## 4 - 自定义 | Customization

在 vsCode 中，有许多可以自定义

- 主题
- 热键
- 设置调整
- 添加 JSON 验证
- 创建代码片段
- 安装扩展



### 4.1 - 改变主题





# 附加1 · 交互式编辑器演练场

VsCode中的核心编辑器包含了许多功能。

## 1 - 多光标编辑 | Multi-cursor Editing

块选择，选择所有引用，添加其他光标等

使用多个光标可以同时编辑文档的多个部分，大大提高生产力。

- 块选择
  - 按住 `shift + ↑`、`shift + ↓`、`shit + →`、`shift + ←` 的任意组合，来选择文本块
  - 也可以在使用鼠标选择文本时按 `Shift+Alt`，或使用`鼠标中键`拖动选择。

- 添加光标
  - 按 `Ctrl + Alt + ↑ / ↓ `  在上 / 下方添加新光标
  - 您也可以使用`鼠标`和`Ctrl+Click`在任意位置添加光标。

- 在字符串的所有出现处创建光标
  - 选择一个字符串，然后按 `Ctrl+Shift+L`，选中所有相同字符串

***

查看选择菜单和键盘参考提示，了解更多 <span style="color: #49bf51">多光标编辑</span> 操作



## 2 - 智能感知 | lntellisense

vsCode 预装了强大的 JavaScript 和 TypeScript 智能

- 将文本光标定位在点的正后方，然后按Ctrl+空格键（因快捷键冲突，本地改为`ctrl+numpad_decimal`）调用智能感知

> Tips:
>
> 当我们提供Javascrpt和TypeScrpt支持时，其他lanquage可以通过众多扩展之一以更好的集成度进行升级