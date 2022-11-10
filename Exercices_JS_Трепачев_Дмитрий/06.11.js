/*             1. Iterating over multidimensional objects
let obj = {
    a: {
        1: 'a1',
        b: 'a2',
        c: 'a3',
    },
    b: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    c: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
};
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        console.log(subObj[subKey]);
    }
} */

/*       2.
let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
};
let sum = 0;
for (let key in obj) {
   let subObj = obj[key];
   for (let subKey in subObj) {
        sum += subObj[subKey];
   }
}
console.log(sum); */


/*         3. 
let obj = {
    1: {
        1: {
            1: 111, 
            2: 112,
            3: 113,
        },
        2: {
            1: 121, 
            2: 122,
            3: 123, 
        },
    },
    2: {
        1: {
            1: 111, 
            2: 112,
            3: 113,
        },
        2: {
            1: 121, 
            2: 122,
            3: 123, 
        },
    },
    3: {
        1: {
            1: 111, 
            2: 112,
            3: 113,
        },
        2: {
            1: 121, 
            2: 122,
            3: 123, 
        },
    },
};

let sum = 0;

for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        let subSubObj = subObj[subKey];
        for (let subSubKey in subSubObj) {
            sum += subSubObj[subSubKey];
        }
    }
}
console.log(sum); */

        /*     4. 
let days = {
    'ru': ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    'en': ['mn', 'tu', 'wd', 'th', 'fr', 'st', 'sn'],
};

console.log(days.ru[2]);
console.log(days['en'][1]); */

      /*       5. 
let students = {
    'group1': ['name11', 'name12', 'name13'],
    'group2': ['name21', 'name22', 'name23'],
    'group3': ['name31', 'name32', 'name33'],
};

console.log(students['group3'][0]); */

  /*           6. FOR IN and FOR OF
let students = {
    'group1': ['student11', 'student12', 'student13'],
    'group2': ['student21', 'student22', 'student23'],
    'group3': ['student31', 'student32'],
};

for (let group in students) {
    for (let name of students[group]) {
        console.log(name);
    }
} */

          /*   7. 
let data = {
    1: ['data11', 'data12', 'data13'],
    2: ['data21', 'data22', 'data23'], 
    3: ['data31', 'data32', 'data33'],
    4: ['data41', 'data42', 'data43'],
};

for (let number in data) {
    for (let name of data[number]) {
        console.log(name);
    }
} */

      /*       8. 
let data = [
    {
        1: 'data11',
        2: 'data12',
        3: 'data13',
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data23',
    },
    {
        1: 'data31',
        2: 'data32',
        3: 'data33',
    },
];

for (let elem of data) {
   for (let key in elem) {
    console.log(elem[key]);
   }
} */

      /*       9. 
let data = [
    {
        1: ['data111', 'data112', 'data113',],
        2: ['data121', 'data122', 'data123',],
    },
    {
        1: ['data211', 'data212', 'data213',],
        2: ['data221', 'data222', 'data223'],
    },
    {
        1: ['data411', 'data412', 'data413',],
        2: ['data421', 'data422', 'data423',],
    },
];

for (let obj of data) {
    for (let key in obj) {
        for (let elem of obj[key]) {
            console.log(elem);
        }
    }
} */


 /*        Additional, By myself
let obj = [];
for (let i = 0; i < 2; i++) {
    obj[i] = [];
    for (let j = 1; j < 3; j++) {
        obj[i].push(j);
    }
}
console.log(obj); */

  /*           Additional, create [ [ 0, 1, 2, 3, 4 ], [ 0, 1, 2 ] ]
let obj = [];
for (let i = 0; i < 2; i++) {
    obj[i] = [];

    if (i === 0) {
        for (let j = 0; j < 5; j++) {
            obj[i].push(j);
        }
    } else {
        for (let j = 0; j < 3; j++) {
            obj[i].push(j);
        }
    }
}
console.log(obj); */

   /*     Additional task for myself. Create [ [ 5, 8, 11 ], [ 0, 1 ] ]
 let obj = [];
for (let i = 0; i < 2; i++) {
    obj[i] = [];
    
    if (i === 0) {
        for (let j = 0; j < 3; j++) {
            switch (j) {
                case 0: 
                    obj[i].push(5);
                    break;
                case 1:
                    obj[i].push(8);
                    break;
                case 2:
                    obj[i].push(11);
                    break;
            } 
        }
    } else {
        for (let j = 0; j < 2; j++) {
            obj[i].push(j);
        }
    }
}
console.log(obj); */

   /*              10.
let users = [
    {
        name: 'name1',
        surn: 'surn1',
    },
    {
        name: 'name2',
        surn: 'surn2',
    },
    {
        name: 'name3',
        surn: 'surn3',
    },
];

for (let user of users) {
    console.log(user.name + ' ' + user.surn);
}
 */

      /*   11. 
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees) {
    console.log(employee.name + ' - ' + employee.salary);
} */

/*         12. 
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];

let sum = 0;
for (let employee of employees) {
    sum += employee.salary;
}
console.log(sum); */

           /*      13. 
let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];

for (let employee of employees) {
    if (employee.age >= 30) {
        console.log(employee.salary);
    }
} */

          /*   14. 
let months = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};

let lang = 'ru';
let month = 5;

console.log(months[lang][month]); */

       /*  15. 
let affairs = {
    '2018': {
        11: {
            29: ['дело111', 'дело112', 'дело113'],
            30: ['дело121', 'дело122', 'дело123'],
        },
        12: {
            30: ['дело211', 'дело212', 'дело213'],
            31: ['дело221', 'дело222', 'дело223'],
        },
    },
    '2019': {
        12: {
            29: ['дело311', 'дело312', 'дело313'],
            30: ['дело321', 'дело322', 'дело323'],
            31: ['дело331', 'дело332', 'дело333'],
        }
    },
};

let month = 12; 
let year = 2019;
let day = 30;

console.log(affairs[year][month][day][1]); */

                /* 16. 
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]); */


               /*  17
let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
];

employees.push({
    'name': 'alex', 
    'salary': 700, 
    'age': 45,
});
console.log(employees); */

           /*  18.
let affairs = {
    '2019-12-28': ['data11', 'data12', 'data13'],
    '2019-12-29': ['data21', 'data22', 'data23'],
    '2019-12-30': ['data31', 'data32', 'data33'],
};

affairs['2019-12-29'].push('data24');
affairs['2019-12-29'].push('data25', 'data26');
console.log(affairs["2019-12-29"]); */


      /*       19.
let students = {
    'group1': {
        'subgroup11': ['student111', 'student112', 'student113'],
        'subgroup12': ['student121', 'student122', 'student123'],
    },
    'group2': {
        'subgroup21': ['student211', 'student212', 'student213'],
        'subgroup22': ['student221', 'student222', 'student223'],
    },
    'group3': {
        'subgroup31': ['student311', 'student312', 'student313'],
        'subgroup32': ['student321', 'student322', 'student323'],
    },
};

students['group1']['subgroup11'].push('student114');
students['group1']['subgroup13'] = [];
students['group4'] = {};
students['group4']['subgroup41'] = [];
students['group4']['subgroup41'].push('Mike', 'Angel');
console.log(students); */

