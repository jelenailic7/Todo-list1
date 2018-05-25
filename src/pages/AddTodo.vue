<template>
  <div class="container mt-4">
      <div class="form-group row">
        <div class="col-8">
          <div class="input-group">
            <input
              id="title"
              placeholder="What need to be done?"
              name="title"
              type="text"
              class="form-control here"
              v-bind:title="todo.title">
          </div>
        </div>
      </div>
    <div class="form-group row">
        <div class="offset-4 col-8">
          <button class="btn btn-primary" v-on:click="addTodo(todo)">Add</button>
       </div>
    </div>
  </div>
</template>

<script>
import { todosService } from '../services/TodosService'

export default {
  data () {
    return {
      todo: {
        title: '',
        priority: 'Normal',
        completed:'False'
       
      }
    }
  },

   methods: { 
    addTodo (todo) {
      todosService.add(this.todo)
        .then(() => {
          this.$emit('todoAdded',this.todo)
        })
    }

   
  }
}
</script>

 