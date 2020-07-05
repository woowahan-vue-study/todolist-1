<template>
    <div class="main">
        <input class="toggle-all" type="checkbox">
        <ul id="todo-list" class="todo-list">
            <li v-for="item in items" :key="item.id"
                v-bind:class="{editing: item.isEditing, completed: !item.isEditing && item.isCompleted}"
                v-on:dblclick="switchEditMode(item)">
                <div class="view">
                    <input class="toggle" type="checkbox" v-bind:checked="item.isCompleted"
                           v-on:change="clickToggle(item)">
                    <label class="label">{{item.content}}</label>
                    <button class="destroy" v-on:click="deleteItem(item)"></button>
                </div>
                <input v-model="editInput" v-on:keyup.enter="editContent(item)" v-on:keyup.esc="cancelEdit(item)"
                       class="edit" value="완료된 타이틀">
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    props: ['items'],
    data() {
      return {
        editInput: ''
      }
    },
    methods: {
      switchEditMode(item) {
        this.$emit('@switch', {
          '_id': item._id,
          'content': item.content,
          'isCompleted': item.isCompleted,
          'isEditing': true
        })
        this.editInput = item.content
      },
      clickToggle(item) {
        let newItem = {'_id': item._id, 'content': item.content, 'isCompleted': !item.isCompleted, 'isEditing': false};
        this.$emit('@switch', newItem)
      },
      editContent(item) {
        this.$emit('@switch', {
          '_id': item._id,
          'content': this.editInput,
          'isCompleted': item.isCompleted,
          'isEditing': false
        })
        this.editInput = ''
      },
      cancelEdit(item) {
        this.$emit('@switch', {
          '_id': item._id,
          'content': item.content,
          'isCompleted': item.isCompleted,
          'isEditing': false
        })
        this.editInput = ''
      },
      deleteItem(item) {
        this.$emit('@remove', item)
      }
    }
  }
</script>