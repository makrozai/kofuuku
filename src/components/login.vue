<template>
  <div>
    <header class="o-banner u-purple center-align">
      <h1 class="o-banner__title u-text--white u-no-margin">Kofuuku</h1>
      <h2 class="o-banner__subtitle u-text--white u-no-margin">Welcome to Kofuuku</h2>
      <p class="o-banner__description u-text--white o-no-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </header>
    <main>
      <div class="container o-floating z-depth-3 u-white u-padding__large">
        <div class="row u-no-margin__bottom">
          <form class="col s12" action="home.html">
            <div class="row u-no-margin__bottom">
              <div class="input-field col s12">
                <input class="validate" id="email" type="email"/>
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <input class="validate" id="password" type="password"/>
                <label for="password">Password</label>
              </div>
              <div class="col s12">
                <div class="row u-margin__tb--small">
                  <div class="col s6">
                    <input id="termine" type="checkbox"/>
                    <label for="termine">Remember Me</label>
                  </div>
                  <div class="col s6 right-align"><a href="forgot.html">¿Forgot Your Password?</a></div>
                </div>
              </div>
              <div class="input-field col s12">
                <input class="waves-effect waves-light btn btn-large c-button__form" type="submit" value="Registrar"/>
              </div>
              <div class="col s12">
                <p class="center-align u-padding__small">Puedes <a href="register.html">regístrarte </a>si no tienes cuenta.</p>
              </div>
              <div class="col s12 u-divider u-margin__tb--small">
                <div class="center-align u-margin__tb--small">Puedes entrar con:</div>
              </div>
              <div class="col s6"><a class="waves-effect waves-light btn btn-large c-button__form u-blue" href="home.html">Facebook</a></div>
              <div class="col s6"><a class="waves-effect waves-light btn btn-large c-button__form u-red" href="home.html">Google +</a></div>
            </div>
          </form>
        </div>
      </div>
    </main>  
  </div>
</template>