<template>
  <ul class="filters">
    <filter-item
      v-for="filterType of FilterType"
      :key="filterType.className"
      :filter-type="filterType"
    />
  </ul>
</template>

<script>
import { FilterType } from "../util/constant.js";
import FilterItem from "./FilterItem.vue";

export default {
  components: {
    FilterItem
  },
  data() {
    return {
      FilterType
    };
  }
};
</script>
