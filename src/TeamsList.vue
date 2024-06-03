<template>
    <div class="grid grid-cols-2 grid-flow-col w-1/2 m-auto justify-center mt-20 gap-20">
        <div>
            <h1 class="text-3xl font-bold text-slate-200">Equipos que administras</h1>
            <div v-for="teama in teamsadmin" v-bind:key="teama.id" class="max-w-7xl mx-auto mt-10">
                <div class="relative group">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 transition duration-1000">
                    </div>
                    <div
                        class="relative px-7 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <svg class="w-8 h-8" fill="#D6B11A" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 246.002 246.002"
                            xml:space="preserve">
                            <path d="M211.668,238.5c0,4.142-3.358,7.5-7.5,7.5h-163c-4.142,0-7.5-3.358-7.5-7.5v-16c0-4.142,3.358-7.5,7.5-7.5h163
	c4.142,0,7.5,3.358,7.5,7.5V238.5z M241.387,50.828c-3.422-1.427-7.379-0.136-9.302,3.038l-35.686,58.936L196.001,7.475
	c-0.015-3.787-2.851-6.97-6.611-7.419c-3.755-0.451-7.266,1.978-8.171,5.654l-26.941,109.427l-24.318-60.423
	c-1.144-2.839-3.897-4.699-6.958-4.699c-3.062,0-5.815,1.86-6.958,4.7l-24.32,60.443L64.783,5.769
	c-0.905-3.677-4.4-6.104-8.172-5.654c-3.76,0.449-6.596,3.632-6.61,7.419l-0.397,105.079L13.939,52.904
	c-1.906-3.192-5.862-4.505-9.297-3.088c-3.437,1.416-5.316,5.136-4.42,8.743l33,132.75c0.831,3.343,3.833,5.69,7.278,5.69h165
	c3.44,0,6.439-2.341,7.275-5.678l33-131.749C246.678,55.973,244.811,52.255,241.387,50.828z" />
                        </svg>
                        <div class="space-y-2">
                            <p class="text-slate-800 text-2xl">{{ teama.name }}</p>
                            <router-link :to="'/team/' + teama.id + '/' + userid"
                                class="block text-purple-700 group-hover:text-slate-800 transition duration-200">Ver
                                detalles del equipo</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h1 class="text-3xl font-bold text-slate-200">Equipos a los que pertenece</h1>
            <div v-for="teamb in teamsb" v-bind:key="teamb.id" class="max-w-7xl mx-auto mt-10">
                <div class="relative group">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 transition duration-1000">
                    </div>
                    <div
                        class="relative px-7 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">
                            </path>
                        </svg>
                        <div class="space-y-2">
                            <p class="text-slate-800 text-2xl">{{ teamb.name }}</p>
                            <router-link :to="'/team/' + teamb.id + '/' + userid"
                                class="block text-purple-700 group-hover:text-slate-800 transition duration-200">Ver
                                detalles del equipo</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <router-link v-bind:to="'/team/create/' + userid">Crear nuevo equipo</router-link>
    </div>
</template>
<script>
export default {
    props: ['teamsadmin', 'teamsb', 'userid']
}


</script>