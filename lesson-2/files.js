const fs = require("fs");

// reading files

// fs.readFile('./docs/blog12.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

console.log("last line");

// writing files

fs.writeFile("./docs/blog1.txt", "Hello, Sathwik", () => { // fs.writeFile => Asynchronous operations
    console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "Hello, Again", () => {
    console.log("file was written");
});

// Create and delete directories
if (!fs.existsSync("./assets")) { // fs.existsSync, fs,mkdir, fs.rmdir => synchronous operations
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
} else {
    fs.rmdir("./assets", (err) => { // fs
        if (err) {
            console.log(err);
        }
        console.log("folder deleted");
    });
}

// deleting files

if(fs.existsSync("./docs/deleteMe.txt")){
    fs.unlink("./docs/deleteMe.txt", (err) => {
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    })
}