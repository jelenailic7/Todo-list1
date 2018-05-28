<template>
  <div>
    <b-navbar type="dark" variant="primary">
        <b-navbar-nav>
          <b-nav-item href="/todos" v-if="isAuthenticated">Todo list</b-nav-item>
          <b-nav-item href="/login" v-if="!isAuthenticated">Login</b-nav-item>
          <b-nav-item href="#" @click="logout" v-if="isAuthenticated">Logout</b-nav-item>
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