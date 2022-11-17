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

/*     10. Alternative way to write
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
} */

/*     11. Return negative (3 variants)
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

 /*    12. Reverse the string
function solution(str) {
    return str.split('').reverse().join('');
} */

/*     13. Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool !== true ? 'No' : 'Yes';
  } */

  