<template>
  <!-- falta el boton para hacer equipos nuevos y estilizar la vista de editar equipo -->
  <div class="min-h-screen bg-gray-950 pt-10">
    <h1 class="text-5xl text-center font-bold text-slate-200">Equipos de {{ username }}</h1>
    <!-- <button v-on:click="showparams">Ver params</button> -->
    <TeamsList v-bind:teamsadmin="teams.teamsadmin" v-bind:teamsb="teams.teamsb" v-bind:userid="userid">
    </TeamsList>
    <h3 class="text-2xl mt-10 text-center text-slate-200">Crear un nuevo equipo</h3>
    <div class="grid gap-6 md:grid-cols-2 w-1/3 m-auto mt-10">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input v-model="teamadd.name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
            <input v-model="teamadd.description" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <button class="col-span-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" v-on:click="createteam">Crear equipo</button>
    </div>
  </div>
</template>

<script>
import TeamsList from './TeamsList.vue';
export default {
  components: {
    TeamsList
  },
  data() {
    return {
      teams: [],
      userid: this.$route.params.id,
      username: this.$route.params.name,
      teamadd: {'name':'', 'description':'', 'userid':''}
    };
  },
  created() {
    this.fetchTeams();
  },
  methods: {
    fetchTeams() {
      console.log(this.$route.params)
      fetch(`http://localhost:8000/teams/${this.$route.params.id}`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          this.teams = data.data;
        })
      // .catch(error => {
      //   console.error('Error fetching teams:', error);
      // });
    },
    createteam() {
      this.teamadd.userid = this.userid;
        fetch('http://localhost:8000/team/create', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.teamadd),
          method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.code == 200) {
            console.log(data);
            this.teamadd.name = '';
            this.teamadd.description = '';
            this.fetchTeams();
            
          } else {
            console.log('Fallo');
          }
        });
      }
  }
};
</script>