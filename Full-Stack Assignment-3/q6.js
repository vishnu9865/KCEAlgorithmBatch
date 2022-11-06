// question 6

// a
let element1 = ['hydrogen','H',1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

// b
let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

// c
console.log("Below line prints the element object (or array)");
console.log(table[1]);
console.log("Below line prints the first element in the first element or object");
console.log(table[1][1]);

// d
console.log("Mass of Element1: " + table[0][2]);
console.log("Name of Element2: " + table[1][0]);
console.log("Symbol of Element26: " + table[2][1]);