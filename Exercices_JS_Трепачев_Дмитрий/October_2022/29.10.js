   /*      1. Multidimensional array
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]); */

/*         2. 
let arr = [[1, 2], [3, 4], [5, 6]];
let sum0 = arr[0][0] + arr[0][1];
let sum1 = arr[1][0] + arr[1][1];
let sum2 = arr[2][0] + arr[2][1];
let res = sum0 + sum1 + sum2;
console.log(res); */

 /*       3. Three dimensional array

 let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];

let sum0 = arr[0][0][0] + arr[0][0][1];
let sum1 = arr[0][1][0] + arr[0][1][1];
let sum2 = arr[1][0][0] + arr[1][0][1];
let sum3 = arr[1][1][0] + arr[1][1][1];
let res = sum0 + sum1 + sum2 + sum3;
console.log(res); */

 /*        4. Find the sum of elements
let arr = [
    [1, 2, 3, [4, 5, [6, 7]]], 
    [8, [9, 10]]
];

let sum0 = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] 
+ arr[0][3][2][1];
console.log(sum0);
let sum1 = arr[1][0] + arr[1][1][0] + arr[1][1][1];
console.log(sum1);
let res = sum0 + sum1;
console.log(res); */

/*         5.
let arr = [[1, 2, 3], [4, 5], [6]];
for (let subArr of arr) {
    for (let elem of subArr) {
        console.log(elem);
    }
} */

/*         6.
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let subArr of arr) {
    for (let subSubArr of subArr) {
        for (let elem of subSubArr) {
            console.log(elem);
        }
    }
} */        

/*         7. 
let arr = [[1, 2, 3], [4, 5], [6]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
} */

   /*      8. 
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            console.log(arr[i][j][k]);
        }
    }
} */

/*         9. 
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 1; j <= 3; j++) {
        arr[i].push(j);
    }
}
console.log(arr); */

/*         10. 
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    
    for (let j = 1; j < 6; j++) {
        arr[i].push(j);
    }
}
console.log(arr); */

   /*      11. 
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 4; j++) {
        arr[i].push('x');
    }
}
console.log(arr); */

   /*      12. 
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];

        for (let k = 1; k < 6; k++) {
            arr[i][j].push(k);
        }
    }
}
console.log(arr); */
