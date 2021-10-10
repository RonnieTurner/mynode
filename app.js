const express = require("express");

const app = express();

const port = 3000;

const homeRoutes = require("./routes/home");

const manifestoRoutes = require("./routes/manifesto")

// dont forget to set express.static method so it can find the public folder
app.use(express.static('public'));

app.use(manifestoRoutes);

app.use(homeRoutes);

app.listen(port);
