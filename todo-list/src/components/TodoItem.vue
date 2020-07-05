<template>
    <li :class="{completed: item.completed}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model = "item.completed">
            <label class="label">{{ item.value }}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="새로운 타이틀">
    </li>


</template>

<script>

    export default {
        name: "TodoItem",
        props: {
            item: {
                type: Object,
                require: true
            },
            filter: {
                type: String,
                require: true
            }
        },


    }
</script>
