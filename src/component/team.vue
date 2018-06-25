<template>
  <div class="o-teamcard u-margin__tb--medium u-padding__tb--medium center-align z-depth-1">
    <div class="o-teamcard__information u-padding__lr--small">
      <div class="c-button__circle"><i class="material-icons">{{ team.icon }}</i></div>
      <h5 class="o-teamcard__name">{{ team.name }}</h5>
      <p class="o-teamcard__state">To visit</p>
      <p>{{ team.description }}</p>
    </div>
    <div class="o-teamcard__buttons u-padding__top--medium">
      <a class="waves-effect waves-light btn c-button__reverse u-padding__lr--small u-margin__right--small">Entrar</a>
      <a class="waves-effect waves-light btn c-button__reverse--grey u-padding__lr--small">Visitar</a>
    </div>
  </div>
</template>
<script>
  export default{
    props:['team']
  }
</script>