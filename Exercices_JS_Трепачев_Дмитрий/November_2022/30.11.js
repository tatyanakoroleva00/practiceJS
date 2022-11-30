    //Методы для массивов в JavaScript
   /*  1. 
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); */

/*     2. 
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);  */

 /*    3. 
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first); */

  /*   4. 
let arr = [1, 2, 3];
let last = arr.pop();
console.log(last); */

   /*  5. 
let arr = [1, 2, 3, 4, 5];
arr = arr.slice(0, 3);
console.log(arr); */

   /*  6. 
let arr = [1, 2, 3, 4, 5];
arr = arr.slice(3);
console.log(arr); */

  /*   7. 
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); */

   /*  8. 
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(5, 0, 'c');
arr.splice(-1, 0, 'e');
console.log(arr); */

   /*  9. 
let arr = [1, 2, 3, 4, 5];
let indexOfThree = arr.indexOf(3);
console.log(indexOfThree); */

/*     10. 
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); */

  /*   11. londoN
let str = 'london';
let theLast = str.slice(-1).toUpperCase();
let result = str.slice(0, -1) + theLast;
console.log(result); */

   /*  12. LOndon
let str = 'london';
let letters = str.slice(0, 2).toUpperCase();
str = letters + str.slice(2);
console.log(str); */

   /*  13. london
let str = 'London';
let first = str.slice(0,1).toLowerCase();
str = first + str.slice(1);
console.log(str); */

   /*  14. 
let str = 'word1 word2 word3';
let arr = str.split(' ');

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let result = arr.join(' ');
console.log(result); */

   /*  15. 
let str = 'var_test_text';
let arr = str.split('_');

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1); 
}
let result = arr.join('');
console.log(result); */

   /*  16. 
let str = 'VarTestText';
console.log(str.toLowerCase()); */

   /*  17. Reverse words
let str = 'hello my love, how long i was wainting you';
str = str.split(' ').reverse().join(' ');
console.log(str); */

/*     18. Mistakes correction
let num = 12345;
num = String(num);
let arr = num.split('');
let sum = 0;
for (let digit of arr) {
    digit = +digit;
    sum += digit;
}

console.log(sum); */