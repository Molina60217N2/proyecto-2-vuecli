<template>
  <div v-if="$route.path == '/'">
    <Login></Login>
  </div>
  <router-view></router-view>
</template>

<script>
import Login from './Login.vue'
export default {
  name: 'App',
  components: {
    Login
  }
};
</script>
