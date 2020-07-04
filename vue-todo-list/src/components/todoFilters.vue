<template>
  <div>
    <ul class="filters">
      <todo-filter v-for="filter of FILTERS" v-bind:key="filter.id" v-bind:filter="filter"></todo-filter>
    </ul>
  </div>
</template>

<script>
import todoFilter from "./todoFilter";
import { FILTER } from "../utils/contants"

export default {
  data: function() {
    return {
      FILTERS: FILTER,
    };
  },
  components: {
    "todo-filter": todoFilter,
  },
};
</script>

<style></style>
