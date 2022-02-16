<template>
    <div id="recipe-list">
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">{{recipe.doc["_id"]}}</li>
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
        fetch("/api/all").then(response => response.json()).then(recipesArray => this.recipes=recipesArray).catch((err) => {console.log(err)})
    },
}
</script>