<template>
  <section class="todoapp">
    <div>
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        v-model="todoName"
        @keyup.enter="addTodoItem"
        autofocus
      />
    </div>
    <div class="main">
      <input class="toggle-all" type="checkbox" />
      <ul id="todo-list" class="todo-list">
        <li
          v-for="(item, index) in filteredTodoItems"
          :class="{ completed: item.isCompleted, editing: item.isEditing }"
          :key="index"
          @dblclick="toggleEditingById(item.id)"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.isCompleted" />
            <label class="label">{{ item.title }}</label>
            <button class="destroy" @click="deleteById(item.id)"></button>
          </div>
          <input
            class="edit"
            v-model="item.titleToEdit"
            @keyup.enter="editById(item.id, item.titleToEdit)"
            @keyup.esc="cancelEditingById(item.id)"
          />
        </li>
      </ul>
    </div>
    <div class="count-container">
      <span class="todo-count"
        >총 <strong>{{ activeTodoItemsSize }}</strong> 개</span
      >
      <ul class="filters">
        <li>
          <a class="all selected" href="#/">전체보기</a>
        </li>
        <li>
          <a class="active" href="#/active">해야할 일</a>
        </li>
        <li>
          <a class="completed" href="#/completed">완료한 일</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      autoIncrementId: 0,
      todoName: "",
      todoItems: [],
      status: "all",
    };
  },
  methods: {
    addTodoItem() {
      if (this.todoName.trim() === "") {
        return;
      }
      const newTodo = {
        id: ++this.autoIncrementId,
        title: this.todoName.trim(),
        isCompleted: false,
        isEditing: false,
        titleToEdit: this.todoName.trim(),
      };
      this.todoItems.push(newTodo);
      this.todoName = "";
    },
  },
  computed: {
    filteredTodoItems() {
      switch (this.status) {
        case "active":
          return this.todoItems.filter((item) => !item.isCompleted);
        case "completed":
          return this.todoItems.filter((item) => item.isCompleted);
        default:
          return this.todoItems;
      }
    },
    activeTodoItemsSize() {
      return this.filteredTodoItems.length;
    },
  },
};
</script>
