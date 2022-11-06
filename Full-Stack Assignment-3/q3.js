// question 3

// final cargoHold Array from question 2
let cargoHold = [
  1138,
  'space suits',
  'parrot',
  'instruction manual',
  'meal packs',
  'space together',
  '20 meters'
];

// a
cargoHold.splice( 3, 0, "keys");
console.log(cargoHold);

// b
let index = cargoHold.indexOf('instruction manual');
cargoHold.splice( index, 1);
console.log(cargoHold);

// c
cargoHold.splice( 2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold);