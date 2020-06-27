<template>
  <input
    id="new-todo-title"
    class="new-todo"
    placeholder="할일을 추가해주세요"
    autofocus
    @keyup.enter="addTodo"
    v-model="inputValue"
  >
</template>

<script>
  export default {
    name: "TodoInput",
    props: ['onAdd'],
    methods: {
      addTodo(event) {
        const content = event.target.value;
        this.onAdd(content);
        this.inputValue = '';
      }
    },
    data() {
      return {
        inputValue: ''
      }
    }
  }
</script>