# 第一章、概述

## 1 - 静态类型检查器

TypeScript 在执行之前，基于 <span style="color: #0099dd">值的类型</span> 检查程序是否有错误。它是 <span style="color: #e3371e">静态类型检查器</span> 



## 2 - Typescript 编译器

```bash
# 这将全局安装 TypeScript 的编译器 tsc
$ npm install -g typescript
```



## 3 - 报错时产出文件

默认情况下，报错后仍会产出对应的 `js文件`，这种结果其实和 TypeScript 的核心原则有关：大多数时候，**你**比 TypeScript 更了解代码。



通过开启 [noEmitOnError](https://www.typescriptlang.org/tsconfig#noEmitOnError) 编译选项，使 <span style="color: #0099dd">报错时不产出文件</span> 

```bash
$ tsc --noEmitOnError hello.ts
```

