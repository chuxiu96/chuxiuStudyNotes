# 第零章

## 1 - 参考

### 1.1 - 相关网站

- [**VS Code官网**](https://code.visualstudio.com/)



# 第一章、概述 | Overview

### 1.1 - 关于 VS Code

VisualStudioCode 是一个 <span style="color: #e3371e">轻量级</span> 但功能强大的源代码编辑器，运行于桌面，可用于Windows, macOS 和Linux。

- 内置了对 <span style="color: #0099dd">JavaScript、TypeScript  和 Node.js</span> 的支持
- 对其他语言和运行时具有丰富的扩展生态系统 （例如 C++、C#、Java、Python、PHP、Go、.NET）





# 第三章、起步 | Get Started

## 1 - 基础 | Basics

### 1.1 - 开始 | Getting started

#### Help > Get Started

探索 VS Code 动手操作的最佳方法是打开 <span style="color: #ab04d9; font-weight: 600">“入门”</span> 页面

- 获得 VS Code 的 <span style="color: #49bf51">自定义</span> 和 <span style="color: #49bf51">特性</span> 的概述
- 通过设置步骤、特性和更深入的自定义选择一个自我导游演练
  - 随着发现和学习，演练将跟踪进展



#### Help > Editor Playground

打开 <span style="color: #ab04d9; font-weight: 600">“交互式编辑器操场”</span> ，提高代码编辑技能

- 尝试 VS Code 的代码编辑特性	
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

VS Code 拥有强大的命令行界面（CLI），允许用户自定义如何启动编辑器以支持各种方案

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



 <span style="color: #e3371e; font-weight: 600">.VS Code</span> **文件夹**

工作区的特定文件在根目录的 <span style="color: #e3371e">.VS Code</span> 文件夹中

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

在 VS Code 中，有许多可以自定义

- 主题
- 热键
- 设置调整
- 添加 JSON 验证
- 创建代码片段
- 安装扩展



### 4.1 - 改变主题





# 第五章、源代码控制 | Source Control

## 1 - 概述 | Overview

VS Code具有集成<span title="source control management">源代码管理</span>(SCM)，包括开箱即用的 Git 支持。

许多其他源代码管理提供程序可以通过 VS 代码市场上的扩展获得。



### 1.1 - 在 Git 存储库中工作

> VS code 使用本地安装的 Git（最低 2.0.0），确保 Git 已安装

左边活动栏中的源代码管理图标将始终显示存储库中当前有多少更改的概述

- 单击选择图标
  - 将显示当前存储库更改的详细信息: 更改、分阶段更改和合并更改
- 单击每个项目
  - 将详细显示每个文件中的文本更改
  - 对于非暂存的更改，右边的编辑器仍然允许您编辑文件: 您可以随意使用它
- VS Code 的左下角有存储库状态的指示符: 当前分支，dirty indicators，以及当前分支的传入和传出提交的数量
  - 通过单击状态指示器并从列表中选择 Git 引用，可以签出存储库中的任何分支



> 您可以在 Git 存储库的子目录中打开 VS Code
>
> - VS Code 的 Git 服务仍然像往常一样工作，显示存储库中的所有更改
> - 但是作用域目录之外的文件更改用工具提示阴影显示，指示它们位于当前工作区之外



### 1.2 - Commit

暂存 (git add) 和 去跟踪(git reset)可以通过文件中的上下文操作或拖放来完成。

![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/stage-changes.png)

可以在更改上方键入提交消息，然后按 `Ctrl + Enter` 来 commit

- 如果没有任何 <span style="color: #49bf51">已暂存更改</span> 
  - 则只提交 <span style="color: #49bf51">更改</span> 
  - 否则，将得到一个提示，要求选择要提交的更改，并获得更改提交设置的选项

> TIPs：
>
> 如果将更改提交到错误的分支，可以使用命令面板（`Ctrl+Shift+P`）中的 `Git: Undo Last Commit` 来 <span style="color: #49bf51; font-weight: 600">撤销上次提交</span> 



### 1.3 - 克隆一个存储库

**方案1**

如果你还没打开文件夹，“源代码管理”视图将为您提供从本地计算机或克隆存储库打开文件夹的选项

![](VSCode.assets/firstrun-source-control.png)

如果您选择 Clone Repository，您将被要求输入远程存储库的 URL (例如在 GitHub 上)和放置本地存储库的父目录，然后将要复制的仓库 url 粘贴到 Git: Clone 提示符中



***

**方案2**

> 一旦 VS Code 中验证了 GitHub 帐户，将能够通过名称搜索存储库，并选择任何存储库来克隆它

可以使用命令面板 (`Ctrl + Shift + P`)中的 `Git: Clone` 命令来克隆 Git 存储库。



### 1.4 - 分支和标签

可以在命令面板 (`Ctrl + Shift + P`)中，通过 `Git: Create Branch` 和 `Git: Checkout` 直接在 VS Code 创建和签出分支



- 运行 Git: Checkout to

  - 将看到一个下拉列表，其中包含当前存储库中的所有分支或标记

  ![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/gitbranches.png)

- Git: CreateBranch 命令
  - 允许您快速创建一个新分支
  - 只需提供新分支的名称，VS Code 将创建分支并切换到它
- Create new branch from...
  - 将得到一个额外的提示符，允许指定新分支应该指向哪个提交



# 附加1 · 交互式编辑器演练场

VS Code中的核心编辑器包含了许多功能。

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

VS Code 预装了强大的 JavaScript 和 TypeScript 智能

- 将文本光标定位在点的正后方，然后按Ctrl+空格键（因快捷键冲突，本地改为`ctrl+numpad_decimal`）调用智能感知

> Tips:
>
> 当我们提供Javascrpt和TypeScrpt支持时，其他lanquage可以通过众多扩展之一以更好的集成度进行升级



## 3 - 行操作 | Line Actions

由于在一行中处理整个文本是非常常见的，因此 VS Code 提供了一组有用的快捷方式来帮助实现这一点

- 复制一行文本，将其插入当前位置的上方或下方
  - `Shift + Alt + ↑ ` 或 `Shift + Alt + ↓ ` 
- 向上或下移动整行或所选行
  - `Alt + ↑ ` 或 `Alt + ↓ ` 
- 删除整行
  - `Ctrl + Shift + K`
- 注释整行
  - `Ctrl + /`
  - `Ctrl + Shift + /`



## 4 - 更名重构 | Rename Refactoring

可以很容易地重命名一个符号（如，函数名或变量名）

- 变量处单击 `F2` 可重命名所有实例（应用于项目中所有文件）
-  <span style="color: #e3371e">右键快捷菜单</span> 中也有重命名符号选项

> JSDoc Tips：VS Code 使用JSDoc注释提供更丰富的建议
>
> - 将鼠标悬停在对 <span style="color: #e3371e">变量</span> 的引用上时，JSDoc注释中的类型和文档就会显示出来
> - 或在 IntelliSense 中创建 <span style="color: #e3371e">变量</span> 的新实例



## 5 - 格式化 | Formatting

- 格式化整个文档
  - `Shift + Alt + F`
- 格式化当前选择
  - `Ctrl + k Ctrl + F`
- 右键快捷菜单也有对应操作

> 扩展中提供了其他格式化程序
>
> 格式化支持也可以通过设置进行配置，例如，启用 `editor.formatOnSave`



## 6 - 代码折叠 | Code Folding

在大文件中，折叠一部分代码对提高可读性很有帮助。

- 折叠或解除折叠当前光标对应范围
  - `Ctrl + Shift  + [` or `Ctrl + Shift  + ] `
- 也可以使用代码行旁的箭头操作
- 折叠所有或接触折叠所有
  - `Ctrl + K Ctrl + 0` or `Ctrl + K Ctrl + J`

> TIPs:
>
> - 折叠基于缩进，因此适用于所有语言。
> - 只需缩进代码即可创建可折叠部分，可以使用快捷方式折叠一定数量的级别
>   - 从 `Ctrl + K Ctrl + 1` 到 `Ctrl + K Ctrl + 5`



## 7 - 错误和警告 | Errors and Warnings

使用波形曲线编辑代码时，会突出显示错误和警告。当您更正它们时，波形和滚动条指示器将更新

- 按顺序浏览错误和警告，并看到详细的错误信息
  - `F8`



## 8 - 代码段 | Snippets

通过使用代码块加快编辑速度



> TIPs：
>
> - 扩展库包含几乎所有框架和lanquage的片段
> - 还可以创建自己的用户自定义片段



## 9 - Emmet

Emmet 将 Sinppets 的想法提升到了一个全新的层次：您可以键入类似于可以动态解析的类CSS表达式，并根据在缩写中键入的内容生成输出

> [Emmet 备忘单](https://docs.emmet.io/cheat-sheet/)
>
> [Emmet in VS Code](https://code.visualstudio.com/docs/editor/emmet)

```js
ul>li.item$*5 // 键入 Tab 展开
```



## 10 - JavaScript 类型检查 | JavaScript Type Checking

只需在您的页面顶部添加`// @ts-check`注释，即可对现有JavaScript代码运行TypeScript类型检查器

或添加`// @ts-nocheck` or `// @ts-expect-error` 显示忽略文件 or 行

> [JavaScript in VS Code](https://code.visualstudio.com/docs/languages/javascript)

```js
// @ts-nocheck

let easy = true;
easy = 42;
```

