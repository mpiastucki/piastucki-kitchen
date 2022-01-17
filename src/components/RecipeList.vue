<template>
    <div id="recipe-list">
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">{{recipe.doc.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            "recipes":null
        }
    },
    mounted() {
        fetch("http://localhost:9000/api/all").then(response => response.json()).then(recipesArray => this.recipes=recipesArray).catch((err) => {console.log(err)})
    },
}
</script>