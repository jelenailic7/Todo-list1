<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-nav>
          <router-link class="nav-item nav-link" to="/todos">Todo list</router-link>
          <router-link class="nav-item nav-link" to="/add-todo">Add Todo</router-link>     
          <router-link class="nav-item nav-link" to="/login"> Login </router-link>        
          <a class="nav-item nav-link" href="#" @click="logout">Logout </a>   
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
  import { authService } from '../services/AuthService'
  export default {
    data() {
      return {
        isAuthenticated: authService.isAuthenticated()
      }
    },
    methods: {
      logout() {
        authService.logout()
         this.isAuthenticated = false
          this.$router.push({ name: 'login' })
      }
    }
  }
</script>