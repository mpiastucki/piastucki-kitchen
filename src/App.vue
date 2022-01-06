<template>
  <RecipeList/>
</template>

<script>
import RecipeList from './components/RecipeList.vue'

export default {
  name: 'App',
  components: {
    RecipeList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
