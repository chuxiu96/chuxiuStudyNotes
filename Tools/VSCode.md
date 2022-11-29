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





# 第四章、使用指南

## 6 - 调试 | Debugging

### 6.1 - 调试扩展

VS Code 为 Node.js runtime提供了内置的调试支持，可以调试 JavaScript、 TypeScript 或任何其他传输到 JavaScript 的语言



对于调试其他语言和runtime，可以在扩展市场寻找对应的扩展



### 6.2 - 开始调试

选择 <span style="color: #e3371e">运行和调试</span> 活动栏图标，打开**运行和调试**视图（shortcut：`Ctrl+Shift+D`）

“运行和调试”视图显示与运行和调试相关的所有信息，并有一个带有调试命令和配置设置的顶部栏



### 6.3 - 运行菜单

顶部 Run 菜单包含最常见的运行和调试命令



### 6.4 - 启动配置

对于大多数调试方案，最好创建一个启动配置文件，因为它允许您配置和保存调试安装详细信息

VS Code 将调试信息保存在 `launch.json` 文件中，位于根目录的 `.vscode` 文件夹中



#### # 创建 launch.json 文件

单击 Run start 视图中的 create a launch.json file 以创建 launch.json 文件

VS 代码将尝试自动检测您的调试环境，如果失败，可以手动配置

> 请注意，启动配置中可用的属性因调试器而异
>
> - 可以使用 IntelliSense 建议(Ctrl + Space)查找特定调试器存在哪些属性，悬停帮助也可用于所有属性
> - 出现绿色曲线的地方，悬停了解问题，确保在启动调试前修复
> - 检查所有自动生成的值，并确保它们对项目和调试环境有意义



##### 启动与附加配置

在 VS 代码中，有两种核心调试模式：**Launch** 和 **Attach**，用以处理两种不同的工作流



**基于浏览器开发工具背景**

您可能不习惯“从工具启动”，因为您的浏览器实例已经打开。打开 DevTools 时，只需将 DevTools 附加到打开的浏览器选项卡。



**基于服务器或桌面背景**

让编辑器为您启动进程是很正常的，编辑器会自动将其调试器附加到新启动的进程



VS Code 调试器通常支持

- 在调试模式下启动程序
- 在调试模式下附加到已经运行的程序



##### 添加新配置

**向现有 launch.json 添加新配置**

- 如果光标位于配置数组中，则使用 <span style="color: #e3371e">IntelliSense</span> 
- 按 <span style="color: #e3371e">添加配置</span> 按钮在数组开始处，调用代码段 IntelliSense
- 在“运行”菜单中选择“添加配置”选项。

