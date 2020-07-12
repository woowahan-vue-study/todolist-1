<template>
  <!--  <input class="toggle-all" type="checkbox" />-->
  <ul id="todo-list" class="todo-list">
    <li
      v-for="(item, index) in filteredTodoItems"
      :class="{ completed: item.isCompleted, editing: item.isEditing }"
      :key="index"
      @dblclick="toggleEditingById(item.id)"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          :checked="item.isCompleted"
          @click="toggleCompletedById(item.id)"
        />
        <label class="label">{{ item.title }}</label>
        <button class="destroy" @click="deleteById(item.id)"></button>
      </div>
      <input
        class="edit"
        v-model="item.titleToEdit"
        @keyup.enter="editById(item.id, item.titleToEdit)"
        @keyup.esc="cancelEditingById(item.id)"
      />
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TodoList",
  methods: {
    ...mapMutations([
      "toggleEditingById",
      "toggleCompletedById",
      "deleteById",
      "editById",
      "cancelEditingById",
    ]),
  },
  computed: {
    ...mapGetters(["filteredTodoItems"]),
  },
};
</script>
