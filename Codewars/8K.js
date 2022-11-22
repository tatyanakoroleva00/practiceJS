/*         1. Dalmatians

function howManyDalmatians(number) {
  
    let dogs = ["Hardly any", 
    "More than a handful!", 
    "Woah that's a lot of dogs!", 
    "101 DALMATIANS!!!"];
  
    let respond = 
    number <= 10 
    ? dogs[0] 
    : number <= 50 
    ? dogs[1] 
    : number == 101 
    ? dogs[3] 
    : dogs[2];
    
    return respond;
  }
 */

/*     2. Find the smallest number in the Array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = Math.min.apply(null, args);
        return min;
    }
    } */

/*     3. 
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        sum += arr[i];
        }
    } console.log(sum);
}
positiveSum([1, 4, -5, -10]); */

/*         4. Multiplication
function multiply(a, b){
    return a * b
    } */

 /*        5. Return the opposite number
function opposite(number) {
    return (-number);
    } */

/*     6. Return the average
function findAverage(array) {
    let sum = 0;
    let average;
    if (array.length == 0) {
        return 0;
    } else {
        array.forEach(function(element){
        sum += element;
        }); average = sum / array.length; 
    } return average;
    } */

/*     7. return Even or Odd
function evenOrOdd(number) {
return number % 2 === 0 ? 'Even': 'Odd';
} */

/*     8. In love or not - odd/even - Opposites attract

function lovefunc(flower1, flower2){
let sum = flower1 + flower2;
    return (sum % 2 == 0) ? false : true;
}
/*          9. To Alternating Case
String.prototype.toAlternatingCase = function () {
let str = '';

    for(let i = 0; i< this.length; i++){
        if (this[i] == this[i].toLowerCase()){ 
        str += this[i].toUpperCase();
        } else {
        str += this[i].toLowerCase();
        }
    } return str;
}
 */

/*     9.2 Alternative way to write
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
} */

/*     10. Return negative (3 variants)
function makeNegative(num) {
if (num > 0) return -num;
else return num;
}
function makeNegative(num) {
return -Math.abs(num);
}
function makeNegative(num) {
return num > 0 ? -num : num;
} */

 /*    11. Reverse the string
function solution(str) {
    return str.split('').reverse().join('');
} */

/*     12. Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool !== true ? 'No' : 'Yes';
  } */

  /*   13. Remove First and Last Character

function removeChar(str){
    let arr = str.split("");
        let result = "";
    for(let i = 1; i < arr.length - 1; i++)
        {
        result += arr[i];
        }
    
        return result;
    };
        */

/*     13.2 
return str.slice(1, -1);
 */
/*     14. Repeat Method
function repeatStr (n, s) {
return s.repeat(n)
} */    
/*     14.2
repeatStr = (n, s) => s.repeat(n) */

/*     15. Math.pow(x, 2)
function squareSum(numbers){
let result = 0;
numbers.forEach((element) => {
    result += Math.pow(element, 2);
})
return result
} */

/* 16. Remove string spaces
function noSpace(x){
return x.split(' ').join('');
} */

/* 18. Grasshopper - Summation
var summation = function (num) {
let sum = 0;
for (let i = num; i > 0; i--) {
sum += i; 
}
return sum
} */

/*     18. Counting sheep...
function countSheeps(arrayOfSheep) {
    let count = 0; 
    arrayOfSheep.forEach((element) => {
        if (element === true) count++;
    })
    return count
    } */

/*     18.2 Very smart answer found
function countSheeps(arrayOfSheeps) {
return arrayOfSheeps.filter(Boolean).length;
} */   

       /*  19.1 Century From Year

let year = 210; 
if (year <= 100) console.log(1);
else if (year % 100 === 0 && year < 1000) console.log(String(year)[0]) ;
else if (year % 100 === 0 && year >= 1000) console.log(String(year).slice(0,-2));
else {
    if (String(year).length === 3) {
        console.log(+String(year)[0] + 1);
    } else {
        console.log(+String(year).slice(0, -2) + 1);
    }
}
  */

/*         19.2 Century From Year

if (year <= 100) return 1;
else if (year % 100 === 0 && year < 1000) return (+String(year)[0]) ;
else if (year % 100 === 0 && year >= 1000) return (+String(year).slice(0,-2));
else {
    if (String(year).length === 3) {
        return (+String(year)[0] + 1);
    } else {
       return (+String(year).slice(0, -2) + 1);
    }
} */

/*         19.3 Century From Year / Smart and easy answer found. 
const century = year => Math.ceil(year/100);
 */

/*         20. Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
    if(operation == '+')return value1 + value2;
    if(operation == '-')return value1 - value2;
    if(operation == '*')return value1 * value2;
    if(operation == '/')return value1 / value2;
}
 */
