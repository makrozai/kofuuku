<template>
  <div>
    <header class="o-banner o-banner--small u-purple"></header>
    <main>
      <div class="container o-floating o-floating--large z-depth-3 u-white u-padding__large">
        <div class="row u-no-margin__bottom">
          <div class="col s12">
            <h4>Crea tu grupo</h4>
          </div>
          <form class="col s12">
            <div class="row u-no-margin__bottom">
              <div class="input-field col s12">
                <input class="validate" id="url" type="text"
                  v-model="team.name"
                />
                <label for="url">Titulo del Grupo</label>
              </div>
              <div class="input-field col s12">
                <textarea class="materialize-textarea" id="textarea1"
                  v-model="team.description"
                ></textarea>
                <label for="textarea1">Breve Descripcion</label>
              </div>
              <div class="col s12">
                <p class="label valign-wrapper">Url<i class="material-icons u-text--green u-margin__left--small tooltipped" data-position="top" data-delay="50" data-tooltip="Lorem ipsum dolor sit amet">new_releases</i></p>
              </div>
              <div class="input-field col s12 m5 u-disabled">
                <p class="center-align">https://kofuuku.isengard.xyz/team/</p>
              </div>
              <div class="input-field col s12 m7">
                <input class="validate" id="title" type="text"
                  v-model="team.url"
                />
              </div>
              <div class="input-field col s12">
                <button class="waves-effect waves-light btn btn-large c-button__form" 
                        type="submit" 
                        @click.prevent="addTeam">INVITAR Y CREAR GRUPO
                </button>
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
        team:{
          name: '',
          description: '',
          url: '',
          icon: 'all_inclusive',
          color: 'green'
        }
      }
    },
    methods:{
      addTeam(){
        this.team.name = this.team.name.trim();
        this.team.description = this.team.description.trim();
        this.team.url = this.team.url.trim();

        if (this.team.name != '') {
          this.$http.post('https://kofuuku-2a17e.firebaseio.com/teams.json',this.team)
          .then(answer => console.log(answer))
        }
      }
    }
  }
</script>