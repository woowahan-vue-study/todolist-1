<template>
  <span class="todo-count"
    >총 <strong>{{ selectedCount }}</strong> 개</span
  >
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedCount"])
  }
};
</script>
