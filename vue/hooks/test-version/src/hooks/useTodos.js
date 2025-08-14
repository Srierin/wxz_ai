import {
  ref,
  computed // 计算属性
} from "vue"

export function useTodos() {
  let title = ref('');
  let todos = ref([
    {
      title: '学习vue',
      done: true,
    }
  ])
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = '';
  }

  function clear() {
    // done 为 false 留下，已完成的清除掉
    todos.value = todos.value.filter(item => !item.done);
  }
  // 未完成的todos 的数量
  let active = computed(() => {
    return todos.value.filter(item => !item.done).length;
  })
  let all = computed(() => todos.value.length)
  let allDone = computed({
    get: function() { // 计算属性的getter
      return active.value === 0;
    },
    set: function(newValue) { // 计算属性的setter
      todos.value.forEach(todo => {
        todo.done = newValue;
      });
    }
  })
  return {
    title,
    addTodo,
    clear,
    todos,
    active,
    all,
    allDone
  }

}