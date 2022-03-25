require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const {sequelize, Recipe, Ingredient} = require('./db')

//helper function to collect incoming data from HTML form and insert into DB
async function addRecipeIngredients(formDataObj, Recipe, Ingredient){
    if (!formDataObj["recipe-name"]) {throw Error("No recipe provided")};

    const instructions = formDataObj["instructions"] || "";

    const newRecipe = await Recipe.create({recipe: formDataObj["recipe-name"], instructions: instructions});
    const newIngredient1 = formDataObj["ingredient1"] ?  await Ingredient.create({ingredient: formDataObj["ingredient1"]}) : null;
    const newIngredient2 = formDataObj["ingredient2"] ?  await Ingredient.create({ingredient: formDataObj["ingredient2"]}) : null;
    const newIngredient3 = formDataObj["ingredient3"] ?  await Ingredient.create({ingredient: formDataObj["ingredient3"]}) : null;

    addIngredientAssociation(newRecipe, newIngredient1);
    addIngredientAssociation(newRecipe, newIngredient2);
    addIngredientAssociation(newRecipe, newIngredient3);
}

//helper function to make Ingredient associations with Recipe models
function addIngredientAssociation(recipeModel, ingredientModel){
    if(!ingredientModel) {return;}

    recipeModel.addIngredient(ingredientModel);
    return;
}

app.get("/api/all", (req, res) => {
    Recipe.findAll().then(allRecipes => JSON.stringify(allRecipes)).then(json => res.status(200).send(json));
})

app.get("/api/threerecipes", (req, res) => {
    //TODO: refactor to use sequelize and get 3 randomized recipe names
    
})

app.use(express.urlencoded({ extended: true }))
app.post("/api/addrecipe", async (req, res) => {
    //TODO: refactor to use sequelize
    const body = req.body;

    await addRecipeIngredients(body, Recipe, Ingredient);
    res.redirect("/");
    
    //Recipe.create({recipe: body["recipe-name"], instructions: ""}).then(obj => res.redirect("/"))

})

app.use(express.static("dist"))

app.get("/", (req, res) => {
    res.status(200)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})