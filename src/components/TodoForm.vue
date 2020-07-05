<template>
    <div>
        <h1>TODOS</h1>
        <input v-model="inputValue" v-on:keyup.enter="addTodoItem" id="new-todo-title" class="new-todo"
               placeholder="할일을 추가해주세요" autofocus>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      addTodoItem() {
        this.$store.dispatch('addItem', this.inputValue)
        this.inputValue = ''
      }
    }
  }
</script>