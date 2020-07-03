<template>
  <section class="todoapp">
    <div>
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        autofocus
      />
    </div>
    <div class="main">
      <input class="toggle-all" type="checkbox" />
      <ul id="todo-list" class="todo-list"></ul>
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
  components: {},
};
</script>
