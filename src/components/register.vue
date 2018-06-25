<template>
  <div>
    <header class="o-banner u-purple center-align">
      <h3 class="u-text--white">Regístrate en Kofuuku</h3>
    </header>
    <main>
      <div class="container o-floating z-depth-3 u-white u-padding__large">
        <div class="row u-no-margin__bottom">
          <form class="col s12">
            <div class="row u-no-margin__bottom">
              <div class="input-field col s12">
                <input class="validate" id="first_name" type="text"
                  v-model="user.firstName"
                />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s12">
                <input class="validate" id="last_name" type="text"
                  v-model="user.lastName"
                />
                <label for="last_name">Last Name</label>
              </div>
              <div class="input-field col s12">
                <input class="validate" id="email" type="email"
                  v-model="user.email"
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <input class="validate" id="password" type="password"
                  v-model="user.password"
                />
                <label for="password">Password</label>
              </div>
              <div class="input-field col s12">
                <input class="validate" id="password_repeat" type="password"/>
                <label for="password_repeat">Password Repeat</label>
              </div>
              <div class="col s12 u-margin__tb--small">
                <input id="termine" type="checkbox"/>
                <label for="termine">Acepto los <a>Términos y condiciones</a></label>
              </div>
              <div class="input-field col s12">
                <input class="waves-effect waves-light btn btn-large c-button__form" type="submit" value="Registrar"/>
              </div>
              <div class="col s12">
                <p class="center-align u-padding__small">Ya tengo cuenta. <a>Volver al login.</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        user:{
          firstName:'',
          lastName:'',
          email:'',
          password:''
        }
      }
    }
  }
</script>