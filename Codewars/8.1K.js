/*     51. If you can't sleep, just count sheep!!
var countSheep = function (num){
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += i + ' sheep...'
    }
    return str
    } */

/*     52. Find Maximum and Minimum Values of a List

var min = function(list){
    return Math.min.apply(null, list);
};

var max = function(list){
    return Math.max.apply(null, list);
}; */

/*     53. Get the mean of an array
function getAverage(marks){
let avg = marks.reduce((a, b) => a + b) / marks.length;
return Math.floor(avg)
} */


/*         54. Array plus array
function arrayPlusArray(arr1, arr2) {
let bigArr = [];
let arrConcat = bigArr.concat(arr1, arr2);
return arrConcat.reduce((a, b) => a + b)
} */

        // shorter variant
/* function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
} */

   /*  // interesting solution found
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
    } */

 /*        55. Count by X
function countBy(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(x * i);
    } return arr
    } */

/*         56. Sentence Smash
function smash (words) {
    return words.join(' ')
    }; */

   /*      57. Sum without highest and lowest number
function sumArray(array) {
if (array === null || array === undefined) return 0;

else if (array.length > 1) {
    let max = Math.max.apply(null, array);
    let min = Math.min.apply(null, array);
    let sum = array.reduce((a, b) => a + b); 
    return sum - max - min
} else return 0;
} */

/*     58. Count the Monkeys!
function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    } return arr
    } */

/*     59. Convert a string to an array
function stringToArray(string){
return string.split(' ')
} */

/*     60. Total amount of points
function points(games) {
    let count = 0;
    for (let i = 0; i < 10; i++) {
        let number = games[i].split(':');
        if (+number[0] > +number[1]) {
        count += 3;
        } else if (+number[0] === +number[1]) {
        count += 1
        }
    } return count
    } */

/*     61. Rock Paper Scissors!
const rps = (p1, p2) => {
if (p1 === p2) return 'Draw!';
else if (p1 === 'scissors' && p2 === 'paper' 
            || p1 === 'rock' && p2 === 'scissors'
        || p1 === 'paper' && p2 === 'rock')
    return 'Player 1 won!';
else return 'Player 2 won!'
}; */

/*     // very good solution found
const rps = (p1, p2) => {
if (p1 === p2) return "Draw!";
var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
if (p2 === rules[p1]) {
    return "Player 1 won!";
}
else {
    return "Player 2 won!";
}
}; */

/*     62. Do I get a bonus?
function bonusTime(salary, bonus) {
let prefix = "\u00A3";
if (bonus) { 
    let result = String(salary * 10);
    return prefix + result
} else return prefix + salary
} */

   /*  63. You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i * 2;
    } */

/*     64. Sum Mixed Array
function sumMix(x){
return x.map(e => +e).reduce((a, b) => a + b)
} */

/*     65. Grasshopper - Grade book

  function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    if (score >= 0) return 'F';
  }
 */

/*   66. Grasshopper - Personalized Message
function greet (name, owner) {
return name === owner ? 'Hello boss' : 'Hello guest'
} */

/*     67. Area or Perimeter
const areaOrPerimeter = function(l , w) {
return l == w ? l * l : 2 * (l + w) 
}; */

/*     68. The Feast of Many Beasts
function feast(beast, dish) {
return (beast[0] === dish[0] 
        && beast[beast.length -1] === dish[dish.length - 1])
} */

/*     69. Remove exclamation marks
function removeExclamationMarks(s) {
return s.split('!').join('')
} */

/*     70. Thinkful - Logic Drills: Traffic light
function updateLight(current) {
return current === 'green' ? 'yellow'
: current === 'yellow' ? 'red'
: 'green'
} */

/*     71. L1: Set Alarm
function setAlarm(employed, vacation){
return (employed === true && vacation === false)
} */

/*     72. Double Char
function doubleChar(str) {
let arr = str.split('');
return arr.map(e => String(e + e)).join(''); 
} */

   /*     73. Find the first non-consecutive number
 function firstNonConsecutive (arr) {
    if (arr.length == 1 || arr.length == 0) {
        return null;
        
    } else { 
        let newArr = [];
        for (let i = 1; i < arr.length; i++){
        if (arr[i] - arr[i - 1] !== 1) {
            newArr.push(arr[i])
        }
        } 
        if (newArr[0] == undefined) {
        return null
        } else return newArr[0];
        }
    } */

// Amazing result found
/* function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
} */

/*         74. Removing Elements
function removeEveryOther(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    } return newArr
    } */

    // Smart answer found
/* function removeEveryOther(arr){
return arr.filter(function(elem, index) {
    return index % 2 === 0;
});
} */

/*     75. Beginner Series #4 Cockroach
function cockroachSpeed(s) {
let result = s * Math.pow(10, 4) / 360;
return Math.floor(result)
} */

   /*  76. Quarter of the year
const quarterOf = (month) => {
    switch(month) {
        case 1:
        case 2: 
        case 3: 
        return 1;
        break;
        
        case 4:
        case 5:
        case 6: 
        return 2;
        break;
        
        case 7: 
        case 8: 
        case 9: 
        return 3; 
        break;
        
        default: 
        return 4; 
        break;
    }
    
    } */

/*     // Super short answer found
const quarterOf = m => Math.ceil(m/3); */

   /*  77. Get Planet Name By ID
    function getPlanetName(id){
        var name;
        switch(id){
          case 1:
            name = 'Mercury';
            break;
          case 2:
            name = 'Venus';
            break;
          case 3:
            name = 'Earth';
            break;
          case 4:
            name = 'Mars';
            break;
          case 5:
            name = 'Jupiter';
            break;
          case 6:
            name = 'Saturn';
            break;
          case 7:
            name = 'Uranus';
            break;
          case 8:
            name = 'Neptune';
            break;
        }
        return name;
      } */

/*       78. Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
let a = dadYearsOld - sonYearsOld * 2; 
if (a >= 0) return a; 
else return Math.abs(a)
} */

    /* // shorter
function twiceAsOld(dadYearsOld, sonYearsOld) {
return Math.abs(dadYearsOld - 2 * sonYearsOld);
} */

/*     79. Unfinished Loop - Bug Fixing #1
function createArray(number){
var newArray = [];

for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
}
return newArray;
} */

   /*  80. Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b; */

/*     81. Will there be enough space?
function enough(cap, on, wait) {
    let placesLeft = cap - on;
        if (placesLeft > wait) return 0; 
        else 
            return Math.abs(placesLeft - wait)
} */