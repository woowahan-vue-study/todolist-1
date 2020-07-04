<template>
  <div>
    <h1>TODOS</h1>
    <input
      id="new-todo-title"
      class="new-todo"
      placeholder="할일을 추가해주세요"
      autofocus
      v-model="todoValue"
      v-on:keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      todoValue: ""
    }
  },
  methods: {
    addTodo(){
      if(!this.todoValue){
        return;
      }
      this.$store.commit("ADD_TODO", this.todoValue);
      this.todoValue = ""
    }
  }
};
</script>

<style></style>
