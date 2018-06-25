<template>
  <div>
    <v-navbar :vnav="vNavbar"></v-navbar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import knavbar from './components/navbar.vue'
export default {
  components: {
    'v-navbar':knavbar,
  },
  data(){
    return{
      vNavbar:[
        {
          name: 'Grupos totales',
          link: '/teams'
        },
        {
          name: 'Agregar articulo',
          link: '/addArticle'
        },
        {
          name: 'Crear grupo',
          link: '/addTeam'
        },
        {
          name: 'Login',
          link: '/login'
        },
        {
          name: 'register',
          link: '/register'
        }
      ],
      vNavbarAdmin:[
        {
          name: 'Inicio',
          link: '#head'
        },
        {
          name: 'Sobre kofuuku',
          link: '#main'
        },
        {
          name: '¿Comó funciona?',
          link: '#use'
        },
        {
          name: 'Caracteristicas',
          link: '#characteristics'
        }
      ]

    }
  }
}
</script>

<style lang="scss">
</style>
