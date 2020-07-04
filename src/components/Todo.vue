<template>
  <li :class="status">
    <div class="view">
      <input class="toggle" type="checkbox" @click="toggleStatus" />
      <label class="label">{{ title }}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input class="edit" :value="title" />
  </li>
</template>

<script>
export default {
  props: ["id", "title", "status"],
  methods: {
    toggleStatus() {
      this.$emit("toggleStatus", this.id);
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.id);
    },
  },
};
</script>
