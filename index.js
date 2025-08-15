// importing modules
const mathOperations = require('./mathOperation');

//  mathOperations is a propertyName
console.log(mathOperations.name);

const {currentDate, currentYear} = require('./logger');

console.log(currentYear());
console.log(currentDate());



const greeting = "Jay guru";
console.log("Hello, ", greeting);

function printMessage() {
    console.log("Have a great day!");
}
printMessage();
console.log(mathOperations);
console.log(mathOperations.name);
console.log(mathOperations.add(5, 3));
console.log(mathOperations.sub(5, 3));