require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const {sequelize, Recipe, Ingredient} = require('./db')



app.get("/api/all", (req, res) => {
    //TODO: refactor to use sequelize
    Recipe.findAll().then(allRecipes => JSON.stringify(allRecipes)).then(json => res.status(200).send(json));
})

app.get("/api/threerecipes", (req, res) => {
    //TODO: refactor to use sequelize
    
})

app.use(express.urlencoded({ extended: true }))
app.post("/api/addrecipe", (req, res) => {
    //TODO: refactor to use sequelize

})

app.use(express.static("dist"))

app.get("/", (req, res) => {
    res.status(200)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})