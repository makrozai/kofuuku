<template>
  <header class="o-banner u-purple center-align">
    <h1 v-if='formType' class="o-banner__title u-text--white u-no-margin">Kofuuku</h1>
    <h2 v-if='formType' class="o-banner__subtitle u-text--white u-no-margin">Welcome to Kofuuku</h2>
    <p v-if='formType' class="o-banner__description u-text--white o-no-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <h3  v-if='formType == false' class="u-text--white">Regístrate en Kofuuku</h3>
  </header>
</template>

<script>
import { bus } from './../main.js'
export default {
  props:['vnav'],
  data(){
    return{
      formType: true
    }
  },
  created(){
    bus.$on('formType',(value)=>{
      this.formType = value
    })
  }
}
</script>

<style lang="scss">
</style>
