        1. For cycle in arrays

/* let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
} */

        2. Cycle FOR reverse

/* let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]);
}; */

        3. 
/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

        4. 
/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
} */

        5. 
/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
 */

        6. 
/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
} */

        7. Numbers > 3 and < 10
/* let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
} */

        8. 
/* let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
    if (obj[key] % 2 !== 0) {
        console.log(obj[key]);
    }
} */

        9. Sum of even numbers
/* let sum = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
        console.log(sum);
        console.log(i);
    }
}
console.log(sum); */

        10. Sum of odd numbers 

/* let sum = 0;
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        sum += i;
        console.log(i);
        console.log(sum);
    }
}
console.log(sum); */

        11. Multiplication of numbers from 1 to 20
/* let mult = 1;
for (let i = 1; i <= 20; i++) {
    mult *= i;
    console.log(mult);
    console.log(i);
}
console.log(mult); */

        12. Add elements
/* let arr = [2, 5, 9, 3, 1, 4];
let sum = 0; 
for (let elem of arr) {
    sum += elem;
}
console.log(sum); */

        13. Find the sum of even numbers

/* let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let elem of arr) {
    if (elem % 2 === 0) {
        sum += elem;
    }
}
console.log(sum); */

        14. Find the product of numbers of the array
/* let arr = [2, 5, 9, 3, 1, 4]; 
let res = 1;
for (let elem of arr) {
    res *= elem;
}
console.log(res); */

        15. String and cycle
/* let str = '';
for (let i = 0; i < 5; i++) {
    str += '-';
}
console.log(str); */

        16. Make a string '123456789'
/* let str = '';
for (let i = 1; i < 10; i++) {
    str += i;
}
console.log(str); */

        17. 
/* let str = '';
for (let i = 9; i > 0; i--) {
    str += i;
}
console.log(str); */  

    18.
/* let str = '';
for (let i = 1; i < 10; i++) {
    if (i < 9) {
        str += '-' + i;
    }
    else {
        str += '-' + i + '-';
    }
}
console.log(str); */


        19. Out the first digit of a number from 10 to 1000
/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
} */

        20. Sum of the 1st and the 2nd digit. Numbers from 10 to 1000
/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    console.log(sum);
} */

        21. Output numbers starting with 1. From 10 to 1000;
/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let firstDigit = str[0];
        if (firstDigit === '1') {
        console.log(str);
    }
} */

        22. If the sum of the 1st and the 2nd digits is 5, output the number in console

/* for (let i = 10; i <= 1000; i++) {
    let str = String(i);
        let sum = Number(str[0]) + Number(str[1]);
            if (sum === 5) {
                console.log(str);
            }
} */

        23.
/* let arr = [1, 2, 3, 560, 0, 231, 45345];
for (let elem of arr) {
    if (elem === 0) {
        console.log(elem);
        break;
    }
    console.log(elem);
} */

        24. 
/* let arr = [1, 5, 7, -15, -18, 19];
let sum = 0;
for (let elem of arr) {
    sum += elem;
    if (elem < 0) {
        sum += 0;
        break;
    }
    console.log(sum);
} */

        25. 
/* let arr = [1, 5, 2, 18, 3, 6, 8, 2, 8];
let count = 0;
for (let elem of arr) {
    if (elem === 3) {
        console.log(count);
        break;
    }
    count++;  
} */

        26.
/* let sum = 0;
for (let i = 1; i < 100; i++) {
    sum += i;
    if (sum > 100) {
        console.log(i);
        break;
    }
    console.log(sum);
} */