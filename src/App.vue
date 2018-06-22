<template>
  <div id="app">
    <v-navbar :vnav="vNavbar"></v-navbar>
    <v-banner></v-banner>
    <v-form></v-form>
  </div>
</template>

<script>
import knavbar from './components/navbar.vue'
import kbanner from './components/banner.vue'
import kform from './components/formLog.vue'
export default {
  components: {
    'v-navbar':knavbar,
    'v-banner': kbanner,
    'v-form':kform
  },
  data(){
    return{
      vNavbar:[
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
