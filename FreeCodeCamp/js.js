/*     1. Method .hasOwnProperty . 
Modify the function checkObj to test if an object passed to the function (obj) 
contains a specific property (checkProp). 
If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
    // Only change code below this line
    let result = obj.hasOwnProperty(checkProp);
    return (result == true) ? obj[checkProp] : 'Not Found';
    // Only change code above this line
  }
   */

/*     2. In the code example above, 
the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

const myArray = [];
let i = 5; 
while (i >= 0) {
    myArray.push(i);
    i--;
} */

/*         3. Recursion  SUM

function sum(arr, n) {
    if (n <= 0 ) return 0;
    else return sum(arr, n - 1) + arr[n - 1];
  } */

/*         4. Recursion MULT
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
    } */


  /*  5. PROPERTIES - important!

// Setup
 const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
      if (name === contacts[x]['firstName']) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return 'No such property';
        } 
      } 
    } return 'No such contact';
  }
  lookUpProfile("Akira", "likes"); */

/*         6. Return a number from 0 to 9 
function randomWholeNum() {
return Math.floor(Math.random() * 10);
    } */

/*     7. Return a whole random number out of the range of numbers 

function randomRange(myMin, myMax) {
return Math.floor((Math.random() * (myMax - myMin + 1)) + myMin); 
} */

    /* 8. Parse Int function
    let str = '0000017';
    let a = parseInt(str);
    console.log(a); */

/* 9. Ternary operator
function checkSign(num) {
    return num === 0 ? 'zero'
    : num > 0 ? 'positive'
    : 'negative'
  }
  
  checkSign(10); */

/*     10. Рекурсия, вернуть числа по возрастанию. При рекурсии идет разворот (push - в конец, unshift в начало)
// Only change code below this line
function countdown(n){
    if (n < 1) {
      return []
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n)
      return countArray
    }
  }
   */