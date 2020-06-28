<template>
  <ul class="filters">
    <li>
      <a class="all selected" data-value="all" @click="changeView">전체보기</a>
    </li>
    <li>
      <a class="active" data-value="active" @click="changeView">해야할 일</a>
    </li>
    <li>
      <a class="completed" data-value="completed" @click="changeView"
        >완료한 일</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoFilter",
  methods: {
    changeView(event) {
      this.changeSelected(event);
      this.$store.commit("CHANGE_VIEW", event.target);
    },
    changeSelected(event) {
      const $filters = event.target.closest("ul");
      $filters.querySelector(".selected").classList.toggle("selected");
      event.target.classList.toggle("selected");
    },
  },
};
</script>
