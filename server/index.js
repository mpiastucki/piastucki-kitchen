const express = require('express');
const app = express();
const port = 9000;
const db = require('./db')




app.get("/", (req, res) => {
    db.db.get('1').then(function (doc) {
        res.send(JSON.stringify(doc.name))
    })
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})