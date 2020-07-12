<template>
  <input
    id="new-todo-title"
    class="new-todo"
    placeholder="할일을 추가해주세요"
    v-model="inputText"
    @keyup.enter="tryToAddNewTodo"
    autofocus
  />
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoInput",
  data: function () {
    return {
      inputText: "",
    };
  },
  methods: {
    ...mapMutations(["addNewTodo"]),
    tryToAddNewTodo() {
      if (this.inputText.trim() === "") {
        return;
      }
      this.addNewTodo(this.inputText);
      this.inputText = "";
    },
  },
};
</script>
