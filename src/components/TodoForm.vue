<template>
  <div>
    <input
      id="new-todo-title"
      v-model="inputValue"
      class="new-todo"
      placeholder="할일을 추가해주세요"
      autofocus
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    addTodoItem() {
      this.$store.dispatch("addItem", this.inputValue);
      this.inputValue = "";
    }
  }
};
</script>
