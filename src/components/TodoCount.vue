<template>
    <div class="count-container">
        <span class="todo-count">
            총
            <strong>{{ count }}</strong> 개
        </span>
        <ul class="filters">
            <todo-filter v-for="filter in filters" :key="filter.className" :filter="filter" />
        </ul>
    </div>
</template>

<script>
import TodoFilter from './TodoFilter.vue';
import { FilterType } from '../util/constants.js';

export default {
    data() {
        return {
            filters: FilterType,
        };
    },
    components: {
        TodoFilter,
    },
    computed: {
        count() {
            return this.$store.getters.filteredCount;
        },
    },
};
</script>
