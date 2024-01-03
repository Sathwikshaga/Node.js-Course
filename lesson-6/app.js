// import express from 'express';
const express = require("express");

// express app
const app = express();

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>");
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    // res.send("<p>About Page</p>");
    res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 page
app.use((req, res) => {       // position of this .use() method is important, it uses all the urls other than the ones used in the above three methods
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});
