require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.REST_PORT;
const {db} = require('./db')




app.get("/api/all", (req, res) => {
    db.allDocs({include_docs:true}).then(function (allDocs) {
        res.status(200).send(JSON.stringify(allDocs.rows))
    }).catch(function(err){res.status(500);})
})

app.get("/api/threerecipes", (req, res) => {
    db.allDocs({include_docs:true}).then(function(alldocs) {
        const threeRecipes = [];
        while (threeRecipes.length < 3) {
            let recipe = alldocs.rows[Math.floor(Math.random() * alldocs.rows.length)];
            if(!threeRecipes.includes(recipe.id)) {
                threeRecipes.push(recipe.id);
            }
        }
        return threeRecipes;
    }).then(function(threeRecipes){res.status(200).send(JSON.stringify(threeRecipes))}).catch(function(err) {console.log(err)})
})

app.use(express.urlencoded({ extended: true }))
app.post("/api/addrecipe", (req, res) => {
    const body = req.body;
    const doc = {
        "_id": body["recipe-name"],
        "ingredient1": body["ingredient1"] ? body["ingredient1"] : null,
        "ingredient2": body["ingredient2"] ? body["ingredient2"] : null,
        "ingredient3": body["ingredient3"] ? body["ingredient3"] : null,
        "breakfast": body["breakfast"] ? body["breakfast"] : false,
        "lunch": body["lunch"] ? body["lunch"] : false,
        "dinner": body["dinner"] ? body["dinner"] : false,
    };

    db.put(doc);
    res.redirect(302, "/")

})

app.use(express.static("dist"))

app.get("/", (req, res) => {
    res.status(200)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})