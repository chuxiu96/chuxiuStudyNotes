# Git 起步

## 一、git 的三种状态

Git 有三种状态

- 已修改（**modified**） - 修改了文件，但未保存到数据库找那个
- 已暂存（**staged**） - 对已修改的文件版本做了标记，使之包含在下次提交的快照中
- 已提交（**committed**） - 数据已安全地保存在本地数据库中

对应的，我们的 Git 项目拥有 3 个阶段

- 工作区 - 项目的某个版本独立提取出来的内容
- 暂存区 - 保存了下次将要提交的文件列表信息
- Git 仓库目录 - Git 用来保存项目的元数据和对象数据库的地方



## 二、初次运行 Git 前的配置

Git 自带一个 `git config` 的工具来帮助设置控制 Git 外观和行为的配置变量，这些变量存储在三个不同的位
置：

- `/etc/gitconfig` 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果在执行 git config 时带上
    `--system` 选项，那么它就会读写该文件中的配置变量。 （由于它是系统配置文件，因此你需要管理员或
    超级用户权限来修改它。）

- `~/.gitconfig` 或 `~/.config/git/config` 文件：只针对当前用户。 你可以传递 `--global` 选项让 Git
    读写此文件，这会对你系统上 所有 的仓库生效。

- 当前使用仓库的 Git 目录中的 `config` 文件（即 .git/config）：针对该仓库。 你可以传递 `--local` 选
    项让 Git 强制读写此文件，虽然默认情况下用的就是它。。 （当然，你需要进入某个 Git 仓库中才能让该选
    项生效。）

每一个级别会覆盖上一级别的配置，所以 .git/config 的配置变量会覆盖 /etc/gitconfig 中的配置变量



```bash
# 令查看所有的配置以及它们所在的文件
$ git config --list --show-origin
```



### 1 - 用户信息

安装完 Git 之后，要做的第一件事就是设置你的 <span style="color: #e3371e">用户名</span> 和 <span style="color: #e3371e">邮件地址</span> 

这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改

```bash
$ git config --global user.name "chuxiu"
$ git config --global user.email chuxiu@example.com
```

> 使用 --global 选项全局配置
>
> 想针对特定项目使用不同的用户名称与邮件地址时，以在那个项目目录下运行没有 --global 选项的命令来配置



### 2 - 检查配置信息

```bash
# 列出所有 Git 当时能找到的配置
$ git config --list

# 检查 Git 的某一项配置
$ git config user.name
```



### 3 - 获取帮助

```bash
# 找到 Git 命令的综合手册（manpage） 3种等价方式
$ git help <verb>
$ git <verb> --help
$ man git-<verb>

# 获得 git config 命令的手册
$ git help config

# 若不需要全面的手册，用 -h 选项获得更简明的 “help” 
$ git add -h
```

