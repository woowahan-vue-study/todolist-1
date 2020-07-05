<template>
  <span class="todo-count"
    >총 <strong>{{ count }}</strong> 개</span
  >
</template>

<script>
import { FILTER } from "../utils/contants";

export default {
  computed: {
    count() {      
      if (this.$store.state.todoFilter === FILTER.ALL) {
        return this.$store.getters.allItemLength;
      } else if (this.$store.state.todoFilter === FILTER.ACTIVE) {
        return this.$store.getters.actvieItemLength;
      }
      return this.$store.getters.completedItemLength;
    },
  },
};
</script>

<style></style>
