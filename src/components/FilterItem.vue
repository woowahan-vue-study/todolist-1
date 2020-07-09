<template>
  <li>
    <a
      v-bind:href="filterType.link"
      v-on:click="changeState(filterType)"
      v-bind:class="[
        { selected: isRightFilterCondition },
        filterType.className
      ]"
    >
      <slot />
    </a>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["filterType"],
  computed: {
    ...mapGetters(["selectedFilterType"]),
    isRightFilterCondition() {
      return this.selectedFilterType === this.filterType;
    }
  },
  methods: {
    changeState(filterType) {
      this.$store.commit("updateFilterType", filterType);
    }
  }
};
</script>
