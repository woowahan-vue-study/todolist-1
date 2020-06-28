<template>
  <li :data-id="item.id" :class="{ completed: item.isCompleted }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="item.isCompleted"
        @change="completeTodo"
      />
      <label class="label">{{ item.content }}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input class="edit" :value="item.context" />
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
  },
  methods: {
    completeTodo() {
      this.item.isCompleted = !this.item.isCompleted;
    },
    deleteTodo() {
      this.$emit(`onDelete`, this.item.id);
    },
  },
};
</script>
