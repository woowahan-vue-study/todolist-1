<template>
  <li v-bind:class="[classCompleted, classEdit]">
    <div>
      <input class="toggle" type="checkbox" v-on:click="toggleCompleted" />
      <label class="label" v-on:dblclick="onEdit">{{ todoItem.content }}</label>
      <button class="destroy" v-on:click="todoDelete"></button>
      <input
        class="edit"
        v-on:keyup.esc="cancelEditing"
        v-on:keyup.enter="onEditing"
        v-model="todoItem.content"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: ["todoItem"],
  data: function() {
    return {
      isEdit: false,
    };
  },
  computed: {
    classCompleted: function() {
      return this.todoItem.isCompleted ? "completed" : "";
    },
    classEdit: function() {
      return this.isEdit ? "editing" : "";
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
    onEdit: function() {
      this.isEdit = true;
    },
    cancelEditing: function() {
      this.isEdit = false;
    },
    onEditing: function() {
      this.isEdit = false;
    },
  },
};
</script>

<style></style>
