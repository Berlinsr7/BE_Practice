const os = require("os");

console.log("Free Memory", os.freemem());
console.log("Total Memory", os.totalmem())
console.log("CPu", os.cpus())
console.log("release", os.release())
console.log("type", os.type())

// console.log("hi")

// console.log(process.argv)