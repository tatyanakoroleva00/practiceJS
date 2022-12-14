/*      101. Difference of Volumes of Cuboids
function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
    }  */

/*     102. Student's Final Grade
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    else return 0
    } */

/*     103. Is it even?
function testEven(n) {
    if (n != parseInt(n) && n !== 0) return false;
    else {
        return (n % 2 === 0);
    }
}  */

/*     // smart solution found
function testEven(n) {
    return n%2===0;
} */    

/*     104. Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
    } */

/*     105. Filter out the geese
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(item => !geese.includes(item));
    }; */

/* 106. What is between?
function between(a, b) {
    let arr = [];
        for (let i = a; i <= b; i++) {
            arr.push(i);
        } return arr
    } */

   /*  107. Well of Ideas - Easy Version
function well(x){
    let good = 0; 
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') good++;
    }
    switch(good) {
        case 1:
        case 2: 
            return 'Publish!'
        case 0: 
            return 'Fail!'
        default:
            return 'I smell a series!'
    }
    } */

/*     //smart answer found
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
            good_count < 3 ? 'Publish!' : 'I smell a series!';
    } */

/*         108. Grasshopper - Terminal game move function
function move (position, roll) {
    return roll * 2 + position
    } */

/*     109. My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse()
    } */

/*     110. N-th Power
function index(array, n){
    if (n > array.length - 1) return -1;
    return Math.pow(array[n], n)
    } */

/*     111. Is the string uppercase?
String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
    } */

/*     112. Grasshopper - Debug sayHello
function sayHello(name) {
    return 'Hello, ' + name 
    } */

/*     113. Stringy Strings
function stringy(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        i % 2 === 0 ? arr.push(0) : arr.push(1)
    } return arr.join('');
    }
     */

/*     114. Grasshopper - If/else syntax debug
function checkAlive (health) {
    return health > 0
    } */

/*     115. Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    return n < 5 ? 100 * n
            : n >= 10 ? 90 * n
            : 95 * n
    } */

/*     116. Filling an array (part 1)
const arr = N => {
    let a = [];
    for (let i = 0; i < N; i++) {
        a.push(i);
    } return a
    } */

/*     117. Function 2 - squaring an argument
function square(number) {
    return number * number;
    } */

/*     118. 5 without numbers !!
function unusualFive() {
    let arr = ['five', 'five', 'five', 'five', 'five'];
        return arr.length;
    } */

/*     119. Short Long Short
function solution(a, b){
    return a.length > b.length ? b + a + b : a + b + a 
    } */
      
/*     120. What's the real floor?
function getRealFloor(n) {
    return n === 1 ? 0
            : (n > 1 && n <= 13) ? n - 1
            : (n > 13) ? n - 2 
            : n
    } */

   /*  121. Super Duper Easy
function problem(x){
    return typeof x === 'number' ? x * 50 + 6 : 'Error'
    } */

  /*   122. Find Multiples of a Number
function findMultiples(integer, limit) {
    let arr = [];
    
    let i = 1;
    while (integer * i <= limit) {
        arr.push(integer * i); 
        i++;
    }
    return arr;
    } */

/*     123. Get Nth Even Number
function nthEven(n){
return 2 * (n - 1);
} */

/*     124. Name Shuffler
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
} */

/*     125. Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
    return (string[string.length - 1] === '!') ? string.slice(0, -1) : string
    } */

/*     126. Reverse List Order
function reverseList(list) {
    return list.reverse()
    } */


/*     127. Generate range of integers
function generateRange(min, max, step){
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    } return arr;
    } */

/*     128. Lario and Muigi Pipe Problem
function pipeFix(numbers){
    let lastIndex = numbers[numbers.length - 1];
    let arr = [];
    for (let i = numbers[0]; i <= lastIndex; i++) {
        arr.push(i);
    } return arr;
    } */

/*     129. Grasshopper - Terminal game combat function
function combat(health, damage) {
    return health - damage < 0 ? 0 : Math.abs(health - damage)
    } */

/*     130. Vowel remover
function shortcut (str) {
let arr = [];
for (let k = 0; k < str.length; k++) {
    let i  = str[k];
    if (i != 'a' && i != 'e' && i != 'i' && i != 'o' && i != 'u') {
    arr.push(i);
    }
} return arr.join('');
}
 */

   /*  131. Capitalization and Mutability
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
    } */

/*     132. Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return [];
    
    let arr = arr1.concat(arr2);
    arr = [...new Set(arr)];
    return arr.sort(function(a, b) {return a - b})
    } */

/*         133. The Wide-Mouthed frog!
function mouthSize(animal) {
    return animal == 'alligator' ? 'small' : 'wide'
    } */

/*         134. A wolf in sheep's clothing
function warnTheSheep(queue) {

    queue = queue.reverse();
    let wolfIndex = queue.indexOf('wolf');
    
    if (wolfIndex + 1 == 1) return "Pls go away and stop eating my sheep"; 
    else if (wolfIndex + 1 != 1) return ("Oi! Sheep number " + wolfIndex + "! You are about to be eaten by a wolf!")
    } */

/*     135. Grasshopper - Debug
function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c < 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
    }
    
    function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
    } */
/* 
    136. Get character from ASCII Value
function getChar(c){
    let char = String.fromCharCode(c);
    return char
    } */

/*     137. Grasshopper - Basic Function Fixer
function addFive(num) {
    return num + 5
    } */


/*     138. Drink about
function peopleWithAgeDrink(old) {
    return old < 14 ? "drink toddy"
    : old < 18 ? "drink coke"
    : old < 21 ? "drink beer"
    : "drink whisky"
    }; */

/*     139. Exclusive "or" (xor) Logical Operator
function xor(a, b) {
    return (a != b)
    } */

/*     
function hello(name) {
    if (Boolean(name) === false) return 'Hello, World!';
    name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    return 'Hello, ' + name + '!'
    } */

    /* 141. Reversing Words in a String
function reverse(string){
    return string.split(' ').reverse().join(' ')
    } */

/*     142. Hex to Decimal
function hexToDec(hexString){
    return parseInt(hexString, 16)
    } */

/*     143. Triple Trouble
function tripleTrouble(one, two, three){
    let str = '';
    
    for (let i = 0; i < one.length; i++) {
        str += one[i] + two[i] + three[i];
    } return str
    } */

/*     144. Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row) 
    } */

/*     145. Grasshopper - Messi Goals
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals; */

/*     146. Regular Ball Super Ball
var Ball = function(ballType) {
    return ballType ? this.ballType = 'super' : this.ballType = 'regular'
} */

/*     147. How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
    } */

/*     148. Multiplication table for number
function multiTable(number) {
    let str = '';
    for (let i = 1; i < 11; i++) {
        if (i === 10) { 
            str += `${i} * ${number} = ${i * number}`;
        } else {
            str += `${i} * ${number} = ${i * number}\n`;
        }
    } return str
    } */
/* 
        149. Is this my tail?
function correctTail(body, tail){
    return body.slice(-1) === tail ? true : false
} */

/*     150. FIXME: Replace all dots
var replaceDots = function(str) {
    return str.split('.').join('-')
    } */