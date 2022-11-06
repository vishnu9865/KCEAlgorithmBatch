// question 7
let people = ['Greg', 'Mary', 'Devon', 'James'];

// 7.1
console.log("7.1");
let result = "[ ";
people.forEach( element => {
  result += (element + " ");
});
console.log(result + " ]");

// 7.2
console.log("7.2");
people.shift();
console.log(people);

// 7.3
console.log("7.3");
people.pop();
console.log(people);

// 7.4
console.log("7.4");
people.splice( 0, 0, "Matt");
console.log(people);

// 7.5
console.log("7.5");
people.push( 'Jeyavishnu');
console.log(people);

// 7.6
console.log("7.6");
result = "[ ";
for (const i in people) {
  result += ( people[i] + " ");
  if( people[i] == 'Mary') break;
}
console.log(result + " ]");

// 7.7
console.log("7.7");
let copyarr = people.slice(0);
copyarr.splice( copyarr.indexOf('Mary'), 1);
copyarr.splice( copyarr.indexOf('Matt'), 1);
console.log(copyarr);

7.8
console.log("7.8");
console.log(people);
console.log(people.indexOf('Mary'));

// 7.9
console.log("7.9");
console.log(people.indexOf('Foo'));

// 7.10
console.log("7.10");
people.splice( 2, 1, 'Elizabeth', 'Artie');
console.log(people);

// 7.11
console.log("7.11");
let withPeople = people.concat("Bob");
console.log(withPeople);