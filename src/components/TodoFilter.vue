<template>
  <ul class="filters">
    <filter-item :filter-type="FilterType.ALL">
      전체보기
    </filter-item>
    <filter-item :filter-type="FilterType.ACTIVE">
      해야할 일
    </filter-item>
    <filter-item :filter-type="FilterType.COMPLETED">
      완료한 일
    </filter-item>
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
