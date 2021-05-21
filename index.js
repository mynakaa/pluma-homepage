// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "6969";

/**
 *  App Configuration
 */
app.engine('pug', require('pug').__express)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Homepage" });
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});