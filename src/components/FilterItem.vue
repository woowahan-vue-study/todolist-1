<template>
  <li>
    <a
      :href="filterType.link"
      :class="[{ selected: isRightFilterCondition }, filterType.className]"
      @click="changeState(filterType)"
    >
      {{ filterType.text }}
    </a>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    filterType: {
      type: Object,
      required: true
    }
  },
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
