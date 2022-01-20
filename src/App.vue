<template>
  <RecipeList/>
  <AddRecipeForm/>
</template>

<script>
import RecipeList from './components/RecipeList.vue'
import AddRecipeForm from './components/AddRecipeForm.vue'

export default {
  name: 'App',
  components: {
    RecipeList,
    AddRecipeForm
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
