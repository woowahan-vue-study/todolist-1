<template>
  <li v-bind:class="classCompleted">
    <div>
      <input class="toggle" type="checkbox" v-on:click="toggleCompleted" />
      <label class="label">{{ todoItem.content }}</label>
      <button class="destroy" v-on:click="todoDelete"></button>
    </div>
    <input class="edit" v-bind:value="todoItem.content" />
  </li>
</template>

<script>
export default {
  props: ["todoItem"],
  computed: {
    classCompleted: function() {
      return this.todoItem.isCompleted ? "completed" : "";
    },
  },
  methods: {
    toggleCompleted: function() {
      this.$store.commit("COMPLETE_TODO", this.todoItem._id);
    },
    todoDelete: function() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$store.commit("DELETE_TODO", this.todoItem._id);
      }
    },
  },
};
</script>

<style></style>
