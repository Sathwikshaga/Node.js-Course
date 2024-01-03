// import express from 'express';
const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

//listen for requests
app.listen(3000);

// register view engine
app.set("view engine", "ejs");
// app.set("views", "randomViewsFolderName") // if the views files are not in the file named views
app.set("views", "./lesson-7/views");

app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>");
    // res.sendFile("./views/index.html", { root: __dirname });
    const blogs = [
        {
            title: "Yoshi finds eggs",
            snippet: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            title: "Mario finds stars",
            snippet: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            title: "How to defeat bowser",
            snippet: "Lorem ipsum dolor sit amet consectetur",
        },
    ];
    // res.render("index", { title: "Home" , blogs: blogs }); // "blogs: blogs" => this is the way to output an object. As the name is also the same, we write it only once.
    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    // res.send("<p>About Page</p>");
    // res.sendFile("./views/about.html", { root: __dirname });
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

// redirects
// app.get("/about-us", (req, res) => {
//     res.redirect("/about");
// });

// 404 page
app.use((req, res) => {
    // position of this .use() method is important, it uses all the urls other than the ones used in the above three methods
    // res.status(404).sendFile("./views/404.html", { root: __dirname });
    res.status(404).render("404", { title: "404" });
});
