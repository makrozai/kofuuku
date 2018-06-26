<template>
  <div>
    <header class="o-banner u-purple center-align">
      <h3 class="u-text--white">Regístrate en Kofuuku</h3>
    </header>
    <main>
      <div class="container o-floating z-depth-3 u-white u-padding__large">
        <div class="row u-no-margin__bottom">
          <form class="col s12" @submit.prevent="registerData">
            <div class="row u-no-margin__bottom">
              <div class="input-field col s12">
                <input :class="[!user.firstName ? 'invalid' : '']" id="first_name" type="text"
                  v-model="user.firstName"
                />
                <label for="first_name" >First Name</label>
              </div>
              <div class="input-field col s12">
                <input :class="[!user.lastName ? 'invalid' : '']" id="last_name" type="text"
                  v-model="user.lastName"
                />
                <label for="last_name">Last Name</label>
              </div>
              <div class="input-field col s12">
                <input :class="[!user.email ? 'invalid' : '']" id="email" type="email"
                  v-model="user.email"
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <input :class="[!user.password ? 'invalid' : '']" id="password" type="password"
                  v-model="user.password"
                />
                <label for="password">Password</label>
              </div>
              <div class="input-field col s12">
                <input :class="[!user.passwordRepeat ? 'invalid' : '']" id="password_repeat" type="password"
                  v-model="user.passwordRepeat"
                />
                <label for="password_repeat">Password Repeat</label>
              </div>
              <div class="col s12 u-margin__tb--small">
                <input id="termine" type="checkbox" 
                  value="accept"
                  v-model="user.terms"
                />
                <label for="termine">Acepto los <a>Términos y condiciones</a></label>
              </div>
              <div class="input-field col s12">
                <input class="waves-effect waves-light btn btn-large c-button__form" type="submit" value="Registrar"/>
              </div>
              <div class="col s12">
                <p class="center-align u-padding__small">Ya tengo cuenta. <a @click="returnPage">Volver al login.</a></p>
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
          firstName:null,
          lastName:null,
          email:null,
          password:null,
          passwordRepeat:null,
          terms:null
        }
      }
    },
    methods:{
      returnPage(){
        this.$router.push({ name:'login'})
      },
      confirmPassword(pass, repeat){
        if (pass == repeat) {
          return true;
        }
        return false;
      },
      confirmEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      addUser(newUser){
        this.$http.post('https://kofuuku-2a17e.firebaseio.com/users.json',newUser)
          .then(answer => console.log(answer))
      },
      registerData(){
        var validPass = this.confirmPassword(this.user.password, this.user.passwordRepeat);
        if (this.user.password && this.user.passwordRepeat || validPass) {
          if (this.user.firstName && this.user.lastName && this.confirmEmail(this.user.email) && this.user.terms) {
            var newUser={
              firstName:this.user.firstName.trim(),
              lastName: this.user.lastName.trim(),
              email:this.user.email.trim(),
              password:this.user.password.trim()
            };
            this.addUser(newUser);
          }
        }
      }
    }
  }
</script>