const express = require("express");

const app = express();

const port = 3000;

const Sequelize = require('sequelize')


// const db = require("./util/database");

const sequelize = new Sequelize("mydb", "ronnie", "F1ghtwar", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const homeRoutes = require("./routes/home");

const manifestoRoutes = require("./routes/manifesto")

// dont forget to set express.static method so it can find the public folder
app.use(express.static('public'));

app.use(manifestoRoutes);

app.use(homeRoutes);

app.listen(port);
