        // 1. Arrays
/* let arr = ['a', 'b', 'c', 'd'];
alert(arr); */

        // 2. Array, output of elements to the console
/* let arr = ['a', 'b', 'c'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]); */

        // 3. Array, output of elements to the screen
let arr = [1, 2, 3];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);

        // 4. Array sum of numbers
/* let arr = [1, 2, 3];
let sum = arr[0] + arr[1] + arr[2];
alert(sum); */

        // 5. Array sum
/* let arr = ['a', 'b', 'c', 'd'];
console.log(arr[0], '+', arr[1], '+', arr[2], '+', arr[3]); */

        // 6. Array length
/* let arr = [1, 2, 3, 4];
let arrLength = arr.length;
console.log(arrLength); */

        // 7. Arrays, changement
/* let arr = [1, 2, 3, 4];
arr[0] = arr[0] + '+';
arr[1] = arr[1] + '+';
arr[2] = arr[2] + '+';
console.log(arr[0] + arr[1] + arr[2] + arr[3]); */

        // 8. Arrays
/* let arr = [1, 2, 3, 4];
arr[0] += '!';
arr[1] += '!';
arr[2] += '!';
console.log(arr);  */

        // 9. if(test) instead of test === true
/* let test = true;
if (test) {
    console.log('+');
} else {
    console.log('-');
} */

        // 10. !test, test === false, test !== true
/* let test = true;
if (!test) {
    console.log('false');
} else {
    console.log('it is a not correct conclusion');
} */

        // 11. 
/* let test = true; 
if (!true) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 12. 
/* let test = true;
if (!false) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 13. &&, ||
/* let test1 = true;
let test2 = true;
if (test1 && test2) {
    console.log('+++');
} else {
    console.log('---');
} */   

        // 14. 
/* let test1 = true;
let test2 = true;
if (test1 && !test2) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 15. 
/* let test1 = true; 
let test2 = true; 
if (!test1 && !test2) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 16. 
/* let test1 = true;
let test2 = true;

if (test1 && test2) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 17. 
/* 
let test1 = true; 
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 18. 
/* 
let test1 = true; 
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) {
    console.log('+++');
} else {
    console.log('---');
} */

        // 19. 
/* let test1 = true; 
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) {
    console.log('+++');
} else {
    console.log('---');
} */


        // 20. 
/* let test = 10; 
if (test == 10) {
    console.log('yes');
} */

        // 21. Shortened form
/* let test = 1;
if (test > 0) console.log('+++'); else console.log('---'); */

        // 22. 
/* let test = 1;
if (test) console.log('+++'); */

        // 23. ELSE IF
/* let day = 15; 
if (day > 1 && day <= 10) { 
    console.log('first decade');
} else if (day > 10 && day <= 20) {
    console.log('second decade');
} else {
    console.log('third decade');
} */

        // 24. 
/* let day = 51; 
if (day > 1 && day <= 10) { 
    console.log('first decade');
} else if (day > 10 && day <= 20) {
    console.log('second decade');
} else if (day > 20 && day <= 31) {
    console.log('third decade');
} else {
    console.log('error');
} */

        // 25. Nested constructions
/* let num = 22; 
if (num >= 10 && num <= 99) {
    let numberConversionToString = String(num); 
    let a = numberConversionToString;
    let sum = a[0] + a[1];
    if (sum <= 9) {
        console.log('The sum is 1-digit');
    } else {
        console.log('The sum is 2-digit');
    }
}; */

        // 26. Switch-case construction. Rewrite else if conditions
/* let lang = 'ru';

switch(lang) {
    case 'ru':
        console.log('russian');
    break;
    case 'en':
        console.log('english');
    break;
    case 'de':
        console.log('german');
    break;
    default:
        console.log('the language is not supported');
    break;
} */

        // 27. Ternaty operator
/* let age = 17;
let adult = age >= 18 ? true: false;
console.log(adult); */

/* let age = 17; 
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
console.log(adult); */

        // 28. 
