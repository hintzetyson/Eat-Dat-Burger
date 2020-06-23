//Express Dependencies
var express = require("express");
const expressHandle = require('express-handlebars');

const PORT = process.env.PORT || 3000;

let app = express();

//Send content to app
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.engine('handlebars', expressHandle({ defaultLayout: 'main'}));
app.set("view engine", "handlebars");

//Grab the routes from the controller
const routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});