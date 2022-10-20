            // 1. parseInt() function
/* let a = '5px';
let b = '6px';
console.log(parseInt(a) + parseInt(b)); */

            // 2. parseFloat() function
/* let a = '5.5px';
let b = '6.25px';
console.log(parseFloat(a) + parseFloat(b)); */

            // 3. Re-writing the previous example and adding px
/* let a = '5.5px';
let b = '6.25px';
console.log(parseFloat(a) + parseFloat(b) + 'px'); */

            // 4. Converting a number to a string
/* let a = 5;
let b = 7;
console.log(String(a) + String(b)); */

            // 5. Length of a string
/* let num = 12345;
console.log(String(num).length); */

            // 6. Sum the strings with numbers inside
/* let a = 159.4;
let b = 349;
console.log(String(a).length + String(b).length);
console.log((String(a) + String(b)).length); */

            // 7. Booleans
/* let test = Boolean(1 / 0);
console.log(test);

console.log(1 / 0);
console.log(-1 / 0); */

            // 8. Getting a symbol out of a string
/* let a = 'abcde';
let str1 = a[0];
let str2 = a[2];
let str3 = a[4];
console.log(str1, str2, str3); */

            // 9. 
/* let a = 'abcde';
let newString = a[4] + a[3] + a[2] + a[1] + a[0];
console.log(newString); */

            // 10. 
/* let str = 'abcde';
let num = 3;
console.log(str[num]); */

            // 11.
/* let str = 'abcde';
let last = str.length - 1;
console.log(str[last]); */

            // 12. Penaltimate Symbol
/* let str = 'abcdetjsdflj';
let penultimateSymbol = str.length - 2;
console.log(str[penultimateSymbol]); */

            // 13. The Penultimate Symbol
/* let str = 'abcdetjsdflj';
let thePenultimateSymbol = str.length - 3;
console.log(str[thePenultimateSymbol]);  */

            // 14. String with numbers inside. Find the sum of symbols.
/* let str = '12345';
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]);
console.log(sum); */

            // 15. Multiplication of numbers
/* let str = '12345';
let multiplicationOfNumbers = str[0] * str[1] * str[2] * str[3] * str[4];
console.log(multiplicationOfNumbers); */

            // 16. Inversion
/* let str = '12345';
let newString = str[4] + str[3] + str[2] + str[1] + str[0];
console.log(newString); */

            // 17. Shortened operations
/* let num = 47; 
num += 7;
num -= 18; 
num *= 10;
num /= 15; 
console.log(num); */

            // 18. Increment & Decrement
/* let num = 10; 
num++;
num++;
num--;
console.log(num); */

            // 19. 
/* let num = 3; 
console.log(num++);
console.log(num); */

            // 20. 
/* let num1 = 3; 
let num2 = num1++;
console.log(num1);
console.log(num2); */

            // 21. Rounding
/* console.log(0.1 * 0.2); */

            // 22. Rounding & converting a string to a number
/* console.log(+((0.3 - 0.1).toFixed(2))); */

            // 23. PROMPT
/* let name = prompt('What is your name?');
alert('Your name is: ' + name); */

/* alert('Enter your name:' + prompt ('What is your name?')); */

            // 24. 
/* alert('Your age is: ' + +prompt('What is your age?')); */

            // 25. 
/* let num1 = +prompt('Tell me the first number');
let num2 = +prompt('Tell me the second number');
alert(num1 + num2); */

            // 26. 
/* let questionSideOfTheSquare = prompt('Tell me the side of the square');
let squareArea = questionSideOfTheSquare ** 2; 
alert(squareArea); */

            // 27. Rectangle Perimeter
/* let sideOne = +prompt('Tell me the first side of the rectangle');
let sideTwo = +prompt('Tell me the second side of the rectangle');
let rectanglePerimeter = (sideOne + sideTwo) * 2; 
alert(rectanglePerimeter); */

            // 28. 
/* document.write(123); */

            // 29. 
/* document.write('Hello, World'); */

            // 30. 
/* document.write('<b>Hello, world!</b>'); */

            // 31. 
/* let str = 'text';
document.write(str); */

            // 32. 
/* let str = 'Hello, world!';
document.write('<br>' + str + '</br>'); */

            // 33. Document.write
/* document.write('text <br> text'); */

            // 34. Document.write
/* document.write('text1<br>');
document.write('text1<br>');
document.write('text1<br>');

document.write('text');
document.write('<br>');
document.write('text'); */

            // 35. 
/* document.write('Hello, it\'s me<br>');
document.write('<i>Hello, world!</i><br>');
let str = 'text';
document.write('<i>' + str + '</i>');
 */

            // 36. Output numbers from 1 to 5 to the column
/* document.write('<b>1<br>2<br>3<br>4<br>5</b>'); */

            // 37. Find the sum
/* let num1 = 1; 
let num2 = 2; 
let sum = num1 + num2; 
console.log('The sum is: ' + sum); */

            // Concatenation
/* let num1 = 1; 
let num2 = 2; 
console.log('The sum is: ' + num1 + num2); */

            // The sum with parenthesis
/* let num1 = 1; 
let num2 = 2; 
console.log('The sum is: ' + (num1 + num2)); */

            // 38. Sum the numbers from the string
/* let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum); */

            // 39. Output the first symbol of the number
/* let num = 123;
let str = String(num);
let firstSymbol = str[0];
console.log(firstSymbol); */

            // 40.
/* let a = 0; 
console.log(++a); */

            // 41. 
/* let num = 123; 
let str = String(num).length;
console.log(str); */

            // 42. 
/* let a = 24 * 60 * 60; 
console.log(a); */

            // 43. 
/* let num = 123;
let str = String(num);
let lastSymbol = str[str.length - 1];
console.log(lastSymbol); */

            // 44. 
/* let num = 123; 
let numberOfSymbols = String(num).length;
console.log(numberOfSymbols); */

            // 45. 
/* let a = '123';
let b = '456';
let sum = Number(a) + Number(b);
console.log(sum); */

            // 46. 
/* let aaa = 1;
let bbb = 2; 
let ccc = 3; 
console.log(aaa + bbb + ccc); */

            // 47. 
/* let secondsInOneDay = 60 * 60 * 24; 
let secondsIn30Days = secondsInOneDay * 30; 
console.log(secondsIn30Days); */

            // 48. 
/* let bytesInKilobyte = 1024;
let kilobytesInMegabyte = 1024 ** 2;
console.log(kilobytesInMegabyte); */

            // 49. CircleArea
/* let r = 5; 
let circleArea = r **2 * Math.PI.toFixed(2);
console.log(circleArea); */

            // 50. SquareArea
/* let a = 7; 
let s = a ** 2;
console.log(s); */

            // 51. Perimeter
/* let a = 7, b = 8; 
let rectanglePerimeter = 2 * (a + b);
let s = rectanglePerimeter;
console.log(s); */

            // 52. Rectangle Area
/* let a = 7, b = 8;
let rectangleArea = a * b;
let s = rectangleArea;
console.log(s); */

            // 53. Celsius to Fahrenheit
/* let tc = 38; 
let f = tc * 1.8 + 32;
console.log(f); */

            // 54. Fahrenheit to Celsius
/* let tf = 108; 
let tc = (tf - 32) / 1.8;
console.log(tc);
 */