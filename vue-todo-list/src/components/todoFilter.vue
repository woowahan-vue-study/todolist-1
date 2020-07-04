<template>
  <li>
    <a v-bind:class="filter.class" v-bind:href="filter.link">{{ filter.text }}</a>
  </li>
</template>

<script>
export default {
  props:["filter"]
};
</script>

<style></style>
