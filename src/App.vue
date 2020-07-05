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
          @dblclick="toggleEditMode(item.id)"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.isCompleted" />
            <label class="label">{{ item.title }}</label>
            <button class="destroy" @click="removeTodoItem(item.id)"></button>
          </div>
          <input
            class="edit"
            v-model="item.titleToEdit"
            @keyup.enter="editTodoItem(item.id, item.titleToEdit)"
            @keyup.esc="cancelEditMode(item.id)"
          />
        </li>
      </ul>
    </div>
    <div class="count-container">
      <span class="todo-count">
        총
        <strong>{{ activeTodoItemsSize }}</strong> 개
      </span>
      <ul class="filters">
        <li>
          <a
            class="all"
            @click="changeFilter('all')"
            :class="{ selected: status === 'all' }"
            >전체보기</a
          >
        </li>
        <li>
          <a
            class="active"
            @click="changeFilter('active')"
            :class="{ selected: status === 'active' }"
            >해야할 일</a
          >
        </li>
        <li>
          <a
            class="completed"
            @click="changeFilter('completed')"
            :class="{ selected: status === 'completed' }"
            >완료한 일</a
          >
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
      this.todoItems.push(this.makeNewTodo());
      this.todoName = "";
    },
    makeNewTodo() {
      return {
        id: ++this.autoIncrementId,
        title: this.todoName.trim(),
        isCompleted: false,
        isEditing: false,
        titleToEdit: this.todoName.trim(),
      };
    },
    removeTodoItem(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      this.todoItems.splice(index, 1);
    },
    editTodoItem(id, title) {
      let item = this.todoItems.find((item) => item.id === id);
      item.title = title;
      this.toggleEditMode(id);
    },
    cancelEditMode(id) {
      const item = this.todoItems.find((item) => item.id === id);
      item.titleToEdit = item.title;
      this.toggleEditMode(id);
    },
    toggleEditMode(id) {
      const item = this.todoItems.find((item) => item.id === id);
      item.isEditing = !item.isEditing;
    },
    changeFilter(status) {
      this.status = status;
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
