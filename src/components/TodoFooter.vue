<template>
    <div class="count-container">
        <span class="todo-count">총 <strong>{{selectedCount}}</strong> 개</span>
        <ul class="filters">
            <li>
                <a class="all" href="#/" v-on:click="changeState('all')"
                   v-bind:class="{selected : selectedState === 'all'}">전체보기</a>
            </li>
            <li>
                <a class="active" href="#/active" v-on:click="changeState('unCompleted')"
                   v-bind:class="{selected : selectedState === 'unCompleted'}">해야할 일</a>
            </li>
            <li>
                <a class="completed" href="#/completed" v-on:click="changeState('completed')"
                   v-bind:class="{selected : selectedState === 'completed'}">완료한 일</a>
            </li>
        </ul>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"

  export default {
    computed: {
      ...mapGetters(['selectedCount', 'selectedState'])
    },
    methods: {
      changeState(selectedState) {
        this.$store.commit('updateSelectedState', selectedState)
      }
    }
  }
</script>