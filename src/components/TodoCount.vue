<template>
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
          :class="{ selected: $store.state.status === 'all' }"
          >전체보기</a
        >
      </li>
      <li>
        <a
          class="active"
          @click="changeStatus('active')"
          :class="{ selected: $store.state.status === 'active' }"
          >해야할 일</a
        >
      </li>
      <li>
        <a
          class="completed"
          @click="changeStatus('completed')"
          :class="{ selected: $store.state.status === 'completed' }"
          >완료한 일</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoCount",
  methods: {
    ...mapMutations(["changeStatus"]),
  },
  computed: {
    ...mapGetters(["activeTodoItemsSize"]),
  },
};
</script>

<style scoped></style>
