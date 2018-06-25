<template>
  <div>
    <header class="o-banner u-purple o-banner--small"></header>
    <main>
      <div class="container o-floating o-floating--full">
        <div class="row">
          <div class="col s12 u-white z-depth-1">
            <div class="u-padding__small center-align">
              <h4>Tus Grupos</h4>
              <p>Con kofuuku podrás <a>crear grupos </a>y compartir noticias con ellos</p>
                <router-link 
                  class="waves-effect waves-light btn btn-large" 
                  to="/addTeam"
                  >
                    AGREGAR GRUPO
                </router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6 l3" v-for="team in teams">
            <cartTeam :team="team"></cartTeam>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import team from '../component/team.vue'
  export default{
    components: {
      'cartTeam':team,
    },
    data(){
      return{
        teams:[]
      }
    },
    methods:{
    },
    created(){
      this.$http.get('https://kofuuku-2a17e.firebaseio.com/teams.json')
      .then(answer => {
        return answer.json();
      })
      .then(answerJson => {
        for(let id in answerJson){
          this.teams.push(answerJson[id]);
        }
      })
    }
  }
</script>