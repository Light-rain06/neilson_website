---
title: Vue slot 插槽
date: 2026-03-28 10:37:00
group: vue
groupLogo: https://i.ibb.co/Q7dXCfTF/vue-logo.png
---
# Vue slot 插槽
## 作用
Vue 插槽这个功能是 Vue2 与 Vue3 均有的功能，用来向组件内部分发模板内容

## 分类
- 默认插槽
  - 无名字
  - 每个组件只有一个
- 具名插槽
  - 带有 name 属性
  - 可有多个
- 作用域插槽

## 基本用法
### 默认插槽用法
父组件写法：
```html
<ChildComponent>
  当前文字将分发到默认插槽位置
</ChildComponent>
```

子组件写法：
```html
<template>
  <div>
    <!-- 文字会分发到此处 -->
    <slot></slot>
    <!-- <slot>也可以写入默认内容，当前文字会在父组件未传递时默认显示</slot> -->
  </div>
</template>
```

### 具名插槽用法
父组件写法：
```html
<Layout>
  <template v-slot:header>
    <p>页头分发内容</p>
  </template>

  <template v-slot:default>
    <p>默认插槽分发内容</p>
  </template>

  <template v-slot:footer>
    <p>页脚分发内容</p>
  </template>
</Layout>
```

子组件写法：
```html
<div class="container">
  <header>
    指定页头分发到此处
    <slot name="header"></slot>
  </header>

  <main>
    指定主题分发到此处
    <slot></slot>
  </main>

  <footer>
    指定页头分发到此处
    <slot name="footer"></slot>
  </footer>
</div>
```

### 作用域插槽用法
不同于默认插槽、具名插槽用来做内容分发，作用域插槽是用来：子组件向父组件传递数据

子组件写法：
```html
<slot :text="message" :count="num"></slot>
```

父组件写法：
```html
<ChildComponent v-slot="slotProps">
  <p>{{ slotProps.text }}</p>
  <p>{{ slotProps.count }}</p>
</ChildComponent>
```

## 特点
因为插槽是从父组件向子组件传递的模板，所以分发的模板可以访问父组件的作用域。当然该模板来自父组件，自然无法访问子组件作用域

## 应用场景
- 内容分发
  - 页面布局组件分发
- 组件复用
  - 模态框复用，内容按需分发（子组件负责弹窗容器和逻辑，父组件负责展示内容）

## 额外思考 1
作用域插槽允许子组件传递数据到父组件，这是否违反了 Vue 单向数据流的规则？

### 标准单向数据流解释
我们常看到的单向数据流解释：
- 父组件通过 props 向子组件传递数据，子组件消费父组件传递的数据，
- 但是，子组件无权更改传递来的数据，只允许通过 emit 触发父组件监听的对应事件，以此来间接修改父组件传递的数据

父组件 props 传递：
```vue
<template>
  <div class="container">
    <ChildComponent
      :list="booksList"
      @changeList="changeBooksList"
    ></ChildComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const booksList = ref([
  { name: '神秘复苏', author: '佛前献花' },
  { name: '西游记', author: '吴承恩' }
]);

const changeBooksList = (newArr) => {
  booksList.value = newArr;
}
</script>

<style>
  .container {
    color: red;
  }
</style>
```

子组件接收 props：
```vue
<template>
  <ul class="bookList">
    <li v-for="(item, index) in list" :key="index">
      {{ item.name }} - {{ item.author }}
    </li>
  </ul>
  <button @click="handleClear">清空列表</button>
</template>

<script setup>
const props = defineProps(['list']);
const emit = defineEmits(['changeList']);

const handleClear = () => {
  emit('changeList', []);
}
</script>

<style>
.bookList {
  list-style: none;
}
</style>
```

### 与作用域插槽的对比
| 对比维度 | 标准 props emit | 作用域插槽 |
| :-----: | :----: | :----: |
| 数据所有权 | 归父组件 | 归子组件 |
| 修改权归属 | 归父组件 | 归子组件 |
| 父组件能直接改数据吗 | 能（因为是自己的数据） | 不能（子组件的数据，父组件只有只读权） |
| 父组件如何触发修改 | 监听子组件的 emit，自己动手改 | 调用子组件暴露的 update 方法，让子组件自己改 |
| 是否违反单向流 | 标准单向数据流解释 | ❌ 不违反（数据拥有者唯一修改，非拥有者只能消费） |

### 总结
单向数据流的铁律不是"数据必须从父流向子"，而是：
- 数据拥有者拥有唯一的修改权
- 非拥有者只能消费
- 无论是父传子的 props + emit，还是子传父的作用域插槽，都严格准守**数据拥有者才是唯一修改权所有者**的规则

## 额外思考 2
插槽的本质是什么？

先观察三种插槽的用法：

传入插槽：
```html
<template>
  <childComponent>
    <p>默认插槽</p>

    <template v-slot:slot1>
      <p>具名插槽：slot1</p>
    </template>

    <template v-slot:slot2="slotData">
      <p>作用域插槽 slot2：{{ slotData.msg }}</p>
    </template>
  </childComponent>
</template>
```

使用插槽：
```html
<template>
  <div>
    <slot></slot>
    <slot name="slot1"></slot>
    <slot name="slot2" msg="hello world"></slot>
  </div>
</template>
```

在父组件中传递插槽，传递的是什么？vue 和 react 在运行时都是 js，所以**插槽传递的本质是一个对象（每个插槽对应一个函数）**，即在父组件传递：
```js
{
  default: function() {},
  slot1: function() {},
  slot2: function(slotData) {}
}
```

在子组件中使用插槽时，相当于**调用对应的函数生成虚拟节点**
```html
<!-- 调 default 函数，生成 <p>默认插槽</p> 的虚拟节点 -->
<slot></slot>

<!-- 调 slot1 函数，生成虚拟节点 -->
<slot name="slot1"></slot>

<!-- 调 slot2 函数，并且传递参数 msg，生成虚拟节点 -->
<slot name="slot2" msg="hello world"></slot>
```

所以子组件使用插槽完全可以看成下面的 js 代码：
```js
import { createElementVNode } from 'vue';
export default {
  setup(props, { slots }) {
    return () => {
      const defaultVNodes = slots.default(); // 默认插槽虚拟节点
      const slot1VNodes = slots.slot1(); // slot1 插槽虚拟节点
      const slot2VNodes = slots.slot2({ // slot2 插槽虚拟节点
        msg: "hello world"
      });

      const div = createElementVNode('div', null, [
        ...defaultVNodes,
        ...slot1VNodes,
        ...slot2VNodes
      ]);

      return div;
    }
  }
}
```