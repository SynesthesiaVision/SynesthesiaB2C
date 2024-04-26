<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;
  user-select: none;
}

:root {
  --rosaEscuro: #D96277;
  --rosaAlt: #CF5084;
  --rosaClaro: #F29580;
  --roxo: #A432A6;
  --rosaRoxeado: #BF4594;
  --azulClaro: #977EF2;
  --preto: #0D0D0D;
  --cinzaTxt: #3B3B3B;
}

#app {
  -webkit-font-smoothing: antialiased;
  background-color: #fcfcfc;
  color: #0D0D0D;
}

ul,
li,
a {
  list-style: none;
  text-decoration: none;
  color: var(--cinzaTxt);
  font-weight: 700;
}

a:hover {
  transition: 0.5s;
  color: var(--rosaEscuro)
}

h2 {
  font-size: 2em;
  color: var(--preto);
  user-select: none;
  text-align: center;
}

h3 {
  font-size: 1.5em;
  padding-bottom: 0.5em;
}

.inverse {
  order: 3;
}
</style>
