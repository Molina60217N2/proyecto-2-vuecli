<template>
  <div v-if="$route.path == '/'">
    <Login @setdata="setdata"></Login>
  </div>

  <router-view></router-view>
</template>

<script>
import Login from './components/Login.vue'
export default {
  name: 'App',
  data(){
    return {
      username:'',
      userid:'',
    }
  },
  components: {
    Login
  }, 
  methods: {
    setdata(username, userid) {
      this.username = username;
      this.userid = userid;
      console.log(this.username + this.userid)
    }
  }
};
</script>
