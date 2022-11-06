// question 5

// a
let str = 'In space, no one can hear you code.';
console.log('q5.a:');
console.log("Doesn\'t do anything..");
console.log(str.split());
console.log("Splits the string at e and removes e..");
console.log(str.split('e'));
console.log("Splits the string into array at space and removes space..");
console.log(str.split(' '));
console.log("Splits each character in the string..");
console.log(str.split(''));

// b
let arr = [ 'B', 'n', 'n', 5];
console.log('q5.b:');
console.log(arr.join());
// joins the array into a string joined together by ','
console.log(arr.join('a'));
// joins the array into a string joined together by 'a'
console.log(arr.join(' '));
// joins the array into a string joined together by space
console.log(arr.join(''));
// joins the array into a string with no space

// c
console.log('q5.c:');
console.log("=> split method returns the array and doesn\'t affect the original array");
console.log("=> join method returns the string and doesn\'t affect the original array");

// d
console.log('q5.d');
let mystr = "water,space suits,food,plasma sword,batteries";
let mystrarr = mystr.split(",");
mystrarr.sort();
console.log(mystrarr.join());