<template>
  <li
    v-if="show"
    :data-id="item.id"
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
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    filter: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    completeTodo() {
      this.item.isCompleted = !this.item.isCompleted;
    },
    deleteTodo() {
      this.$store.commit("DELETE_TODO", this.item.id);
    },
    toggleEditingTodo() {
      this.item.isEditing = !this.item.isEditing;
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
      this.show = true;
      if (value === "active") {
        this.show = !this.item.isCompleted;
      } else if (value === "completed") {
        this.show = this.item.isCompleted;
      }
    },
  },
};
</script>