/*         20.1. Smart response found !
function basicOp(o, a, b) {
    return eval(a+o+b);
} */
/*         21. Abbreviate a Two Word Name
function abbrevName(name){
    let arr = name.split(' ');
    return (arr[0][0] + '.' + arr[1][0]).toUpperCase()
}

/*         22. Transportation on vacation
function rentalCarCost(days) {
  // Your solution here
  const costPerDay = 40;
  
  const discount = days >= 7 
  ? 50 
  : (days >= 3 && days < 7) 
  ? 20 
  : 0;
  return days * costPerDay - discount;
} */

   /*      23. Keep Hydrated!
function litres(time) {
let result = time * 0.5; 
    return Math.floor(result);
} */

/*     Shorter version...
function litres(time) {
    return Math.floor(time * 0.5);
} */
/* 
        24. Is n divisible by x and y?
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) 
    ? true
    : false
  } */

/*   / Another short version found
function isDivisible(n, x, y) {
return n % x === 0 && n % y === 0
} */

/*    25. Convert number to reversed array of digits
function digitize(n) {
  let str = String(n);
  let arrOfStr = [...str];
  let arrOfNum = arrOfStr.map(str => {
    return Number(str);
  })
  return arrOfNum.reverse();
}
 */
/* function digitize(n) {
  return String(n).split('').map(Number).reverse()
} */

/*         26. Convert a String to a Number!
const stringToNumber = function(str){
return +str
} */

 /*        27. Beginner - Lost Without a Map

function maps(x){
let newArr = [];
let arr = x.forEach((el) => {
    el = el * 2;
    newArr.push(el);
})
return newArr
} */

        // +1 solution, easier, faster
/* function maps(x){
return x.map(a => a * 2)
} */

/*     28. A Needle in the Haystack
function findNeedle(haystack) {
    let needle = haystack.indexOf('needle');
    return ("found the needle at position " + needle)
} */

   /*  29. Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`;
    }
 */

/*     30. Function 1 - hello world
function greet() {
return "hello world!"
} */
/*       31. Beginner Series #2 Clock
function past(h, m, s){
let mins = h * 60 + m; 
let secs = mins * 60 + s;
    return ms = secs * 1000
} */

   /*  32. Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    
    //Return an empty array
    let arr = [];
      if (input === [] || input === null) {
        return arr;
      }
    //Count the positives and the sum of negatives 
    let count = 0, sum = 0;
      
      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          count++;
        } else if (input[i] < 0) {
          sum += input[i];
        } else {
        }
      } 
      
      //Return the results
      if (sum === 0 && count === 0) {
        return arr;
      } else {
        arr.push(count);
        arr.push(sum);
        return arr
      } */

/* 33. Convert a Boolean to a String
function booleanToString(b){
    return String(b)
  } */

/*   34. Beginner Series #1 School Paperwork
function paperwork(n, m) {
if (n < 0 || m < 0) return 0;
return m * n
} */
  
/*     35. Invert values
function invert(array) {
    return array.map(e => -e)
} */

/*         36. You only need one - Beginner
function check(a, x) {
    return a.includes(x)
    } */

/*     37. Fake Binary
function fakeBin(x){
let arr = x.split('');

let str = '';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) str += 0;
    else str += 1;
} return (str);
} */
   /*      2. variant
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
} */

   /*  38. How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let avg = classPoints.reduce((a, b) => (a + b)) / classPoints.length;
    return (yourPoints > avg ? true : false)
}  */

   /*  39. Are You Playing Banjo?
function areYouPlayingBanjo(name) {
return (name[0] === 'R' || name [0] === 'r') ? 
    name + " plays banjo" : name + " does not play banjo"
} */

/*     40. Reversed sequence
const reverseSeq = n => {
let arr = [];
for (let i = n; i > 0; i--) {
    arr.push(i);
} return arr
}; */

/*     41. Sum Arrays
function sum (numbers) {
"use strict";

if (numbers.join() === '') return 0;
else {
return numbers.reduce((sum, el) => sum + el)
}
}; */

/*         // super fast solution found
function sum(numbers) {
return numbers.reduce((a, b) => a + b, 0);
} */

/*     42. Reversed Words
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  } */

/*         43. Calculate BMI
function bmi(weight, height) {
    result = weight / Math.pow(height, 2);
    return result <= 18.5 ? 'Underweight'
    : (result <= 25.0) ? 'Normal'
    : (result <= 30.0) ? 'Overweight'
    : 'Obese'
    } */

/*         44. Make UpperCase
function makeUpperCase(str) {
    return str.toUpperCase()
    } */

/*         45. Beginner - Reduce but Grow
function grow(x){
    return x.reduce((a, b) => a * b)
} */

/*     46. Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft; 
}; */

/*     47. Simple multiplication
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
} */

/*     48. Jenny's secret message
function greet(name){
if(name === "Johnny") return "Hello, my love!";
else return "Hello, " + name + "!";
} */

/*     49. DNA to RNA Conversion
function DNAtoRNA(dna) {
    let arr = dna.split('');
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'T') {
        arr[i] = 'U';
        str += arr[i];
        } else {
        str += arr[i]
        }
    }
    return str
    } */

/*     // Super fast solution found
function DNAtoRNA(dna) {
return dna.split("T").join("U");
} */

/*         50. Is he gonna survive?
function hero(bullets, dragons){
    return bullets >= dragons * 2
    } */

