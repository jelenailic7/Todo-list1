<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/todos">Todo list</router-link>
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/todos">Todo list</router-link>
      <router-link class="nav-item nav-link" to="/login" v-if="!isAuthenticated">Login</router-link>
      <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>
    </div>
  </nav>
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
      }
    }
  }
</script>