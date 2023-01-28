//jshint esversion:6

const express = require("express");
const bodyParser= require("body-parser");
const app = express();

app.use(express.static("public"));
app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));
//render html in server -- home route
app.get("/", function (req, res){
	res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res){
	// res.sendFile(__dirname+"/homepage.html");
	console.log("thanks");
});

// render a particular line
app.get("/Delhi", function(req, res)
{ 
	res.send("Contact me at: angela@gmail.com");
});

// to get and post to a website
app.get("/contact", function(req, res)
{ 
	res.send("Contact me at: angela@gmail.com");
});



app.listen(3000, function(){

console.log("Server started on port 3000");

});