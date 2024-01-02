const speak = () => {
    console.log("Hello, World");
};

speak();

// Global Object
// console.log(global);

// global.setTimeout(() => {
//     console.log("t = +3sec");
// }, 3000);

// setTimeout(() => {
//     console.log("t = +3sec");
//     clearInterval(interval);
// }, 3000);

// const interval = setInterval(() => {
//     console.log("in interval = 1sec");
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

// no access to DOM Methods
console.log(document.queryselector);
