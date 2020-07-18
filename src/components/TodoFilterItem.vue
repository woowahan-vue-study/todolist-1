<template>
  <li>
    <a
      :class="(filter.name, { selected: filter.selected })"
      @click="changeView"
      >{{ filter.text }}</a
    >
  </li>
</template>

<script>
export default {
  name: "TodoFilterItem",
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeView() {
      this.changeSelected();
      this.$store.dispatch("CHANGE_VIEW", this.filter);
    },
    changeSelected() {},
  },
};
</script>
