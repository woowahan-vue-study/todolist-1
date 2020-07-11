<template>
  <ul id="todo-list" class="todo-list">
    <todo-item v-for="item in selectedItems" :key="item._id" :item="item" />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
import { FETCH_TODOS } from "../store/actionType.js";
import { GET_FILTERED_ITEMS } from "../store/gettersType.js";

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters({ selectedItems: GET_FILTERED_ITEMS })
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.$store.dispatch(FETCH_TODOS);
    }
  }
};
</script>
