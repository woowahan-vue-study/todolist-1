<template>
  <li>
    <a
      v-bind:class="filter.class"
      v-bind:href="filter.link"
      v-on:click="changeFilter"
      >{{ filter.text }}</a
    >
  </li>
</template>

<script>
export default {
  props: ["filter"],
  methods: {
    changeFilter: function() {      
      this.$store.commit("CHANGE_VIEW", this.filter.id);
    },
  },
};
</script>

<style></style>
