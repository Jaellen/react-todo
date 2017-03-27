// function add (a, b) {
//   return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA]

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//Hi Andrew, you are 25

function message (name, age) {
  var message = `Hi ${name}, you are ${age}`;
  console.log(message);
}

message(...person);
message(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Jonathan', ...names];

final.forEach((name) => {
  console.log(`Hi ${name}`);
});











