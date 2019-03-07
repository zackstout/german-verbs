const express = require("express");
const app = express();
const fs = require('fs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');

});

app.get("/verbs", (req, res) => {
    console.log('hi there');
    let obj;
    fs.readFile('verbs.json', 'utf8', function (err, data) {
        if (err) console.error(err);

        obj = JSON.parse(data);
        res.send(obj);
    });
});

app.listen(3000, () => {
    console.log("thx for listening on 3000");
});