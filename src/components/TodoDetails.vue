<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="todo">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ todo.title }} </li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> Priority:{{ todo.priority }}</li>       
        <li class="list-group-item">
                <b-form-checkbox id="checkbox1"
                                input type="checkbox"
                                v-model="todo.completed"
                                v-bind:true-value="1"
                                v-bind:false-value="0"
                                unchecked-value="false">
               Completed: {{todo.completed}}
                </b-form-checkbox>
        </li>           
        <li class="list-group-item">
          <button class="btn btn-danger btn-sm mr-2" v-on:click="deleteTodo(todo.id)">Delete</button>
           <button class="btn btn-primary btn-sm" @click="editTodo(todo.id)">Edit</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { todosService } from '../services/TodosService'
export default {
 
  props: ['todo'],

  data() {
    return {
    
    }
  },

  methods: {

      deleteTodo(id) {   
        todosService.remove(id)
            .then(()=> {
              this.$emit('todoDeleted', id)
            });  
       },
  
     editTodo(todo) {
         todosService.edit(todo)
            .then(()=> {
                this.$emit('todoEdited',todo)
            })
     }
  }
}
</script>