// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

var userName1 = process.env.USERNAME1; //tierno
var userPass1 = process.env.PASSWORD1;

var userName2 = process.env.USERNAME2; //acone
var userPass2 = process.env.PASSWORD2;

var userName3 = process.env.USERNAME3; //palladino
var userPass3 = process.env.PASSWORD3;

var userName4 = process.env.USERNAME4; // battagliese
var userPass4 = process.env.PASSWORD4;

var userName5 = process.env.USERNAME5; // borrelli
var userPass5 = process.env.PASSWORD5;

var userName6 = process.env.USERNAME6; // ciardi
var userPass6 = process.env.PASSWORD6;
var userName7 = process.env.USERNAME7; // ricci
var userPass7 = process.env.PASSWORD7;

// 1/3 aggiungi queste due righe con numero superiore per aggiungere alunno

/*
1. aggiungi
var userName6 = process.env.USERNAME6; // ciardi
var userPass6 = process.env.PASSWORD6;
2. poi..

*/

var basicAuth = require("basic-auth");
let name = "";
app.use(function (request, response, next) {
  let user = basicAuth(request);
  console.log(user);

  if (
    !user ||
    ((user.name !== userName1 || user.pass !== userPass1) &&
      (user.name !== userName2 || user.pass !== userPass2) &&
      (user.name !== userName3 || user.pass !== userPass3) &&
      (user.name !== userName4 || user.pass !== userPass4)
    &&      (user.name !== userName5 || user.pass !== userPass5)
    // &&      (user.name !== userName6 || user.pass !== userPass6) 
    // &&      (user.name !== userName7 || user.pass !== userPass7)
    ))
  {
    response.set("WWW-Authenticate", 'Basic realm="example"');
    return response.status(401).send();
  }

  name = user.name;

  return next();
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
// DIFFERENT PAGES FOR EACH NAME

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/"+name+".html");
  // response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
