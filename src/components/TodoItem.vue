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
      const updatedItem = {
        _id: this.item._id,
        content: this.item.content,
        isCompleted: !this.item.isCompleted
      };
      this.$store.dispatch("updateItem", updatedItem);
    },
    editContent() {
      const updatedItem = {
        _id: this.item._id,
        content: this.editInput,
        isCompleted: this.item.isCompleted
      };
      this.$store.dispatch("updateItem", updatedItem);
      this.switchEditMode();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editInput = this.item.content;
    },
    deleteItem() {
      this.$store.dispatch("removeItem", this.item._id);
    }
  }
};
</script>
