require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db')


app.get('/', (req, res) => {
    res.send("use '/api/all' URL to retrieve recipes")
})

app.get("/api/all", (req, res) => {
    db.db.allDocs({include_docs:true}).then(function (allDocs) {
        res.send(JSON.stringify(allDocs))
    }).catch(function(err){res.status(500);})
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})