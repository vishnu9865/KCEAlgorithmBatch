// question 2
// a
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = 'space together';
console.log("q2.a:");
console.log(cargoHold);
// b
cargoHold.pop();
console.log("q2.b:");
console.log(cargoHold);
// c
var temp = cargoHold.shift();
console.log("q2.c:");
console.log("Removed Element is: " + temp);
console.log(cargoHold);
// d
cargoHold.unshift( 1138);
cargoHold.push('20 meters');
console.log("q2.d:");
console.log(cargoHold);
// e
console.log("q2.e:");
// use backticks (`) for enabling template literals
console.log(`The final array is: ${cargoHold}`);
console.log(cargoHold);