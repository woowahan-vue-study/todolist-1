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
          v-for="(item, index) in todoItems"
          :class="item.completed ? 'completed' : 'active'"
          :key="index"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.completed" />
            <label class="label">{{ item.title }}</label>
            <button class="destroy" @click="deleteById(item.id)"></button>
          </div>
          <input class="edit" :value="item.title" />
        </li>
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
        completed: false,
      };
      this.todoItems.push(newTodo);
      this.inputText = "";
    },
    deleteById(id) {
      const index = this.todoItems.findIndex((item) => item.id === id);
      this.todoItems.splice(index, 1);
    },
  },
  components: {},
};
</script>
