<template>
    <div class="min-h-screen flex items-center justify-center w-full bg-gray-950">
      <div class="bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Iniciar Sesión</h1>
        <div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Correo Electrónico</label>
            <input v-model="user.email" type="email">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contraseña</label>
            <input v-model="user.password" type="password">
          </div>
          <div class="flex items-center justify-between mb-4">
            <router-link :to="'/signin'" class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear cuenta</router-link>
          </div>
          <button v-on:click="login" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </div>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {'email': '', 'password': ''}
      }
    },
    methods: {
      login() {
        fetch('http://localhost:8000/login', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user),
          method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.code == 200) {
            console.log(data.data.userid);
            this.$router.push({ name: 'userteams', params: { id: data.data.userid, name:data.data.username } })
            
          } else {
            console.log('Fallo');
          }
        });
      }
    }
  }
  </script>
  