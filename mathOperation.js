const name = "Anant Kumar";
const age = 25;
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
console.log(module);

// different way to export functions

// module.exports.addFunction = add;
// module.exports.subFunction = sub;

// short-hand way to export functions

// syntex  
// module.exports = {property1Name: property1Value, property2Name: property2Value};

// module.exports = {addFunction: add, subFunction: sub};

// or (alternative way)

// module.exports = {name, age, add, sub};  