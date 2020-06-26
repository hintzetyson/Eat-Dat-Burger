/* eslint-disable linebreak-style */
// Express Dependencies
const express = require('express');
const expressHandle = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();

// Send content to app
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine('handlebars', expressHandle({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Grab the routes from the controller
const routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
