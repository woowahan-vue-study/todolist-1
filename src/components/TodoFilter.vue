<template>
    <li>
        <a :class="[filter.className, { selected }]" @click="changeFilter">{{ filter.content }}</a>
    </li>
</template>

<script>
export default {
    props: {
        filter: Object,
    },
    computed: {
        selected() {
            return this.filter === this.$store.state.filter;
        },
    },
    methods: {
        changeFilter() {
            this.$store.commit('CHANGE_FILTER', this.filter);
        },
    },
};
</script>
