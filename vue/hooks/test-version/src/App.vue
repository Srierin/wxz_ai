<!-- MVVM 响应式，数据绑定，状态管理，生命周期，hooks -->
<!-- 在页面上晃动鼠标，实时显示鼠标的x，y 坐标 -->
<!-- 三明治 脚本 模板 样式 -->

<script setup>
import { useMouse } from './hooks/useMouse';
import { useTodos } from './hooks/useTodos';

  const { x, y } = useMouse();
  const { 
    title,
    todos, 
    addTodo,
    clear,
    active,
    all, 
    allDone 
  } = useTodos();

</script>

<template>
  <div>
    <!-- 数据绑定 -->
    {{x}} {{y}}

    <div>
      <!--v-model 也叫作双向绑定指令 -->
      <!-- vue事件绑定 以@ 开头 修饰符 按enter触发 -->
      <input type="text" v-model="title" @keydown.enter="addTodo">
      <!-- v-if  vue指令 如果为true 就显示 -->
      <button v-if="active < all" @click="clear">清理</button>
      <ul v-if="todos.length">
        <!-- v-for 循环指令 -->
        <li v-for="todo in todos">
          <input type="checkbox" v-model="todo.done" />
          <span>{{ todo.title }}</span>
        </li>
      </ul>
      <div v-else>暂无数据</div>
      <div>
        全选
        <input type="checkbox" v-model="allDone" />
        <span>{{ active }} / {{ all }}</span>
      </div>
    </div>
  </div>
  
</template>

<style scoped>

</style>
