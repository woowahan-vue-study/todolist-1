<template>
    <li v-bind:class="classCompleted">
      <div>
        <input class="toggle" type="checkbox" v-on:click="toggleCompleted" />
        <label class="label">{{ todoItem.content }}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" v-bind:value="todoItem.content" />
    </li>
</template>

<script>
export default {
  props: ["todoItem"],
  computed:{
      classCompleted:function(){
          return this.todoItem.isCompleted ? "completed" : ""
      }
  },
  methods: {
    toggleCompleted: function() {
        this.$store.commit("COMPLETE_TODO", this.todoItem._id);
    },
  },
};
</script>

<style></style>
