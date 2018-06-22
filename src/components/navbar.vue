<template>
  <div class="navbar-fixed">
    <nav class="transparent o-nav">
      <div class="nav-wrapper"><a class="brand-logo o-nav__main" href="index.html">Kofuku</a><a class="button-collapse" href="#" data-activates="mobile-demo"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down o-nav__desktop">
          <li v-for="item of vnav"><a :href='item.link'>{{ item.name }}</a></li>
          <li ><a @click="configForm(true)">Entrar</a></li>
          <li ><a @click="configForm(false)">Registrar</a></li>
        </ul>
        <ul class="side-nav o-nav__movil" id="mobile-demo">
          <li v-for="item of vnav"><a :href='item.link'>{{ item.name }}</a></li>
          <li ><a @click="configForm(true)">Entrar</a></li>
          <li ><a @click="configForm(false)">Registrar</a></li>
        </ul>
      </div>
    </nav>
  </div>
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
  methods : {
    configForm(value){
      this.formType = value;
      //console.log(this.formType);
      bus.$emit('formType',this.formType)
    }
  }
}
</script>

<style lang="scss">
</style>
