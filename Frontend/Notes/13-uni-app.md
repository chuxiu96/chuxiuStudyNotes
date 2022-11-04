## 快速创建项目

### 0 - 两种创建方式的区别

- HBuilderX
    - 创建的项目根目录就是源码，可直接编辑
    - dist在unpackage目录下
    - uni-app的编译器在HBuilderX的插件目录下，跟随HBuilderX升级而一起升级
- cli
    - 源码在src下
    - uni-app的编译器也安装在项目下，不会跟随HBuilderX版本升级而升级，需要自己手动npm update

### 1 - HBuilderX 可视化界面

简单，内置相关环境，开箱即用

#### 1.0 - 下载安装

- [HBuilderX](https://www.dcloud.io/hbuilderx.html)
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

#### 1.1 - 创建 uni-app

- 工具栏里的文件 -> 新建 -> 项目
- 选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建

**模版** 

- 自带的模板有 Hello uni-app ，是官方的组件和API示例
- uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件

#### 1.2 - 运行 uni-app

#### 1.3 - 发布 uni-app

### 2 - vue/cli

## CSS 语法

### 字体图标的使用

#### 1 - iconmoon

- 从 [iconmoon](https://icomoon.io/app/#/select) 下载字体包

- 在项目 `static目录下`新建 `fonts` 文件夹，并将字体包中的文件复制到项目中

    - style.css 文件
    - .eot 文件
    - .svg 文件
    - .ttf 文件
    - .woff 文件

- 在 `app.vue` 文件中全局导入

    ```css
    @import url("./static/fonts/style.css");
    ```

- 修改 `style.css` 中的 `url` 

    ```css
    // 示例
    @font-face {
      font-family: 'icomoon';
      src:  url('icomoon.eot?521psw');
      src:  url('icomoon.eot?521psw#iefix') format('embedded-opentype'),
        url('icomoon.ttf?521psw') format('truetype'),
        url('icomoon.woff?521psw') format('woff'),
        url('icomoon.svg?521psw#icomoon') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }
    ```

    > 根据自己存放路径更改 url，打包下载的字体包中，style.css文件在其他 4 个文件的上一级，因此 url 地址改成如上形式

- 使用字体图标

    - 在 iconmoon 字体生成页，通过 `get code` 获取代码，在页面中使用

        ```css
        <view class="icon-arrow-down"></view>
        ```

        - 可通过 style 中 `font-size`，`color` 修改大小和颜色

            ```css
            <view class="icon-airplay" style="font-size: 25px;color: red;"></view>
            ```

            

# 第 n 章、打包

## 1 - 证书

### 1.1 - android APP 生成自有证书

- 安装 JRE 环境

- 配置 Java 环境变量

- 生成自有证书

  在安装目录 bin文件下打开cmd

  ```bash
  # 设置证书别名	-alias
  # 设置证书文件名称	-keystore
  # 设置证书有效期	-validity 36500 为 10 年
  $ keytool -genkey -alias chuxiuAlias -keyalg RSA -keysize 2048 -validity 36500 -keystore chuxiu.keystore
  ```

- 使用自有证书进行打包