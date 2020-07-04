<template>
  <section class="todoapp">
    <div>
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        v-model="inputText"
        @keyup.enter="addNewTodo"
        autofocus
      />
    </div>
    <div class="main">
      <input class="toggle-all" type="checkbox" />
      <ul id="todo-list" class="todo-list">
        <Todo
          :key="index"
          v-for="(item, index) in todoItems"
          :id="item.id"
          :title="item.title"
          :status="item.status"
          @toggleStatus="toggleStatusById"
          @deleteTodo="deleteById"
        ></Todo>
      </ul>
    </div>
    <div class="count-container">
      <span class="todo-count">총 <strong>0</strong> 개</span>
      <ul class="filters">
        <li>
          <a class="all selected">전체보기</a>
        </li>
        <li>
          <a class="active">해야할 일</a>
        </li>
        <li>
          <a class="completed">완료한 일</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  data() {
    return {
      autoIncrementId: 0,
      inputText: "",
      todoItems: [],
    };
  },
  methods: {
    addNewTodo() {
      if (this.inputText.trim() === "") {
        return;
      }
      const newTodo = {
        id: ++this.autoIncrementId,
        title: this.inputText.trim(),
        status: "active",
      };
      this.todoItems.push(newTodo);
      this.inputText = "";
    },
    toggleStatusById(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      const changedStatus =
        this.todoItems[index].status === "active" ? "completed" : "active";
      this.todoItems[index].status = changedStatus;
    },
    deleteById(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      this.todoItems.splice(index, 1);
    },
  },
  components: { Todo },
};
</script>
