<template>
    <Navbar v-bind:username="this.username" v-bind:userid="this.userid"></Navbar>
    <div class="min-h-screen bg-gray-950 pt-10">
      <h1 class="text-3xl font-bold text-slate-200 text-center mx-auto">Tus Tareas</h1>
      <div class="grid grid-cols-3 w-2/3 mx-auto mt-10">
        <div v-for="task in this.tasks" class="relative bg-slate-300 py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
        <div class="flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-purple-900 left-4 -top-6">
            <!-- svg  -->
            <svg fill="#FFFFFF" class="h-8 w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 470.767 470.767" xml:space="preserve">
                <g>
                    <path d="M362.965,21.384H289.62L286.638,7.99C285.614,3.323,281.467,0,276.685,0h-82.618c-4.782,0-8.913,3.323-9.953,7.99
		l-2.967,13.394h-73.36c-26.835,0-48.654,21.827-48.654,48.662v352.06c0,26.835,21.819,48.662,48.654,48.662h255.179
		c26.835,0,48.67-21.827,48.67-48.662V70.046C411.635,43.211,389.8,21.384,362.965,21.384z M379.831,422.105
		c0,9.295-7.563,16.858-16.866,16.858H107.786c-9.287,0-16.85-7.563-16.85-16.858V70.046c0-9.295,7.563-16.857,16.85-16.857h66.294
		l-1.692,7.609c-0.684,3.02,0.062,6.188,1.988,8.596c1.94,2.415,4.876,3.82,7.965,3.82h106.082c3.091,0,6.026-1.405,7.951-3.82
		c1.942-2.415,2.687-5.575,2.004-8.596l-1.692-7.609h66.279c9.303,0,16.866,7.563,16.866,16.857V422.105z" />
                    <path d="M170.835,188.426h43.249l-10.279-7.019c-14.506-9.899-18.232-29.693-8.325-44.197c9.893-14.489,29.693-18.239,44.197-8.324
		l1.694,1.157v-12.136c0-7.866-6.383-14.248-14.242-14.248h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.271
		C156.595,182.045,162.978,188.426,170.835,188.426z" />
                    <path d="M303.256,110.313l-49.85,47.194l-22.704-15.49c-7.221-4.962-17.13-3.083-22.099,4.162
		c-4.954,7.251-3.09,17.144,4.178,22.098l33.28,22.727c2.718,1.864,5.839,2.772,8.961,2.772c3.96,0,7.888-1.474,10.933-4.356
		l59.167-56.014c6.382-6.033,6.645-16.104,0.62-22.479C319.686,104.552,309.637,104.28,303.256,110.313z" />
                    <path d="M170.835,297.669H214.1l-10.295-7.027c-14.506-9.901-18.232-29.693-8.325-44.197c9.893-14.498,29.693-18.248,44.197-8.325
		l1.694,1.158v-12.136c0-7.865-6.383-14.248-14.242-14.248h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.279
		C156.595,291.286,162.978,297.669,170.835,297.669z" />
                    <path d="M303.256,219.555l-49.85,47.186l-22.704-15.49c-7.221-4.97-17.13-3.098-22.099,4.162
		c-4.954,7.253-3.09,17.144,4.178,22.099l33.28,22.727c2.718,1.864,5.839,2.772,8.961,2.772c3.96,0,7.888-1.476,10.933-4.356
		l59.167-56.007c6.382-6.033,6.645-16.096,0.62-22.479C319.686,213.793,309.637,213.529,303.256,219.555z" />
                    <path d="M227.129,322.135h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.271c0,7.865,6.383,14.248,14.24,14.248h56.294
		c7.859,0,14.242-6.383,14.242-14.248v-56.271C241.371,328.518,234.988,322.135,227.129,322.135z" />
                </g>
            </svg>
        </div>
        <div class="mt-8">
            <p class="text-xl font-semibold my-2 text-stone-950">{{ task.name }}</p>
            <div class="flex space-x-2 text-stone-950 text-sm my-3">
                <!-- svg  -->
                <svg fill="#000000" class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM4,4H20V6H4ZM20,20H4V8H20ZM6,12a1,1,0,0,1,1-1H17a1,1,0,0,1,0,2H7A1,1,0,0,1,6,12Zm0,4a1,1,0,0,1,1-1h5a1,1,0,0,1,0,2H7A1,1,0,0,1,6,16Z" />
                </svg>
                <p>{{ task.description }}</p>
            </div>

            <div class="border-t-2"></div>

            <div class="flex justify-between">
                <div class="my-2">
                    <p class="font-semibold text-base mb-2 text-stone-950">Encargado:</p>
                    <div class="flex space-x-2">
                        <img class="object-center object-cover rounded-full w-6 h-6" src="../assets/user.png"
                            alt="photo">
                        <p class="text-stone-950">{{ task.username }}</p>
                    </div>
                </div>
                <div class="my-2">
                    <p class="font-semibold text-base mb-2 text-stone-950">Etiqueta</p>
                    <div class="text-base text-gray-400 font-semibold">
                        <p :style="{ backgroundColor: task.tagcolor }" class="rounded-xl text-black p-1 text-center">{{
                            task.tagname }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="border-t-2"></div>

            <div class="my-2">
                <p class="font-semibold text-center text-base mb-2 text-stone-950">Equipo: {{task.teamname}}</p>
            </div>
        </div>
    </div>
      </div>
  </div>
</template>
<script>
import Navbar  from './Navbar.vue';
    export default {
      components:{
        Navbar
      },
  data() {
    return {
      tasks: [],
      userid: this.$route.params.userid,
      username:''
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      console.log(this.$route.params)
      fetch(`http://localhost:8000/tasks/user/${this.userid}`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          this.tasks = data.data.tasks;
          console.log(data.data)
          this.username = data.data.username
        })
      // .catch(error => {
      //   console.error('Error fetching teams:', error);
      // });
    },
  }
};
</script>