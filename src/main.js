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
import {
  requiresAuth,
  guestOnly
} from './guards/guards'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: Todos, name: 'todos', meta: { requiresAuth:true }},
  { path: '/todos/:id', component: Todos, name: 'todo-details', meta: { requiresAuth:true }},
  { path: '/add-todo', component: AddTodo, name: 'add-todo', meta: { requiresAuth:true }},
  { path: '/login', component: Login, name: 'login', meta:{ guestOnly:true } },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  Promise.resolve(to)
    .then(requiresAuth)
    .then(guestOnly)
    .then(() => {
      next()
    })
    .catch(redirect => {
      next(redirect)
    })
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable no-new */
