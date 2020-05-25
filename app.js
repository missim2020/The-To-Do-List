const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
var today = new Date();

var options = {
weekday:"long",
day:"numeric",
month:"long",
};

var day = today.toLocaleDateString("en-US", options);

// auksciau esantis kodas yra naudojamas vietoj sito ilgo if statemento. (google: how to format a date in JavaScript?)
// var currentDay = today.getDay();
// var day = "";
//
// if (currentDay === 1 ) {
// day = "Monday"
// }else if (currentDay===2){
//   day = "Tuesday"
// }else if (currentDay===3){
//   day = "Wednesday"
// } else if (currentDay===4){
//   day = "Thursday"
// }else if (currentDay ===5){
//   day= "Friday"
// } else if (currentDay===6) {
//   day="Saturday"
// } else {
// day = "Sunday"
// }
res.render("list", {kindOfDay: day, newListItems: items});

  //res.send("Hello");
});

app.post("/", function(req, res){
var item = req.body.newItem;
items.push(item);
  res.redirect("/");
});


app.listen(3000,function(){
  console.log("server is working")
});
