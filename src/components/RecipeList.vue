<template>
    <div id="recipe-list">
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">{{recipe.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            "recipes":[{name:"curry rice", id:"1"}]
        }
    },
}
</script>