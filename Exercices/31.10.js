/*         1. Creating a multidimensional array
let arr = [];
let k = 1; 

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr[i].push(k);
        k++;
    }
}
console.log(arr);  */

   /*      2. Make an array
let arr = [];
let k = 1; 

for (let i = 0; i < 4; i++) {
    arr[i] = [];

    for (let j = 0; j < 2; j++) {
        arr[i].push(k);
        k++;
    }
}
console.log(arr); */

  /*       3. Make an array
let arr = [];
let k = 2; 

for (let i = 0; i < 4; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i].push(k);
        k += 2;
    }
}
console.log(arr); */

      /*   4. Make an array
let arr = [];
let k = 1; 

for (let i = 0; i < 2; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];

        for (let l = 0; l < 2; l++) {
            arr[i][j].push(k);
            k++;

        }
    }
}
console.log(arr); */

      /*   5. Find mistakes
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr[i].push(k);
        k++;
    }
}

console.log(arr); */

      /*   6. 
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

let part1 = obj.key1.key1 + obj.key1.key2 + obj.key1.key3;
let part2 = obj.key2.key1 + obj.key2.key2 + obj.key2.key3;
let part3 = obj.key3.key1 + obj.key3.key2 + obj.key3.key3;

let sum = part1 + part2 + part3;
console.log(sum);
 */

       /*  7.
let obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
};

let answer1 = obj[2][2];
console.log(answer1);

let answer2 = obj[3][1];
console.log(answer2); */

      /*   8. 
let obj = {
    key1: {
        a: 1, b: 2, c: {
            d: 3,
            e: 4,
        }, f: 5,
    },
    key2: {
        g: 6, h: 7,
    },
};

let firstPart = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f;
console.log(firstPart);

let secondPart = obj.key2.g + obj.key2.h;
console.log(secondPart);

let sum = firstPart + secondPart;
console.log(sum); */

        