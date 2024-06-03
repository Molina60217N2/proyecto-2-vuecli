<template>
<h1>Edicion de equipo</h1>
<label>Nombre</label>
<input type="text" v-model="team.name" />
<label>Descripción del equipo</label>
<input type="text" v-model="team.description" />
<button v-on:click="editteam">Editar equipo</button>
</template>

<script>
export default {
    data(){
        return {
            team: {'id':'', 'name':'', 'description':''},
        }
    },
    created() {
        this.geteam()
    },
    methods: {
        geteam() {
            console.log('cargando equipo')
            fetch(`http://localhost:8000/team/${this.$route.params.teamid}/${this.$route.params.userid}`, {
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          let team = data.data.team[0]
          this.team.id = team.id
          this.team.name = team.name
          this.team.description = team.description
        })
        },
        editteam(){
            let info = {'teamid':this.team.id, 'name':this.team.name, 'description':this.team.description}
            fetch('http://localhost:8000/team/update', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.code == 200) {
            console.log(data);
            //volver a los equiposxd
            this.$router.go(-1)
            
          } else {
            console.log('Fallo');
          }
        });
        }
    }
}

</script>