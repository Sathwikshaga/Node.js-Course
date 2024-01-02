const fs = require("fs");

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

console.log("last line");

// writing files

// directories

// deleting files
