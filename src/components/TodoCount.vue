<template>
  <span class="todo-count"
    >총 <strong>{{ selectedCount }}</strong> 개</span
  >
</template>

<script>
import { mapGetters } from "vuex";
import { GET_COUNT_OF_FILTERED_ITEM } from "../store/gettersType.js";

export default {
  computed: {
    ...mapGetters({ selectedCount: GET_COUNT_OF_FILTERED_ITEM })
  }
};
</script>
