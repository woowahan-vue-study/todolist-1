<template>
  <ul id="todo-list" class="todo-list">
    <todo-item
      v-for="item in selectedItem"
      :key="item._id"
      v-bind:item="item"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["selectedItem"])
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.$store.dispatch("fetchItems");
    }
  }
};
</script>
