/* 183. Массив с анонимными функциями в JavaScript */
/*  1. Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. 

let arr = [
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
];
 */

/* 2. Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
let arr = [
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
];
console.log(arr[2]()); */

/* 3. Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
let arr = [
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
];
let a = arr[0]();
let b = arr[1]();
let c = arr[2]();
console.log(a + b + c); */

/* 4. Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.

let arr = [
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
];
for (let func of arr) {
    console.log(func());
} */

/* 5. Объект с анонимными функциями в JavaScript
Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, 
вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.

    let obj = {
        func1 : function() {return 1;},
        func2 : function() {return 2;},
        func3 : function() {return 3;} 
    }
    console.log(obj.func1() + obj.func2() + obj.func3()); */

    /* 6. Переберите созданный объект циклом и выведите результаты работы функций в консоль.
    let obj = {
        func1 : function() {return 1;},
        func2 : function() {return 2;},
        func3 : function() {return 3;} 
    };
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]();
    }
    console.log(sum); */

    /* 7. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. 
    Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.


    let sum = 0, sum1 = 0, sum2 = 0; 
    let obj = {
        sumOfelements : function(arr) {
            for (let elem of arr) {
                sum += elem;
            }
            return sum;
        },
        sumOfSquares : function(arr) {
            for (let elem of arr) {
                sum1 += elem * elem; 
            }
            return sum1; 
        }, 
        sumOfCubes : function(arr) {
            for (let elem of arr) {
                sum2 += Math.pow(elem, 3);
            }
            return sum2;
        }};
    let numbers = [1, 2, 3, 4, 5];
    obj.sumOfelements(numbers);
    obj.sumOfSquares(numbers);
    obj.sumOfCubes(numbers);
    console.log(sum);
    console.log(sum1);
    console.log(sum2); */

    /* 8. Сделайте функцию test, параметрами принимающую 3 функции. 
    Передайте в нее первым параметром функцию, возвращающую 1, 
    вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.

    function test(a, b, c) {
        console.log(a() + b() + c());
    }
    test(function() {return 1;}, function() {return 2;}, function(){return 3;}); */

     