/* let num = 1;
let res = num >= 0 ? '1': '2';
console.log(res); */

        // 29. Logical operators in JS
/* let a = 2 * (3 - 1);
let b = 6 - 2;
let result = a == b;
console.log(result); */

        // 30. 
/* let a = 5 * (7 - 4);
let b = 1 + 2 + 7; 
let result = a > b; 
console.log(result); */

        // 31. 
/* let a = 2 ** 4; 
let b = 4 ** 2; 
let result = a != b; 
console.log(result); */

        // 32. Confirm
/* let question = confirm('Are you older than 18 years?');
if (question) console.log('yes');
else console.log('nope'); */

        // 33. Scope of variables
/* let age = 17; 
let adult = age >= 18 ? true: false; 
console.log(adult); */

/* let age = 17; 
let adult; 
if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
console.log(adult); */

        // 34. Let in External et Internal scope
/* let age = 17; 
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
console.log(adult); */


        // 35. Array length, sum of the elements if there are 3 elements in the array
/* let arr = [1, 4, 5, 7, 9];
let numberOfElementsInArray = arr.length;
if (numberOfElementsInArray == 3) {
    console.log(arr[0] + arr[1] + arr[2]);
}
else {
    console.log('mistake');
} */

        // 36. 
/* let str = '12345';
if (str[0] == 1) {
    console.log(true);
} */

        // 37. 
/* let str = '12345';
let last = str[str.length - 1];
if (last == 5) {
    console.log(true);
} */

        // 38. 
/* let str = 'hello, this is my world';
if (str[0] == 'a') {
    console.log(true);
} else console.log(false); */

        // 39. 
/* let str = 'hello, this is my world';
if (str[str.length - 1] == 'x') {
    console.log('yes');
} else console.log('nope'); */

        // 40. 
/* let str = 'hello, this is my world';
if (str[0] == 'a' || str[str.length - 1] == 'b') {
    console.log(true);
} else console.log('i am sorry but no'); */

        // 41. 
/* let num = 16; 
let str = String(num);
if (str[str.length - 1] == 0) {
    console.log(true);
} else {
    console.log(false);
} */

        // 42. 
/* let num = 51; 
let str = String.num;
if (str == 0 || str == 2 || str == 4 || str == 6 || str == 8) {
    console.log('even number');
} else {
    console.log('odd number');
} */

        // 43. 
/* let num = 56; 
if (num % 2 == 0) console.log('even');
else console.log('odd'); */

        // 44. 
/* let num = 104;
if (num % 3 == 0) {
    console.log('yes');
} else console.log('nope'); */

        // 45. Attention to the priority + and ===
/* let num1 = 1; 
let num2 = 2; 
if (num1 + num2 === 3) { 
    console.log('ok');
} else console.log('nope'); */

        // 46. Find the season according to month number
/* let month = 11; 
switch(month) {
    case 12:
    case 1:
    case 2: 
        console.log('winter');
    break;
    case 3:
    case 4:
    case 5:
        console.log('spring');
    break;
    case 6:
    case 7:
    case 8:
        console.log('summer');
    break;
    case 9:
    case 10:
    case 11:
        console.log('autumn');
    break;
} */

        // 47. 
/* let str = 'abcde';
if (str[0] == 'a') {
    console.log('yes');
} else console.log('no'); */

        // 48. 
/* let num = 12345;
let str = String(num);
let a = str[0];
if (a == 1 || a == 1 || a == 2) {
    console.log('yes');
} else {
    console.log('nope');
} */

        // 49. 
/* let num = 123;
let str = String(num);
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
console.log(sum); */

        // 50. 
/* let num = 123456;
let str = String(num);
let sumOfFirst3numbers = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sumOfLast3numbers = Number(str[3]) + Number(str[4]) + Number(str[5]);
let a = sumOfFirst3numbers;
let b = sumOfLast3numbers;

if (a == b) {
    console.log('yes');
} else {
    console.log('nope');
} */