VS 代码还支持同时启动多个配置的[复合启动配置](https://code.visualstudio.com/docs/editor/debugging#_compound-launch-configurations)



### 6.5 - 调试操作

一旦调试会话启动，“调试”工具栏将出现在编辑器的顶部

|           操作            |                             说明                             |
| :-----------------------: | :----------------------------------------------------------: |
|     继续/暂停（`F5`）     | **继续**：恢复正常的程序/脚本执行(直到下一个断点)<br />**暂停**：检查在当前行执行的代码并逐行调试 |
|     单步跳过（`F10`）     |     作为单个命令执行下一个方法，而不检查或遵循其组件步骤     |
|     单步执行（`F11`）     |                输入下一个方法以逐行跟踪其执行                |
| 单步停止（`Shift + F11`） | 在方法或子例程内部时，通过完成当前方法的剩余行来返回到早期的执行上下文，就像它是一个单独的命令一样 |
|   重启(`Ctrl+Shift+F5`)   |        终止当前程序执行并使用当前运行配置重新开始调试        |
|    停止（`Shift+F5`）     |                      终止当前程序的执行                      |



#### # 运行模式





### 6.6 - 断点

可以通过单击编辑器边距或在当前行上使用 F9来切换 <span style="color: #e3371e">breakpoints</span> ，更详细的断点控制在“运行和调试视图”中

- 编辑器边距中的断点通常显示为红色填充圆圈
- 禁用的断点有一个填充的灰色圆圈
- 当一个调试会话开始，无法在调试器中注册的断点更改为灰色空心圆
  - 如果在没有实时编辑支持的调试会话运行时编辑源代码，也可能发生同样的情况



如果调试器支持对不同类型的错误或异常进行中断，那么这些错误或异常也可以在 BREAKPOINTS 视图中使用



### 6.7 - 日志点

 <span style="color: #e3371e">Logpoint</span> 是断点的变体，它不会“中断”到调试器中，而是将消息记录到控制台

- Logpoint 由“菱形”形状的图标表示
- 日志消息是纯文本，但可以包括要在大括号(“{}”)中计算的表达式



日志点对于注入日志记录特别有用，特别是调试不能暂停或停止的生产服务器



与常规断点一样，日志点可以启用或禁用，也可以通过条件和/或命中计数来控制



> NOTE
>
> VS Code 的内置 Node.js 调试器支持日志点，但可以通过其他调试扩展实现



### 6.8 - 数据检查

在“运行和调试视图”中的“变量”部分，或者，在编辑器中对应的变量上悬停，可以检查变量。

变量值和表达式计算与 CALL STACK 部分中选定的堆栈帧相关。



可以使用变量上下文菜单中的 Set Value 操作修改变量值，另外，可以复制变量的值，或复制表达式以访问变量

变量和表达式也可以在“运行和调试视图”的“监视”部分中进行计算和监视

当焦点位于“变量”部分时，可以通过键入变量名称和值进行筛选



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



### 1.5 - 远程 | Remotes

假设您的存储库连接到某个远程，并且您的签出分支具有到该远程中某个分支的上游链接

- VS Code 提供 **push**、**pull** 和 **sync** 该分支的有用操作
- 可以在“视图和更多操作...”菜单中找到这些操作，以及添加或删除远程的选项



VS 代码能够定期从远程获取更改

- 这使 VS Code 能够显示本地存储库在远程之前或之后进行了多少更改。
- 默认情况下，这个特性是禁用的，您可以使用 `git.autoget` 设置来启用它



### 1.6 - Git状态栏操作 | Git Status Bar Actions

状态栏中有一个 <span style="color: #e3371e; font-weight: 600">同步更改</span> 操作，在分支指示器旁边

-  <span style="color: #e3371e; font-weight: 600">同步更改</span> 操作，将把远程更改下拉到本地存储库，然后将本地提交推送到上游分支。

![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/git-status-bar-sync.png)

- 如果没有配置和上游分支

  -  <span style="color: #e3371e; font-weight: 600">同步更改</span> 操作，将启用发布操作，允许您将当前分支发布到远程

  ![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/git-status-bar-publish.png)



### 1.7 - 排水沟指示器 | Gutter indictors

如果您打开一个 Git 存储库文件夹并开始进行更改，VS Code 将向 Gutter 和 overview ruler 添加有用的注释。

- 红色三角形表示线已被删除的位置
- 绿色条表示新添加的行
- 蓝色条表示修改后的行

![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/gutter.png)



### 1.8 - 合并冲突 | Merge Conflicts

合并冲突会被 VS 代码识别。

- 将突出显示差异，并且有内联操作可以接受一个或两个更改
- 一旦冲突得到解决，就将冲突文件分阶段处理，以便您可以提交这些更改

![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/merge-conflict.png)



### 1.9 - 查看差异 | Viewing Diffs

Git 工具支持在 VS 代码中查看差异

- 首先右键单击资源管理器或 OPEN 编辑器列表中的一个文件
- 选择 Select for Compare
- 然后右键单击第二个文件进行比较
- 并选择 Compare with‘ file _ name _ You _ options’

或者

- 从键盘上按下 Ctrl + Shift + P 
- 并选择 File: Compare Active File With，您将看到最近的文件列表



### 1.10 - Diff editor review pane

Diff 编辑器中有一个审查窗格，它以统一的补丁格式显示更改。

- 可以使用“转到下一个差异”(F7)和“转到上一个差异”(Shift + F7)在更改之间导航
- 可以使用箭头键导航行，按下 Enter 将在 Diff 编辑器和选定行中跳回



### 1.11  - 时间线 | Timeline view

资源管理器底部访问的时间线是一个统一视图，用于可视化文件的时间序列事件(例如，Git 提交)

![](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/timeline-view.png)



VS Code 的内置 Git 支持提供指定文件的 Git 提交历史记录

- 选择一个提交将打开该提交引入的更改的差异视图
- 当右键单击提交时，您将获得“复制提交 ID”和“复制提交消息”选项。

> TIPs：
>
> 在扩展市场中，有许多其他的 Git历史工作流 插件



### 1.12 - Git 输出窗口 | Git Output Window

您总是可以从hood下面看到我们正在使用的 Git 命令。如果有什么奇怪的事情发生或者你只是好奇，这是有帮助的



要打开 Git 输出窗口，运行 View > Output 并从下拉列表中选择 Log (Git)



### 1.13 - 初始化存储库 | Initialize a repository

当 VS Code 未检测到现有的 Git 存储库时，源代码管理视图将为您提供初始化存储库或发布到 GitHub 的选项。



## 2 - 在 VS Code 中使用 GitHub

在 VS Code 中，丰富的 GitHub 集成是由 GitHub 的  `GitHub Pull Requests and Issues` 扩展提供的。



**要在 VS Code 中开始使用 GitHub**

- 需要安装 Git
- 创建一个 GitHub 帐户
- 安装 GitHub Pull Request and Affairs 扩展



### 2.1 - 开始使用

- 安装  `GitHub Pull Requests and Issues` 扩展
- 登录验证



### 2.2 - 建立存储库

#### # 克隆存储库

- 使用 Command Palette (Ctrl + Shift + P)中的 Git: Clone 命令从 GitHub 中搜索并克隆一个存储库

- <span style="color: #49bf51">或者</span> 通过使用“源代码管理”视图中的“克隆存储库”按钮(在没有打开文件夹时可用)



#### # 使用现有存储库进行身份验证



### 2.3 - 编辑器集成

#### # 悬浮

打开一个存储库，并且@了一个用户，那么可以将鼠标悬停在该用户名上，然后看到一个 GitHub 风格的鼠标悬停

![](https://code.visualstudio.com/assets/docs/sourcecontrol/github/user-hover.png)



对于 # 提到的问题编号、完整的 GitHub 问题 URL 和存储库指定的问题，也能看到一样的悬浮信息

![](https://code.visualstudio.com/assets/docs/sourcecontrol/github/issue-hover.png)



#### # 建议

用户建议由“@”字符触发，问题建议由“ #”字符触发

建议可在编辑器和“源代码管理”视图的输入框中找到

![](https://code.visualstudio.com/assets/docs/sourcecontrol/github/user-issue-suggest.gif)



### 2.4 - 拉取请求

从拉取请求视图，您可以查看、管理和创建拉请求

![](https://code.visualstudio.com/assets/docs/sourcecontrol/github/pull-request-view.png)



#### # 创建拉取请求



#### # 审阅





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

