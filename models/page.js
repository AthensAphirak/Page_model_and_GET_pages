const mongoose = require("mongoose");

const PageSchema = mongoose.Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
    },
    content: {
        type: String,
    },
});

const Page = (module.exports = mongoose.model("Page", PageSchema));