var express =require("express");

var PORT = express.env.PORT || 8080;

var app = express();

// Server static content for app from public folder
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import route and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server listen
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});