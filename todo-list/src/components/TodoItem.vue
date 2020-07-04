<template>
    <li>
        <div class="view">
            <input class="toggle" type="checkbox">
            <label class="label">{{ item }}</label>
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
                type: String,
                require: true
            }
        }

    }
</script>