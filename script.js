var userName = "Rubi";

userName = "Rubi"; 
console.log(userName);

let age = 18;
age = 19;
console.log(age);

const birthYear = 2004;

console.log(birthYear);

let isMarried = true;
console.log(isMarried);

let user = null
user = {
    userName: "Rubi",
    age: 19,
    isMarried: true,
};
console.log(
    "Hi, i'm" + 
    " " +
     user.userName +
     " " +
      "and i am" +
    " " + 
    user.age +
     " " +
     "years old"
);
console.log(`Hi i am ${ user.userName} and i am ${user.age} years old`);

var x = 15;
var y = 20;
var z = 59;

var sum = x + y + z;
console.log(sum);



var sum = z + y - x;
console.log(sum);


var sum = z + y / x;
console.log(sum);


var sum = z + y*x;
console.log(sum);


var width = 5;
var lenght = 7;
var area;
area = lenght * width
console.log(`area = ${area}`)