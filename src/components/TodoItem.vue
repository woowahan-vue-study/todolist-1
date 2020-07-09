<template>
  <li
    v-bind:class="{
      editing: isEditing,
      completed: !isEditing && item.isCompleted
    }"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        v-bind:checked="item.isCompleted"
        v-on:change="clickToggle(item)"
      />
      <label class="label" v-on:dblclick="switchEditMode()">{{
        item.content
      }}</label>
      <button class="destroy" v-on:click="deleteItem(item)" />
    </div>
    <input
      v-model="editInput"
      v-on:keyup.enter="editContent(item)"
      v-on:keyup.esc="cancelEdit(item)"
      class="edit"
      value="완료된 타이틀"
    />
  </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      editInput: this.item.content,
      isEditing: false
    };
  },
  methods: {
    switchEditMode() {
      this.isEditing = !this.isEditing;
    },
    clickToggle(item) {
      const updatedItem = {
        _id: item._id,
        content: item.content,
        isCompleted: !item.isCompleted
      };
      this.$store.dispatch("updateItem", updatedItem);
    },
    editContent(item) {
      const updatedItem = {
        _id: item._id,
        content: this.editInput,
        isCompleted: item.isCompleted
      };
      this.$store.dispatch("updateItem", updatedItem);
      this.switchEditMode();
    },
    cancelEdit(item) {
      this.isEditing = false;
      this.editInput = item.content;
    },
    deleteItem({ _id }) {
      this.$store.dispatch("removeItem", _id);
    }
  }
};
</script>
