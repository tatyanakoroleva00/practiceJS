/*     151. Bin to Decimal
function binToDec(bin){
    return parseInt(bin, 2)
    } */

/*     152. No zeros for heros
function noBoringZeros(n) {
    return Number(n.toString().replace(/0+$/, ''));
    } */

   /*  153. Training JS #2: Basic data types--Number
    let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3, //set number value to a
      b = v1; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1, //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4, //set number value to a
      b = v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6, //set number value to a
      b = v3; //set number value to b
  return a % b;
} */

/*     154. Plural
function plural(n) {
    return n === 1 ? false : true
    } */

/*     155. Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
    return arr.slice(0, n)
    } */

/*     156. String Templates - Bug Fixing #5
function buildString(...template){
    return `I like ${template.join(', ')}!`;
    } */
    

/*     157. Find the position!
function position(letter){
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let arr = str.split('');
    return 'Position of alphabet: ' + (arr.indexOf(letter) + 1);
    } */

/*     158. Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice / 100 * discount));
    } */

   /* 159. Training JS #4: Basic data types--Array
function getLength(arr){
//return length of arr
return arr.length;
}
function getFirst(arr){
//return the first element of arr
return arr[0];
}
function getLast(arr){
//return the last element of arr
return arr[arr.length - 1];
}

function pushElement(arr){
var el=1;
//push el to arr
arr.push(el)
return arr
}

function popElement(arr){
//pop an element from arr
    arr.pop()
    return arr
} */

 /*    160. String cleaning
function stringClean(s){
    return s.replace(/[0-9]/g,'');
    } */

/*     161. Convert to Binary
function toBinary(n){
    return Number(n.toString(2))
    } */

    /* 162. Pre-FizzBuzz Workout #1
function preFizz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    } return arr
    }
 */

/*     163. Multiple of index
function multipleOfIndex(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) arr.push(array[i]);
    } return arr
    } */

    /* Great Idea 
    function multipleOfIndex(array) {
        return array.filter((num, i) => num % i === 0);
      } */

/*       164. Fix your code before the garden dies!
function rainAmount(mm){
if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + "mm of water"
} else {
        return "Your plant has had more than enough water for today!"
};
} */

   /*  165. Take the Derivative
function derive(coefficient,exponent) {
    return coefficient * exponent + 'x^' + (exponent - 1)
    } */

   /*  166. Grasshopper - Function syntax debugging
function main(verb, noun) {
    return verb + noun
    } */

/*     167. Alan Partridge II - Apple Turnover
function apple(x){
    return (Number(x * x) > 1000) ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
    } */

/*     168. How old will I be in 2099?
function  calculateAge(a, b) {
    if (b - a === 1) return 'You are 1 year old.'
    else if (a - b === 1) return 'You will be born in 1 year.'
    else if (b - a > 1) return 'You are ' + (b - a) + ' years old.'
    else if (a - b > 1) return 'You will be born in ' + (a - b) + ' years.'
    else if (a === b) return "You were born this very year!"
    } */


/*     169. L1: Bartender, drinks!
function getDrinkByProfession(param){
    if (param.toLowerCase() === 'jabroni') return "Patron Tequila";
    else if (param.toLowerCase() === 'school counselor') return	"Anything with Alcohol";
    else if (param.toLowerCase() === 'programmer') return "Hipster Craft Beer";
    else if (param.toLowerCase() === 'bike gang member') return "Moonshine";
    else if (param.toLowerCase() === 'politician') return "Your tax dollars";
    else if (param.toLowerCase() === 'rapper') return "Cristal";
    else return "Beer"
    } */

/*     170. Enumerable Magic - Does My List Include This?
function include(arr, item){
    return arr.includes(item)
    } */

/*     171. Find the Remainder
function remainder(n, m){
    return m > n ? m % n : n % m
    } */

/*     172. Grasshopper - Array Mean
var findAverage = function (nums) {
    let sum = 0;
    nums.map(el => {
        sum += el; 
        return sum
    });
    return sum / nums.length
    } */

   /*  Interesting result found
    const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;) */

/*     173. Add Length
function addLength(str) {
    return str.split(' ').map(el => el + ' ' + el.length)
    } */

/*     174. Training JS #5: Basic data types--Object
function animal(obj){
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
    } */

/*     175. Surface Area and Volume of a Box
function getSize(width, height, depth) {
    let totalSurfaceArea = (depth * width + depth * height + width * height) * 2;
    let volume = width * height * depth;
    let arr = [];
        arr[0] = totalSurfaceArea; 
        arr[1] = volume;
    return arr
    } */
      

/*     176. Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
    return sperm.includes('Y') ? "Congratulations! You're going to have a son."
        : "Congratulations! You're going to have a daughter."
    } */

/*     177. No Loops 2 - You only need one
function check(a,x){
    return a.includes(x)
    }; */

/*     178. Welcome to the City
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!` 
    } */

/*     179. Sum of differences in array
function sumOfDifferences(arr) {
    if (arr.length === 0 || arr.length === 1) return 0; 
    else {
        arr = arr.sort(function(a,b){return a - b});
        let sum = 0;
        for (let i = 1; i < arr.length; i++) {
        sum += arr[i] - arr[i - 1];
        } return sum
    }
    } */
      
/*     180. Do you speak "English"?
function spEng(sentence){
    return sentence.toLowerCase().includes('english')
    } */

/*     181. Return the day
function whatday(num) { 
    let week = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }; 
        return (num <= 7 && num >= 1 ) ? week[num] : "Wrong, please enter a number between 1 and 7"
    } */

/*     182. Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3){
  return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4),
          +((p1[1]+p2[1]+p3[1])/3).toFixed(4)];
} */

/*     183. CSV representation of array
function toCsvText(array) {
   return array.join('\n');
}

  /*   184. Pythagorean Triple
function isPythagoreanTriple(integers) {
  let arr = integers.sort((a, b) => a - b);
  arr[0] = Math.pow(arr[0], 2);
  arr[1] = Math.pow(arr[1], 2);
  arr[2] = Math.pow(arr[2], 2);
  return (arr[0] + arr[1] === arr[2])
} */

/*     185. The 'if' function
function _if(bool, func1, func2) {
    return bool ? func1() : func2()
    } */

/*     186. Training JS #10: loop statement --for
function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
    return [odd,even];
    } */