<template>
  <li
    :class="{
      editing: isEditing,
      completed: !isEditing && item.isCompleted
    }"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="item.isCompleted"
        @change="clickToggle"
      />
      <label class="label" @dblclick="switchEditMode">
        {{ item.content }}
      </label>
      <button class="destroy" @click="deleteItem" />
    </div>
    <input
      v-model="editInput"
      class="edit"
      value="완료된 타이틀"
      @keyup.enter="editContent"
      @keyup.esc="cancelEdit"
    />
  </li>
</template>

<script>
import { REMOVE_TODO, TOGGLE_TODO } from "../store/actionType.js";
import { UPDATE_TODO_ITEM_IN_LIST } from "../store/mutationsType.js";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
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
    clickToggle() {
      this.$store.dispatch(TOGGLE_TODO, {
        ...this.item,
        isCompleted: !this.item.isCompleted
      });
    },
    editContent() {
      this.$store.commit(UPDATE_TODO_ITEM_IN_LIST, {
        ...this.item,
        content: this.editInput
      });
      this.switchEditMode();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editInput = this.item.content;
    },
    deleteItem() {
      this.$store.dispatch(REMOVE_TODO, this.item._id);
    }
  }
};
</script>
