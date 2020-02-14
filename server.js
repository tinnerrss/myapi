const express = require("express");
const app = express();
const db = require("./models");

app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("HOME");
})

//index
app.get("/boozes", (req, res) => {
    db.booze.findAll().then(function(boozes) {
        res.json(boozes);
    }).catch(err => {
        console.log(err);
        res.send("ALL ZI BOOZES")
    })
})

//create
app.post("/boozes", (req, res) => {
    db.booze.findOrCreate({
        where: {
            name: req.body.name
        },
        defaults: {
            type: req.body.type,
            ounces: req.body.ounces
        }
    }).then(function([booze, created]) {
        res.redirect(`/boozes/${booze.id}`);
    }).catch(err => {
        console.log(err);
        res.send("ERROR");
    })
})

//show
app.get("/boozes/:id", (req, res) => {
    db.booze.findOne({
        where: {
            name: req.params.name
        }
    }).then(function(booze) {
        res.json(booze);
    }).catch(err => console.log("error"))
    res.send("ERROR");
})

//udate
app.put("boozes/:id", (req, res) => {
    db.booze.update({
        name: "Titos Liter"
    }, {
        where: {
            id: 1
        }
    }).then(function(updated) {
        if(updated) {
            console.log("success!")
        }
    }).catch(err => console.log(err));
      res.send("UPDATE MY INVENTORY");
})

//destroy
app.put("/boozes/:id", (req, res) => {
    db.booze.destroy({
        where: {
            name: "McCallen year 10"
        }
    }).then(function(numDeleted) {
        console.log("byeeeee");
    }).catch(err => console.log(err));
    res.send("I've drunk em..");
})


app.listen(3000, () => console.log("YAASSSS IT'S LIVE!"));