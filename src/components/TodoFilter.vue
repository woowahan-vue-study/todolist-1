<template>
  <ul class="filters">
    <li>
      <a class="all selected" data-value="all" @click="selectFilter"
        >전체보기</a
      >
    </li>
    <li>
      <a class="active" data-value="active" @click="selectFilter">해야할 일</a>
    </li>
    <li>
      <a class="completed" data-value="completed" @click="selectFilter"
        >완료한 일</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoFilter",
  props: {
    filter: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectFilter(event) {
      const $filters = event.target.closest("ul");
      $filters.querySelector(".selected").classList.toggle("selected");
      event.target.classList.toggle("selected");
      this.$emit("onFilter", event.target.dataset.value);
    },
  },
};
</script>
