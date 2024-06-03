<template>
    <h1>
        Vista para la creación del equipo
    </h1>
    <div>
        <div>
            <label for="name">Nombre</label>
            <input v-model="team.name" type="text"/>
        </div>
        <div>
            <label for="description">Descripcion</label>
            <input v-model="team.description" type="text"/>
        </div>
        <button v-on:click="createteam">Crear equipo</button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            team: {'name':'', 'description':'', 'userid': this.$route.params.userid }
        }
    },
    methods: {
        //create team listo
        createteam() {
        fetch('http://localhost:8000/team/create', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.team),
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