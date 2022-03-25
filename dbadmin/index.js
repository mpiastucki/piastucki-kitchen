require('dotenv').config();
const {sequelize, Recipe, Ingredient} = require('../server/db');

const dbadmin = {
    latestRecipe: null,
    latestIngredient: null,
    insertRecipe: async function(recipeName, instructions="") {
        const newRecipe = await Recipe.create({recipe: recipeName, instructions});
        console.log(`inserted: ${recipeName}`);
        return newRecipe;
    },
    insertIngredient: async function(ingredientName){
        const newIngredient = await Ingredient.create({ingredient: ingredientName});
        console.log(`inserted: ${ingredientName}`);
        return newIngredient;
    },
    insertRecipeIngredient: async function(recipe, ingredient) {
        const newRecipe = await this.insertRecipe(recipe);
        const newIngredient = await this.insertIngredient(ingredient);
        newRecipe.addIngredient(newIngredient);
        return;
    },
    findAllRecipe: async function(){
        const data = await Recipe.findAll();
        console.log(data);
        return data;
    },
    findAllIngredient: async function(){
        const data = await Ingredient.findAll();
        console.log(data);
        return data;
    },
    dropAllTables: async function(){
        await sequelize.drop();
        console.log("All tables dropped.");
    }
};

module.exports = dbadmin;