      /*   1. 
let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {a: 0, b: 0, c: 0};

for (let elem of arr) {
    count[elem]++;
}
console.log(count); */

/*
        2. 
let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr) {
    if (count[elem] === undefined) {
        count[elem] =1;
    } else {
        count[elem]++;
    }
}
console.log(count); */

  /*       3. My own example

let arr = ['book', 'pencil', 'paper', 'book', 'book'];
let count = {};

for (let elem of arr) {
    if (count[elem] === undefined) {
        count[elem] = 1;
    } else {
        count[elem]++;
    }
}
console.log(count); */

  /*       4. My own example

let product = ['apple', 'mango', 'bread', 'carrot'];
let quantity = [5, 3, 6, 7];

let ProductsAndTheirNumber = {};

for (let i = 0; i <= product.length - 1; i++) {
    let key = product[i];
    let value = quantity[i];

    ProductsAndTheirNumber[key] = value;
}
console.log(ProductsAndTheirNumber); */

 /*        5. My example

let names = ['Anatoly', 'Tatiana', 'Anatoly', 'Ekaterina', 'Alex', 'Tatiana'];
let newArr = [];
for (let i = 0; i < names.length; i++) {
   newArr.push(names[i]);
}

for (let elem of newArr) {
    if (elem === 'Tatiana') {
        continue;
    } else {
        console.log(elem);
    }
}
console.log(newArr);  */

     /*    6. My example: to sort names and to make a new massive with those which don't repeat
let names = ['Anatoly', 'Tatiana', 'Anatoly', 'Ekaterina', 'Alex', 'Tatiana'];
let count = {};

for (let elem of names) {
    if (count[elem] === undefined) {
        count[elem] = 1; 
    } else { 
        count[elem]++;
    }
} console.log(count);

let newNames = [];
for (let keys in count) {
    newNames.push(keys);
}
console.log(newNames); */

 /*       7. How many times do we meet each symbol in the string
let str = 'hello, my name is Alex';
let count = {};

for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (count[letter] === undefined) {
        count[letter] = 1;
    } else {
        count[letter]++;
    }
} console.log(count);
 */

/*         8. 
let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1]);
} */

/*         9.
 let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i]);
} */ 

/*         10. 
let arr = [10, 15, 2, 5, 7];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
} */

/*         11. 
let arr = [10, 15, 2, 5, 7];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i]);
} */        

/* 12.
let arr = [10, 15, 2, 5, 7];
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i] + arr[i - 1] + arr[i - 2]);
} */ 

/*         13. New array and pushing of two numbers
let arr = [10, 15, 2, 5, 7];
let arrNew = [];
for (let i = 2; i < arr.length; i++) {
    arrNew.push(arr[i - 1], arr[i - 2]);
} console.log(arrNew); */

/*        14. Output the previous, the current and the following numbers in console.
let arr = [10, 15, 2, 5, 7];
let arrNew = [];
for (let i = 1; i < arr.length - 1; i++) {
    arrNew.push(arr[i - 1], arr[i], arr[i + 1]);
} console.log(arrNew);  */

        /* 15. Find the sum of numbers that are divisible by 3

let sum = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let elem of arr) {
    if (elem % 3 === 0) {
        sum += elem;
    }
}
console.log(sum); */

/*         16. Find numbers which have the first number - 1 or 2
let arr = [10, 20, 30, 40, 21, 32, 51];

for (let i = 0; i < arr.length; i++) {
    str = String(arr[i]);
        if (str[0] === '1' || str[0] === '2') {
        console.log(arr[i]);
    }
} */

/*         17. 
let arr = ['21', '32', '34', '43', '45', '54', '55'];
let sum = 0;

for (let elem of arr) {
        if (+elem[0] === +elem[1] + 1) {
            sum += +elem
        }
}
console.log(sum); */

/*         18. Find mistakes

let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let keys in obj) {
    let value = obj[keys];
    let str = String(value);

        if (str[0] === '1' || str[0] === '2') {
            sum += +str;
        }
} console.log(sum); */

/*         19.
for (let i = 0; i < 11; i++) {
    console.log(i);
} */

/*         20. 

for (let i = 10; i >= 0; i--) {
    console.log(i);
} */

/*         21.
for (let i = 10; i >= 0; i--) {
    console.log(i);
} */

/*         22. 
let i = 0;

while (i < 11) {
    console.log(i);
    i++;
} */

/*         23.
let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res); */

/*         24.
let res = 1;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res); */

/*         25.

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    let num = Number(elem);
    sum += num;
}

console.log(sum); */

/*         26. 
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum); */

/*         27.

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum); */

/*         28. To push new numbers, in the 2nd degree each
let arr = [1, 2, 3, 4, 5];
let arrNew = [];
for (let elem of arr) {
    elem = elem ** 2;
    arrNew.push(elem);
}
console.log(arrNew); */

/*         29. 
let arr = [];
for (let i = 1; i < 6; i++) {
    arr.push(i);
} console.log(arr); */

  /*       30. 

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let keys in obj) {
    let value = obj[keys];
    sum += value;
}

console.log(sum); */

/*         31. 
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
    if (elem === 3) {
        res = '+++';
        break;
    } else {
        res = '---';
    }
}
console.log(res); */

/*         32. 
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr); */

