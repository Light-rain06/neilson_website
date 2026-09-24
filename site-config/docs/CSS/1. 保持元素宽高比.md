---
title: css 如何保持元素宽高比？
date: 2026-04-01 10:12:52
group: CSS
groupLogo: https://i.ibb.co/hJ1PnWrR/css-logo.png
---
# css 如何保持元素宽高比？
## 设置元素宽高为百分比
首先思考一个问题，百分比是相对单位，那么设置子元素的宽高为百分比到底基于什么呢？

元素的百分比宽高，基于它所处的**包含块**，包含块的计算规则又是**根据该元素的 position 属性决定**的，大致分为以下三类：
1. **position: static / relative / sticky**
    - 包含块是最近的非 static 定位祖先元素的内容区（content-box）
      - 宽度百分比
        - 相对于**最近**的**非 static 定位**的祖先块级元素的 **content-box** 宽度
        - 要求父级有固定宽度，比如：100px、50vw
      - 高度百分比
        - 同样相对于**最近**的**非 static 定位**的祖先块级元素的 **content-box** 高度
        - ⚠：不同于宽度一般是固定值，父元素高度一般不确定，由子元素高度决定（auto），那么子元素高度设为 100% 就会失去基准参考，成为无效值
2. **position: absolute**
    - 包含块是最近的非 static 定位的祖先元素的内边距区（padding-box）
2. **position: fixed**
    - 包含块是视口（Viewport）

所以单纯的依靠设置子元素的宽高为百分比，解决不了固定宽高比的问题

## 现代方案：aspect-ratio
给元素添加一个**基于自身宽度的几何约束**，当元素的宽度根据父级元素宽度确定后，元素的高度就会根据自身的宽度 + aspect-ratio 约束比例，这两种关系来计算出高度值

```css
.child {
  width: 100%;
  aspect-ratio: 16 / 9; /* 宽高比：16 比 9 */
}
```

这种实现方式最简单、优雅，但是存在兼容性问题，在 [CanIUse](https://caniuse.com/?search=aspect-ratio) 查看如下

![aspect-ratio 兼容性](https://i.ibb.co/wh1NstyJ/aspect-ratio.png)

所以如果要考虑兼容性，需要兜底方案：依靠 **padding** 实现固定宽高比

## 元素 padding 方案
css 中 padding 百分比计算是基于父元素的宽度的，所以使用 padding-top / padding-bottom 可以让元素保持宽高比。但是需要注意的是，为了保持子元素不被自身内容撑开破坏宽高比，需要对其进行绝对定位，再 top left right bottom 设置为 0，占满父容器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>保持元素宽高比</title>

  <style>
    .container {
      width: 100%;
    }
    .child {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 核心：高度由 padding 撑开。16:9 => 9/16 = 56.25% */
      background: #0f0;
    }
    .child-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0; /* 完全覆盖 child 内边距区域 */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="child">
      <div class="child-content">子元素内容</div>
    </div>
  </div>
</body>
</html>
```

## 其他方案
### vw / vh 结合 calc css 函数计算
```css
.child {
  width: 100vw;
  height: calc(100vw * (9 / 16));
}
```

不够灵活，且无法在复杂嵌套的弹性盒 / 网格 布局中自适应

### 使用 JavaScript 动态计算元素高度
监听 resize 事件，动态修改 height。此方案极度不推荐，不仅消耗性能，且会导致布局抖动