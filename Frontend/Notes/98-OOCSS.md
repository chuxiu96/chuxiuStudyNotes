# 第〇章、OOCSS介绍

- [**原文网址**](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)

## 1 - OOCSS 的原则

### 1.1 - 从皮肤中分离出结构

- 皮肤
  - 每种元素存在在 <span style="color: #e3371e">不同视觉特性</span> 
- 结构
  - 公用的内在特征

***

将不同特性抽象为基于类的模块，使其变得可重用，可应用到任何元素渲染处相同的样式结果



#### 示例

- **未应用 OOCSS 原则** 
  - 3个元素有各自的特定样式
  - 使用不可重用的ID选择器定义样式
  - 存在一些通用的样式

```css
#button {
  width: 200px;
  height: 50px;
  padding: 10px;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}

#box {
  width: 400px;
  overflow: hidden;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}

#widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
```



- 应用OOCSS原则
  - 通用样式被组合成可复用的“皮肤”
  - 全部使用类选择器

```css
.button {
  width: 200px;
  height: 50px;
}

.box {
  width: 400px;
  overflow: hidden;
}

.widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
}

.skin {
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
```



### 1.2 - 容器和内容物分离

- 思考不同元素中的公用部分

- 将公用特性分成模块或对象
- 构建基于类的样式模块时，确保样式不依赖任何容器元素
- 随后可在任何地方重用，不管结构上下文如何



#### 示例

- **未应用OOCSS原则** 

  - 当一个出现在footer中的h3元素，仅字体大小和文本阴影不同，想表现出相同样式时
  - 使用子代选择器，使样式重用性降低（因为依赖指定容器）

  ```css
  #sidebar h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .8em;
    line-height: 1;
    color: #777;
    text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
  }
  ```

  ```css
  #sidebar h3, 
  #footer h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    line-height: 1;
    color: #777;
    text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
  }
  
  #footer h3 {
    font-size: 1.5em;
    text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
  }
  ```

  

- **应用OOCSS原则** 

```css

```