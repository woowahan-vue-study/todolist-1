<template>
  <div>
    <ul class="filters">
      <todo-filter v-for="filter of FILTERS" v-bind:key="filter.id" v-bind:filter="filter"></todo-filter>
    </ul>
  </div>
</template>

<script>
import todoFilter from "./todoFilter";

export default {
  data: function() {
    return {
      FILTERS: {
        ALL: {
          id: 1,
          class:"all",
          text: "전체보기",
          link: "#/"
        },
        ACTIVE: {
          id: 2,
          class:"active",
          text: "해야할일",
          link: "#/active"
        },
        COMPLETED: {
          id: 3,
          class:"completed",
          text: "완료한 일",
          link: "#/completed"
        },
      },
    };
  },
  components: {
    "todo-filter": todoFilter,
  },
};
</script>

<style></style>
