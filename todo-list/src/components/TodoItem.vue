<template>
    <li :class="{completed: item.isCompleted, editing: item.isEditing}" v-if="item.isSelected === false">
        <div class="view">
            <input class="toggle" type="checkbox" @change="completeTodoItem">
            <label class="label" @dblclick="changeTodoItemState">{{ item.value }}</label>
            <button class="destroy" @click="deleteTodoItem(item.id)"></button>
        </div>
        <input class="edit" :value="item.value" @keyup.enter="editTodoItem" @keyup.esc="changeTodoItemState">
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
        methods: {
            completeTodoItem() {
              this.item.isCompleted = !this.item.isCompleted;
            },
            changeTodoItemState() {
                this.item.isEditing = !this.item.isEditing
            },
            deleteTodoItem() {
                this.$emit('onDelete',this.item.id)
            },
            editTodoItem(e) {
                const updatedTodoItem = e.target.value;
                if(!updatedTodoItem) {
                    this.changeTodoItemState()
                    return;
                }
                this.item.value = updatedTodoItem
                this.changeTodoItemState()

            }
        },
    }
</script>
