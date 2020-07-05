<template>
    <div class="main">
        <input class="toggle-all" type="checkbox">
        <ul id="todo-list" class="todo-list">
            <li v-for="(item, index) in items" :key="item.id"
                v-bind:class="{editing: item.isEditing, completed: !item.isEditing && item.isCompleted}"
                v-on:dblclick="switchEditMode(item)">
                <div class="view">
                    <input class="toggle" type="checkbox" v-bind:checked="item.isCompleted"
                           v-on:change="clickToggle(item)">
                    <label class="label">{{item.content}}</label>
                    <button class="destroy" v-on:click="deleteItem(item)"></button>
                </div>
                <input v-model="editInputs[index]" v-on:keyup.enter="editContent(item, index)" v-on:keyup.esc="cancelEdit(item, index)"
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
        editInputs: this.items.map(item => item.content)
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
      },
      clickToggle(item) {
        let newItem = {'_id': item._id, 'content': item.content, 'isCompleted': !item.isCompleted, 'isEditing': false};
        this.$emit('@switch', newItem)
      },
      editContent(item, index) {
        this.$emit('@switch', {
          '_id': item._id,
          'content': this.editInputs[index],
          'isCompleted': item.isCompleted,
          'isEditing': false
        })
      },
      cancelEdit(item, index) {
        this.$emit('@switch', {
          '_id': item._id,
          'content': item.content,
          'isCompleted': item.isCompleted,
          'isEditing': false
        })
        this.editInputs[index] = item.content
      },
      deleteItem(item) {
        this.$emit('@remove', item)
      }
    }
  }
</script>