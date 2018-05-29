<template>
 <form @submit.prevent="onSubmit">
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
              v-model="todo.title"
              >
          </div>
         <div class="input-group">     
            <b-form-select v-model="todo.priority" :options="options" class="mb-3" />
          </div>
          <div class="input-group">Completed 
            <b-form-checkbox id="checkbox"
                  input type="checkbox"
                  v-model="todo.completed"
                  v-bind:true-value="1"
                  v-bind:false-value="0"
                 >
                {{todo.completed}}
                </b-form-checkbox>
          </div>
        </div>
      </div>
    <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit"  class="btn btn-primary">Add</button>
       </div>
    </div>
  </div>
 </form>
</template>

<script>
import { todosService } from '../services/TodosService'

export default {
name:('add-todo'),
  data () {
    return {
      todo: {
        title: '',
        priority:'',
        completed:''    
      },
        options: [
        { value: 'low', text: 'low' },
        { value: 'normal', text: 'normal' },
        { value: 'high', text: 'high' }
        ]
    }
  },  
  validationConfig: {
    validationRules: {
      email: [ 'required', 'email' ]
    }
  },

 created() {
    if(this.$route.params.id) {
      todosService.get(this.$route.params.id)
        .then((response)=> {
          this.todo = response.data
        })
    }
  },

  methods: {
    onSubmit () {
      this.$route.params.id ? this.editTodo() : this.addTodo()
    },

    editTodo() {
      todosService.edit(this.todo)
       .then(()=> {
         this.$router.push('/todos')
       })  
    },

    addTodo() {
      todosService.add(this.todo)
      .then(()=> {
        this.$router.push('/todos')
      })
    }
  }
}
    

</script>

 