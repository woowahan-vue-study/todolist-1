<template>
    <div class="main">
        <input class="toggle-all" type="checkbox">
        <ul id="todo-list" class="todo-list">
            <li v-for="(item, index) in selectedItem" :key="item._id"
                v-bind:class="{editing: isEditing(index), completed: isCompleted(index, item)}"
                v-on:dblclick="switchEditMode(index)">
                <div class="view">
                    <input class="toggle" type="checkbox" v-bind:checked="item.isCompleted"
                           v-on:change="clickToggle(item)">
                    <label class="label">{{item.content}}</label>
                    <button class="destroy" v-on:click="deleteItem(item)"></button>
                </div>
                <input v-model="editInputs[index].content" v-on:keyup.enter="editContent(item, index)"
                       v-on:keyup.esc="cancelEdit(index)"
                       class="edit" value="완료된 타이틀">
            </li>
        </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        editInputs: [],
      }
    },
    watch: {
      selectedItem(newVal) {
        this.editInputs = newVal.map(item => ({content: item.content, isEditing: false}))
      }
    },
    mounted() {
      this.fetchItems()
    },
    computed: {
      ...mapGetters(['selectedItem'])
    },
    methods: {
      isEditing(index) {
        return this.editInputs[index].isEditing
      },
      isCompleted(index, item) {
        return !this.editInputs[index].isEditing && item.isCompleted
      },
      fetchItems() {
        this.$store.dispatch('fetchItems')
      },
      switchEditMode(index) {
        this.editInputs[index].isEditing = true
      },
      clickToggle(item) {
        const updatedItem = {
          '_id': item._id,
          'content': item.content,
          'isCompleted': !item.isCompleted,
        };
        this.$store.dispatch('updateItem', updatedItem)
      },
      editContent(item, index) {
        const updatedItem = {
          '_id': item._id,
          'content': this.editInputs[index].content,
          'isCompleted': item.isCompleted
        };
        this.$store.dispatch('updateItem', updatedItem)
      },
      cancelEdit(index) {
        this.editInputs[index].isEditing = false
      },
      deleteItem({_id}) {
        this.$store.dispatch('removeItem', _id)
      }
    }
  }
</script>