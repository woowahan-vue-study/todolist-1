<template>
    <div class="count-container">
        <span class="todo-count">총 <strong>{{count}}</strong> 개</span>
        <ul class="filters">
            <li>
                <a class="all" href="#/" v-on:click="toggleAll"
                   v-bind:class="{selected : selectedType === 'all'}">전체보기</a>
            </li>
            <li>
                <a class="active" href="#/active" v-on:click="filterUnCompleted"
                   v-bind:class="{selected : selectedType === 'unCompleted'}">해야할 일</a>
            </li>
            <li>
                <a class="completed" href="#/completed" v-on:click="filterCompleted"
                   v-bind:class="{selected : selectedType === 'completed'}">완료한 일</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    props: ['count', 'selectedType'],
    methods: {
      filterCompleted() {
        this.$emit('@filter', 'completed')
      },
      filterUnCompleted() {
        this.$emit('@filter', 'unCompleted')
      },
      toggleAll() {
        this.$emit('@filter', 'all')
      }
    }
  }
</script>