/*         33. 
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
    if (elem === 3) {
        res = true;
        break;
    }
}

console.log(res); */

 /*        34. 

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}
 */
/*         35. 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];
for (let elem of arr) {
    if (elem % 2 !== 0) {
        res.push(elem);
    }
}
console.log(res); */

/*         36. 
for (let i = 1; i <= 100; i++) {
    console.log(i);
} */

   /*      37. 
for (let i = 100; i >= 0; i--) {
    console.log(i);
} */

/*         38. 
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} */

/*         39. 
let arr = [];
for (let i = 0; i < 11; i++) {
    arr.push('x');
} 
console.log(arr); */

/*         40. 
let arr = [];
for (let i = 1; i < 11; i++) {
    arr.push(i);
}
console.log(arr); */

/*         41. 
let arr = [5, 14, 3, 6, 8, 14, 325];
for (let elem of arr) {
    if (elem < 10 && elem > 0) {
        console.log(elem);
    }
} */
/* 
        42. 
let arr = [5, 14, 3, 6, 5, 8, 14, 325];
let flag = false;
for (let elem of arr) {
    if (elem === 5) {
        flag = true;
    }
}
console.log(flag); */

   /*      43. 
let arr = [5, 14, 3, 6, 5, 8, 14, 325];
let sum = 0;

for (let elem of arr) {
    sum += elem;
}
console.log(sum); */

/*         44. 
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let elem of arr) {
    let secondDegree = elem ** 2;
    sum += secondDegree;
}
console.log(sum); */

/*         45. 
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let count = 0;

for (let elem of arr) {
    sum += elem;
    count++;
}
let result = sum / count;
console.log(result);
console.log(count);
console.log(sum); */

    /*     46. 
let a = 7; 
let factorial = 1; 
for (let i = 7; i > 0; i--) {
    factorial *= i;
}
console.log(factorial); */

    /*     47. 
let arr = [];
for (let i = 10; i > 0; i--) {
    arr.push(i);
}
console.log(arr); */
/* 
        48. 
let arr = [-1, 5, -15, -6, 5, 8];
let sum = 0;
for (let elem of arr) {
    if (elem > 0) {
        sum += elem;

    } 
} 
console.log(sum); */

  /*       49. 
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    let str = String(elem);
        if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
            console.log(str);
        }
} */

   /*      50. 
let arr = [10, 20, 30, 50, 235, 3000];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    newArr.push(arr[i]);
}
console.log(newArr); */

   /*      51. 
let arr = [1, 2, 3, 3, 6, 3, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    }
}
 */

/*         52. 
let arr = [1, 2, 3, 3, 6, 3, 5];
for (let elem of arr) {
    document.write(elem + '<br>');
} */

/*         53.
let arr = [1, 2, 3, 3, 6, 3, 5];
for (let elem of arr) {
    document.write('<p>' + elem + '</p>');
} */

        /* 54. Amazing try by myself, success
let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let weekdays = ['workdays', 'weekends'];
let obj = {};
let workdays = [];
let weekends = [];
let week = [workdays, weekends];

for (let i = 0; i < arr.length; i++) {
   let days = arr[i];
    if (i < 5) {
        workdays.push(days);
    } else {
        weekends.push(days);
    }
}

for (let i = 0; i < weekdays.length; i++) {
    obj[weekdays[i]] = week[i];
}
console.log(obj); */

/*         55. 
let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
for (let i = 0; i < arr.length; i++) {
    if (i < 5) {
        document.write(arr[i] + '<br>');
    } else {
        document.write('<b>' + arr[i] + '</b>' + '<br>')
    }
} */

   /*      56. 
let day = 'friday';
let arr = [];
let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

for (let elem of weekdays) {
    if (elem === day) {
        document.write('<b>' + elem + '</b>'  + '<br>')
    } else {
        document.write(elem  + '<br>');
    }
} */

    /*     57.
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let key in obj) {
    obj[key] += 100;
}
console.log(obj); */

    /*     58. 
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let keys in obj) {
    if (obj[keys] < 400) {
        obj[keys] += 100;
    }
}
console.log(obj); */
        
      /*   59. 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let newArr = {}; 

for (let i = 0; i < arr1.length; i++) {
    newArr[arr1[i]] = arr2[i];
}
console.log(newArr); */

/*         60. 
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumOfKeys = 0;
let sumOfElements = 0;
for (let keys in obj) {
    sumOfKeys += +keys;
    let elem = obj[keys];
    sumOfElements += elem;
}
console.log(sumOfKeys / sumOfElements); */

/*         61. 
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];
for (let keys in obj) {
    arr1.push(keys);
    arr2.push(obj[keys]);
}
console.log(arr1);
console.log(arr2); */

    /*     62. 
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};

let arr = [];

for (let keys in obj) {
    let str = String(obj[keys]);
        if (str[0] === '1' || str[0] === '2') {
            arr.push(str);
        }
}
console.log(arr); */

/*         63. 
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
let arr1 = [];

for (let i = 1; i <= arr.length; i++) {
    arr1.push(i);
}

for (let i = 0; i < arr.length; i++) {
    obj[arr1[i]] = arr[i];
}
console.log(obj); */

/*         64. Finished !!! with arrays and objects. 

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
let arr2 = [];

for (let i = 1; i <= arr.length; i++) {
    arr2.push(i);
} 

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr2[i];
}
console.log(obj); */




