const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable");
const config = require("./config/database");

mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected to MongoDB"));

const app = express();

app.use(formidableMiddleware());

app.use(express.static(path.join(__dirname, "public")));

const pages = require("./routes/pages");

app.use("/pages", pages);

const port = 3000;
app.listen(port, () => console.log("Server running at " + port));