<template>
  <li
    v-show="show"
    :class="{ completed: item.isCompleted, editing: item.isEditing }"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="item.isCompleted"
        @change="completeTodo"
      />
      <label class="label" @dblclick="toggleEditingTodo">{{
        item.content
      }}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input
      class="edit"
      :value="item.content"
      @keyup.enter="editTodo"
      @keyup.esc="toggleEditingTodo"
    />
  </li>
</template>

<script>
import { FILTER } from "../utils/constants";

export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    setView(filter) {
      this.show = true;
      if (filter === FILTER.ACTIVE) {
        this.show = !this.item.isCompleted;
      } else if (filter === FILTER.COMPLETED) {
        this.show = this.item.isCompleted;
      }
    },
    completeTodo() {
      this.item.isCompleted = !this.item.isCompleted;
      this.$store.commit("COMPLETE_TODO", this.item._id);
      this.setView(this.filter);
    },
    deleteTodo() {
      this.$store.commit("DELETE_TODO", this.item._id);
    },
    toggleEditingTodo() {
      this.item.isEditing = !this.item.isEditing;
      this.$forceUpdate();
    },
    editTodo(event) {
      const content = event.target.value;
      if (!content) {
        this.toggleEditingTodo();
        return;
      }
      this.item.content = content;
      this.item.isEditing = !this.item.isEditing;
    },
  },
  watch: {
    filter: function (value) {
      this.setView(value);
    },
  },
};
</script>