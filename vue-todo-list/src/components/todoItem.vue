<template>
  <div>
    <li>
      <div v-bind:class="{completed: todoItem.isCompleted}">
        <input class="toggle" type="checkbox" />
        <label class="label">{{todoItem.content}}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" v-bind:value="todoItem.content"/>
    </li>
  </div>
</template>

<script>
export default {
  props: ["todoItem"],
};
</script>

<style></style>
