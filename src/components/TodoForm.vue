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
import { ADD_TODO } from "../store/actionType.js";

export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    addTodoItem() {
      if (!this.inputValue) {
        return;
      }
      this.$store.dispatch(ADD_TODO, { content: this.inputValue });
      this.inputValue = "";
    }
  }
};
</script>
