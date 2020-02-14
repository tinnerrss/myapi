// const db = require("./models");

// //create
// db.booze.create({
//     name: "Titos",
//     type: "Vodka",
//     ounces: 59
// }).then(function(data) {
//     console.log(data);
// }).catch(function(err) {
//     console.log(err)
// });

// //read
// db.booze.findOne({
//     where: {
//         id: 1
//     }
// }).then(function(booze) {
//     console.lof("found youuu");
// }).catch(err => console.log(err));

// //find or create
// db.booze.findOrCreate({
//     where: {
//         name: "Jose Cuervo"
//     },
//     defaults: {
//         type: "Tequila",
//         ounces: 28
//     }
// }).then(function([booze, created]) {
//     if (created) {
//         console.log("i made it");
//     } else {
//         console.log("i found it");
//     }
// }).catch(err => console.log(err));

// //read all
// db.booze.findAll().then(function(users) {
//     boozes.forEach(booze => console.log(booze.name));
// })

// //update
// db.booze.update({
//     name: "Titos1",
// }, {
//     where: {
//         id: 1
//     }
// }).then(function(updated) {
//     if (updated) {
//         console.log("successfully updated");
//     }
// }).catch(err => console.log(err));

// //delete
// db.booze.destroy({
//     where: {
//         name: "Titos"
//     }
// }).then(function(numDeleted) {
//     console.log(numDeleted);
// }).catch(err => console.log(err));