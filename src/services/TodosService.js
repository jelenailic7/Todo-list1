import axios from 'axios'

export default class TodosService {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api/'
  }


  getAll() {
    return axios.get('todos')
  }

  add (todo) {
    return axios.post('todos',todo)
  }

  remove (id) {
    return axios.delete(`todos/${id}`)
  }

  edit (todo) {
    return axios.put(`todos/${todo.id}`, todo)
  }
  get (id) {
    return axios.get(`todos/${id}`)
}

}

export const todosService = new TodosService()



