const express = require('express');
const app = express();
const port = 9000;
const pouchdb = require('pouchdb')
const db = new pouchdb('recipes-db')

app.get("/", (req, res) => {
    db.get('1').then(function (doc) {
        res.send(JSON.stringify(doc))
    })
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})