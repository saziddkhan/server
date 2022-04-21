const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(""
, { useNewUrlParser: true, useUnifiedTopology: true });

const notesSchema = {
    title: String,
    content: String
}
const note = mongoose.model("note", notesSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const note1 = new note({
        title: req.body.title,
        content: req.body.content
    });
    note1.save();
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})