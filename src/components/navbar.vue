<template>
  <div class="navbar-fixed">
    <nav class="transparent o-nav">
      <div class="nav-wrapper"><a class="brand-logo o-nav__main" href="index.html">Kofuku</a><a class="button-collapse" href="#" data-activates="mobile-demo"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down o-nav__desktop">
          <router-link 
              v-for="item of vnav" 
              tag="li" 
              :to="item.link" 
              active-class="active" exact
          >
            <a>{{ item.name }}</a>
          </router-link>
        </ul>
        <ul class="side-nav o-nav__movil" id="mobile-demo">
          <router-link 
              v-for="item of vnav" 
              tag="li" 
              :to="item.link" 
              active-class="active" exact
          >
            <a>{{ item.name }}</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  props:['vnav'],
  data(){
    return{
      formType: true
    }
  },
  methods : {
  }
}
</script>

<style lang="scss">
</style>
