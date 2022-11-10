/*      1. Nested array
let result = '';
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        result += i;
    }
}
console.log(result); */

/* 
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
} */

/*
        2. Output the line of numbers with nested cycles 11 12 13 21 22 23 31 32 33 
let result = '';
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        result += String(i) + String(j) + ' ';
    }
}
console.log(result); */

/*
        3. Filling of an array with numbers
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr); */
/*
        4. Fill the array with 10 'x'
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}
console.log(arr); */
/*
        5. Fill the empty array (arr2) with positive numbers only from arr1
let arr = [1, 4, 6, -8, 9, 10];
let arr2 = [];
for (let i = 0; i <= arr.length-1; i++) {
    if (arr[i] > 0) {
        arr2.push(arr[i]);
    }
}
console.log(arr2); */

/*
        6. To raise the numbers to the second degree
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}
console.log(arr); */
/*
        7. Subtract 1 from each element
let arr = [24, 13, 45, 13, 52, 36];
for (let i = 0; i < arr.length; i++) {
    arr[i]--;
}
console.log(arr); */
/*
        8. Add 10 to each element
let arr = [24, 13, 45, 13, 52, 36];
for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}
console.log(arr); */
/*
        9. Out a new object
let arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj); */
/*
        10. Output a new object only with even numbers
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj1 = {};
for (let keys in obj) {
    if (obj[keys] % 2 === 0) {
        obj1[keys] = obj[keys];
    }
}
console.log(obj1); */

/*
        11.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj1 = {};
for (let keys in obj) {
    obj1[obj[keys]] = keys;
} console.log(obj1); */
/*
        12. Raise the elements of the object to the 2nd degree
let obj = {x: 1, y: 2, z: 3};
for (let keys in obj) {
    obj[keys] = obj[keys] ** 2;
}
console.log(obj); */

/*        13. 
let obj = {x: 1, y: 2, z: 3};
for (let keys in obj) {
    obj[keys]++;
}
console.log(obj); */

/*
        14. FLAG - variable
 let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem === 'c') {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log('+++');
} else {
    console.log('---');
} 
*/
/*/
        15. Find if the number is natural or not
 let a = 21; 
let flag = true;

if (String(a).length < 2) {
    if (a == 4 || a == 6 || a == 8 || a == 9) {
        flag = false; 
    }
} else {
    for (let i = 2; i <= 9; i++) {
        if (a % i == 0) {
            flag = false;
            break;
        }
    }
        }

if (flag === true) {
    console.log('natural');
} else {
    console.log('not natural');
}  
*/

/*
        16. 
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr) {
    if (elem == 3) {
        counter++;
    }
}
console.log(counter); */

/*
        17. 
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr) {
    if (elem == 2 || elem == 3) {
        counter++;
    }
} console.log(counter); */

