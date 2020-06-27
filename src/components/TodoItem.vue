<template>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.isCompleted">
      <label class="label">{{ item.content }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" :value="item.context">
  </li>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>