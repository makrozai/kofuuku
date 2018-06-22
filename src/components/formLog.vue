<template>
  <main>
    <div class="container o-floating z-depth-3 u-white u-padding__large">
      <div class="row u-no-margin__bottom">
        <form class="col s12" action="home.html">
          <div class="row u-no-margin__bottom">
            
            <div class="input-field col s12" v-if='formType == false'>
              <input class="validate" id="first_name" type="text"/>
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s12" v-if='formType == false'>
              <input class="validate" id="last_name" type="text"/>
              <label for="last_name">Last Name</label>
            </div>

            <div class="input-field col s12">
              <input class="validate" id="email" type="email"/>
              <label for="email">Email</label>
            </div>
            <div class="input-field col s12">
              <input class="validate" id="password" type="password"/>
              <label for="password">Password</label>
            </div>
            
            <div class="input-field col s12" v-if='formType == false'>
              <input class="validate" id="password_repeat" type="password"/>
              <label for="password_repeat">Password Repeat</label>
            </div>

            <div class="col s12">
              <div class="row u-margin__tb--small">
                <div v-bind:class="[formType ? ' col s6' : ' col s12']">
                  <input id="termine" type="checkbox"/>
                  <label for="termine" v-if='formType' >Remember Me</label>
                  <label for="termine" v-if='formType == false' >Acepto los <a href="#!">Términos y condiciones</a></label>

                </div>
                <div class="col s6 right-align" v-if='formType'><a href="forgot.html">¿Forgot Your Password?</a></div>
              </div>
            </div>
            <div class="input-field col s12">
              <input class="waves-effect waves-light btn btn-large c-button__form" type="submit" value="Registrar"/>
            </div>
            <div class="col s12">
              <p class="center-align u-padding__small">Puedes <a href="register.html">regístrarte </a>si no tienes cuenta.</p>
            </div>
            <div class="col s12 u-divider u-margin__tb--small" v-if='formType'>
              <div class="center-align u-margin__tb--small">Puedes entrar con:</div>
            </div>
            <div class="col s6" v-if='formType'><a class="waves-effect waves-light btn btn-large c-button__form u-blue" href="home.html">Facebook</a></div>
            <div class="col s6" v-if='formType'><a class="waves-effect waves-light btn btn-large c-button__form u-red" href="home.html">Google +</a></div>
          </div>
        </form>
      </div>
    </div>
  </main>

</template>

<script>
import { bus } from './../main.js'

export default {
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
