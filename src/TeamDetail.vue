<template>
  <div class="min-h-screen bg-gray-950 pt-10 text-white">
    <h1 class="text-5xl text-center font-bold text-slate-200 capitalize">{{ name }} Team</h1>
    <p class="text-3xl text-center font-bold text-slate-200 mt-10">{{ description }}</p>
    <div>
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h1 class="font-bold text-3xl font-heading text-slate-200">
            Miembros del equipo
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div v-for="teamuser in teamusers" class="bg-none rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="./user.png" alt="photo">
            </div>
            <div class="text-center">
              <p class="text-xl text-slate-200 font-bold mb-2">{{ teamuser.username }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <h1 class="font-bold text-3xl font-heading text-slate-200 text-center">Tareas del equipo</h1>
      <div class="flex items-center justify-center mt-10 py-10 gap-20">
        <task v-for="task in tasks" v-bind:key="task.id" v-bind:id="task.id" v-bind:name="task.name"
          v-bind:description="task.description" v-bind:tagname="task.tagname" v-bind:tagid="task.tagid"
          v-bind:tagcolor="task.tagcolor" v-bind:teamid="task.teamid" v-bind:userid="task.userid"
          v-bind:username="task.username" v-bind:users="teamusers" v-bind:tags="tags" @delete="deleteTask" @edit="edittask"></task>
      </div>
    </div>
    <!-- si es admin mostrar las acciones -->
    <div v-if="isadmin">
      <h2 class="text-3xl text-center text-slate-200">Acciones de administrador</h2>
      <div>
        <h3 class="text-2xl mt-10 text-center text-slate-200">Agregar nueva tarea</h3>
        <div class="grid gap-6 mb-6 md:grid-cols-2 w-1/3 m-auto mt-10">
          <div>
            <label for="taskname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la
              tarea</label>
            <input type="text" id="taskname" v-model="taskadd.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />
          </div>
          <div>
            <label for="taskdescription"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción de la tarea</label>
            <input type="text" id="taskdescription" v-model="taskadd.description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />
          </div>
          <div>
            <label for="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etiqueta</label>
            <select id="tag" v-model="taskadd.tagid"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option :style="{ backgroundColor: tag.color }" v-for="tag in tags" v-bind:value="tag.id">{{ tag.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="users" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario
              responsable</label>
            <select id="tag" v-model="taskadd.userid"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option v-for="user in teamusers" v-bind:value="user.id">{{ user.username }}</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button v-on:click="addtask"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar
            Tarea</button>
        </div>
      </div>
      <!-- <div>
        <h4>Crear tarea</h4>
        <label>Nombre de la tarea</label>
        <input type="text" v-model="taskadd.name" />
        <label>Descripción de la tarea</label>
        <input type="text" v-model="taskadd.description" />
        <label>Etiqueta</label>
        <select v-model="taskadd.tagid">
          <option v-for="tag in tags" v-bind:value="tag.id">{{ tag.name }} || {{ tag.color }}</option>
        </select>
        <label>Usuario responsable</label>
        <select v-model="taskadd.userid">
          <option v-for="user in teamusers" v-bind:value="user.id">{{ user.username }}</option>
        </select>
        <button v-on:click="addtask">Agregar nueva tarea</button>
      </div> -->
      <h3 class="text-2xl mt-10 text-center text-slate-200">Agregar nuevo usuario al equipo</h3>
      <div class="grid gap-6 mb-6 md:grid-cols-2 w-1/3 m-auto mt-10">
        <div>
          <label for="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agregar Usuario al
            Equipo</label>
          <select id="tag" v-model="useridadd"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
          </select>
        </div>
        <div class="mt-6">
          <button v-on:click="adduser"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Seleccione
            un Usuario</button>
        </div>
      </div>
      <!-- <div>
        <select v-model="useridadd">
          <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
        </select>
        <button v-on:click="adduser">Agregar usuario</button>
      </div> -->
      <h3 class="text-2xl mt-10 text-center text-slate-200">Crear nueva etiqueta para el equipo</h3>
      <div class="grid gap-6 mb-6 md:grid-cols-2 w-1/3 m-auto mt-10">
        <div>
          <label for="tagname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la
            etiqueta</label>
          <input type="text" id="tagname" v-model="tagadd.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        </div>
        <div>
          <label for="tagcolor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color de la
            etiqueta</label>
          <input type="color" id="tagcolor" v-model="tagadd.color"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        </div>
        <div class="mt-6">
          <button v-on:click="addtag"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agregar
            etiqueta</button>
        </div>
      </div>
      <!-- <div>
        <h4>Crear etiqueta</h4>
        <label>Nombre de la etiqueta</label>
        <input type="text" v-model="tagadd.name" />
        <label>Color de la etiqueta</label>
        <input type="color" v-model="tagadd.color" />
        <button v-on:click="addtag">Agregar etiqueta</button>
      </div> -->
      <!-- <div>
        <h4>Etiquetas creadas</h4>
        <ul>
          <li v-for="tag in tags">{{ tag.id }} | |{{ tag.name }} | |{{ tag.color }}</li>
        </ul>
      </div> -->
      <h3 class="text-4xl mt-10 text-center text-red-500">Zona de peligro</h3>
      <div class="flex items-center justify-center mt-10 gap-10">
        <button v-on:click="deleteteam"
          class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Eliminar equipo
        </button>
        <!-- <button v-on:click="deleteteam">Eliminar equipo</button> -->
        <router-link :to="'/team/' + teamid + '/' + userid + '/edit'"
          class="inline-flex items-center px-4 py-2 bg-amber-300 hover:bg-amber-400 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          Editar equipo
        </router-link>
      </div>
    </div>
    <div class="flex items-center justify-center mt-20 pb-10">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        v-on:click="volver">Volver</button>
    </div>

  </div>
</template>
<script>
import Task from './Task.vue';

export default {
  components: {
    Task
  },

  data() {
    return {
      name: '',
      description: '',
      tasks: [],
      isadmin: false,
      teamid: '',
      userid: '',
      info: { 'teamid': '', 'userid': '' },
      teamusers: {},
      users: [],
      useridadd: 'Seleccionar un usuario',
      tags: [],
      tagadd: { 'name': '', 'color': '', 'teamid': '' },
      taskadd: { 'name': '', 'description': '', 'tagid': '', 'teamid': '', 'userid': '' }
    }
  },
  created() {
    this.fetchTeam();
    this.fetchusers();
    this.fetchtags();
    this.printinfo();
  },
  methods: {
    fetchTeam() {
      console.log('holaaaa');
      fetch(`http://localhost:8000/team/${this.$route.params.teamid}/${this.$route.params.userid}`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data.data);
          this.isadmin = data.data.isadmin
          this.tasks = data.data.tasks
          this.name = data.data.team[0].name;
          this.description = data.data.team[0].description
          this.teamid = data.data.team[0].id
          this.userid = this.$route.params.userid
          this.info.teamid = this.$route.params.teamid
          this.info.userid = this.$route.params.userid
          this.teamusers = data.data.users
          this.tagadd.teamid = data.data.team[0].id
          this.taskadd.teamid = data.data.team[0].id
          console.log(data.data)
        })
    },
    fetchtags() {
      fetch(`http://localhost:8000/team/${this.$route.params.teamid}/tag`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          this.tags = data.data.tags
        })
    },
    deleteteam() {
      fetch('http://localhost:8000/team/delete', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.info),
        method: 'POST'
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code == 200) {
            // console.log(data);
            //volver a los equiposxd
            this.$router.go(-1)

          } else {
            console.log('Fallo');
          }
        });
    },
    fetchusers() {
      fetch(`http://localhost:8000/team/users`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data.data.users);
          this.users = data.data.users
        })
    },
    adduser() {
      // this.$router.go(0)
      let useraddinfo = { 'userid': this.useridadd, 'teamid': this.teamid }
      // console.log(useraddinfo)
      // return
      fetch('http://localhost:8000/team/store/user', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(useraddinfo),
        method: 'POST'
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code == 200) {
            // console.log(data);
            //volver a los equiposxd
            this.fetchTeam();
            this.fetchusers();
            this.fetchtags();

          } else {
            console.log('Fallo');
          }
        });

    },
    addtag() {
      // return
      fetch('http://localhost:8000/team/tag/create', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.tagadd),
        method: 'POST'
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code == 200) {
            // console.log(data);
            this.tagadd = { 'name': '', 'color': '', 'teamid': '' }
            this.fetchTeam();
            this.fetchusers();
            this.fetchtags();
          } else {
            console.log('Fallo');
          }
        });
    },
    addtask() {
      //falta hacer este formulario
      fetch('http://localhost:8000/team/store/task', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.taskadd),
        method: 'POST'
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code == 200) {
            // console.log(data);
            // this.$router.go(0)
            this.taskadd = { 'name': '', 'description': '', 'tagid': '', 'teamid': '', 'userid': '' }
            this.fetchTeam();
            this.fetchusers();
            this.fetchtags();
          } else {
            console.log('Fallo');
          }
        });
    },
    volver() {
      this.$router.go(-1)
    },
    printinfo() {
      console.log(this.teamusers);
      console.log(this.tags);
    },
    deleteTask(task_id) {
            let deleteinfo = { 'taskid': task_id }
            // console.log(deleteinfo);
            // return;
            fetch('http://localhost:8000/task/delete', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deleteinfo),
                method: 'POST'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.code == 200) {
                        // console.log(data);
                        //volver a los equiposxd
                        // this.$router.go(0)
                        this.fetchTeam();

                    } else {
                        console.log('Fallo');
                    }
                });
        },
    edittask(editinfo){
      // console.log(info)
      fetch('http://localhost:8000/task/update', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editinfo),
                method: 'POST'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.code == 200) {
                        // console.log(data);
                        //volver a los equiposxd
                        this.fetchTeam();

                    } else {
                        console.log('Fallo');
                    }
                });
    }

  }
};
</script>