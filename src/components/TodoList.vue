<template>
  <div class="list-group">
    <router-link
      class="list-group-item list-group-item-action"
      tag="button"
     :to="{ name: 'todo-details', params: { id: todo.id }}"
      exact-active-class="active"
      v-for="(todo, key) in todos"
      :key="key"
    >
      {{ todo.title }} 
    </router-link>
   </div>
</template>



<script>
export default {
    props:['todos']
}
</script>