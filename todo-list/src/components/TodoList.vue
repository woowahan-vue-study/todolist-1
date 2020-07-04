<template>
    <div class="main">
        <input class="toggle-all" type="checkbox">
        <ul id="todo-list" class="todo-list">
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label class="label">새로운 타이틀</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="새로운 타이틀">
            </li>
            <li class="editing">
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label class="label">완료된 타이틀</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="완료된 타이틀">
            </li>
            <li class="completed">
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label class="label">완료된 타이틀</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="완료된 타이틀">
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "TodoList",
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>