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
import { GET_FILTER_TYPE } from "../store/gettersType.js";
import { UPDATE_TODO_ITEM_FILTER_TYPE } from "../store/mutationsType.js";

export default {
  props: {
    filterType: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({ selectedFilterType: GET_FILTER_TYPE }),
    isRightFilterCondition() {
      return this.selectedFilterType === this.filterType;
    }
  },
  methods: {
    changeState(filterType) {
      this.$store.commit(UPDATE_TODO_ITEM_FILTER_TYPE, filterType);
    }
  }
};
</script>
