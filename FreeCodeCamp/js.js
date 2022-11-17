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