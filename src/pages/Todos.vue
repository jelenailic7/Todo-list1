<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-6">
        <TodoList :todos="todos"/>
      </div>
      <div class="col-6">
        <TodoDetails :todo="routeTodo" @todoDeleted="deleteTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import TodoDetails from '../components/TodoDetails.vue'
import { todosService } from '../services/TodosService'
import AddTodo from'../pages/AddTodo.vue'


export default {
  components: {
     TodoList,
     TodoDetails,
     AddTodo
  },
  
  data() {
    return {
      todo: {},
      todos: []
    }
  },

  beforeRouteEnter (to, from, next) {
    todosService.getAll()
      .then((response) => {
          next((vm) => {
            vm.todos = response.data
          })
      })
  },

  methods: {
    deleteTodo (id) {
      let index = this.todos.findIndex(todo => todo.id === id)
      this.todos.splice(index, 1)
      }
    },

  computed: {
    routeTodo() {
      return this.todos.find(todo => todo.id == this.$route.params.id)
    }
  } 
}
</script>