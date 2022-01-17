require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.REST_PORT;
const db = require('./db')




app.get("/api/all", (req, res) => {
    db.db.allDocs({include_docs:true}).then(function (allDocs) {
        res.status(200).send(JSON.stringify(allDocs.rows))
    }).catch(function(err){res.status(500);})
})

app.use(express.static("dist"))

app.get("/", (req, res) => {
    res.status(200)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})