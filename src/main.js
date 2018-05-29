import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Todos from './pages/Todos.vue'
import TodoDetails  from './components/TodoDetails.vue'
import Login from './pages/Login.vue'
import MyDirectives from './plugins/MyDirectives'
import AddTodo from './pages/AddTodo.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: Todos, name: 'todos'},
  { path: '/todos/:id', component: Todos, name: 'todo-details'},
  { path: '/add-todo', component: AddTodo, name: 'add-todo' },
  { path: '/login', component: Login, name: 'login' },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable no-new */
