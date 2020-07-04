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
        >남은 할 일 <strong>{{ activeTodoItemsSize }}</strong
        >개</span
      >
      <ul class="filters">
        <li>
          <a
            class="all"
            @click="changeStatus('all')"
            :class="{ selected: status === 'all' }"
            >전체보기</a
          >
        </li>
        <li>
          <a
            class="active"
            @click="changeStatus('active')"
            :class="{ selected: status === 'active' }"
            >해야할 일</a
          >
        </li>
        <li>
          <a
            class="completed"
            @click="changeStatus('completed')"
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
  name: "App",
  data() {
    return {
      autoIncrementId: 0,
      inputText: "",
      todoItems: [],
      status: "all",
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
        isCompleted: false,
        isEditing: false,
        titleToEdit: this.inputText.trim(),
      };
      this.todoItems.push(newTodo);
      this.inputText = "";
    },
    deleteById(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      this.todoItems.splice(index, 1);
    },
    toggleEditingById(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      let changedTodo = this.todoItems[index];
      changedTodo.isEditing = !changedTodo.isEditing;
      this.todoItems.splice(index, 1, changedTodo);
    },
    editById(id, title) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      let changedTodo = this.todoItems[index];
      changedTodo.title = title;
      this.todoItems.splice(index, 1, changedTodo);
      this.toggleEditingById(id);
    },
    cancelEditingById(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      this.todoItems[index].titleToEdit = this.todoItems[index].title;
      this.toggleEditingById(id);
    },
    changeStatus(status) {
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
      return this.todoItems.filter((item) => !item.isCompleted).length;
    },
  },
};
</script>
