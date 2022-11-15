            //1.
/*let obj = {};
let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj[1]);*/
            //2.
/*let obj = {
    1: 'Monday',
    2: 'Tuesday', 
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday', 
    6: 'Saturday',
    7: 'Sunday'
}
console.log(obj);*/
            // 3. Objects and keys-'strings'
/*let obj = {a: 1, b: 2, c: 3};
console.log(obj['a']);*/
            //4. Output to the console name, surname and patronymic separated by a space. 
/*let user = {
    name: 'Koroleva',
    surname: 'Tatiana',
    patronymic: 'Alexandrovna'
};
let a = user['name'];
let b = user['surname'];
let c = user['patronymic'];
console.log(`${a} ${b} ${c}`);*/

            // 5. An alternative way to output the object value
/*let obj = {a: 1, b: 2, c: 3};
console.log(obj.a);*/

            //6. Output data
/*let data = {
    year: 2022 , 
    month: 'october',
    day: 18
};

let a = data.year,
    b = data.month,
    c = data.day;

let result = a + '-' + b + '-' + c;
console.log(result);
*/
            //7. Exclusions in writing keys
/*
let obj = {'1key': 'a', 'key-2': 'b', key3: 'c'};
console.log(obj['1key']);
*/

            //8. Exclusion
/*let obj = {
    '1a': 1,
    b2: 2,
    'c-c': 3,
    'd 4': 4,
    e5: 5
};
console.log(obj);*/

            //9. Object modification
/*let obj = {x: 1, y: 2, z: 3};
let a = obj.x * obj.x;
let b = obj.y * obj.y;
let c = obj.z * obj.z;
console.log(a, b, c);
*/

            // 10. Adding elements into an object
/*let obj = {};
obj['a'] = 1;
obj['b'] = 2;
obj.c = 3;
console.log(obj);
*/

            //11. Create a new object and fill in the object with the values
/*let obj = {};
obj.name = 'Alex';
obj.age = 18;
obj.city = 'Moscow';
console.log(obj);
*/

            //12.Massive made out of object keys
/*let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys);
*/

            //13. Massive's length, consisting of object keys
/*let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys.length);
*/

            //14. Object keys stored in variables
/*let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);
*/

            //15. Object and keys
/*let obj = {
    x: 1,
    y: 2,
    z: 3
};
let key1 = 'x',
    key2 = 'y',
    key3 = 'z';

obj = {
    [key1]: 1,
    [key2]: 2,
    [key3]: 3
};
console.log(Object.keys(obj));*/

            //16. Operator "in" in object, search of an atribute
/*
let obj = {a: 1, b: 2, c: 3};
console.log('b' in obj);
*/
            //17.Delete an element in object
/*let obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(obj);
*/
            //18. Delete an element. Result: false
/*
let obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log('b' in obj);
*/

            //19. Typeof object
/*
let obj = {a: 1, b: 2, c: 3};
console.log(typeof obj);
*/

            //20. Typeof an element in the object
/*let obj = {a: 1, b: 2, c: 3};
console.log(typeof obj.a);*/

   //  Массивы - частный случай объекта. Выводится объект
   // Функция Array.isArray([]) - true, помогает выявить массив

            //21. Link object
/*Переменная, хранящая массив не содержит его, а содержит ссылку на массив. 
/*
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = obj1;
obj2.a = 5;
console.log(obj1);
obj1.a = 10;
console.log(obj1);
*/

             //22. Const obj, array. Запрет менять значения, но свойства можно. 
/*const obj = {a: 1, b: 2, c: 3};
obj.a = 2;
console.log(obj);*/

             //23. Massive changing
/*const arr = ['a', 'b', 'c'];
arr[0] = 3;
console.log(arr);
*/

             //24. 
/*const arr = ['a', 'b', 'c'];
arr = [1, 2, 3]
console.log(arr);*/