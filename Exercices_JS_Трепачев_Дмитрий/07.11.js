/* let goods = {
    'books': {'A.Alex': 'Tree', 
            'B.Bryan': 'House'},
    'tools': {'pencil': 2, 'ruler': 3, 'pencil case': 4},
}; */

 /*            1. First try
let goods = {};
goods.books = {};
goods.tools = {};

goods.books['A.Alex'] = 'Tree';
goods.books['B.Bryan'] = 'House';
goods.tools.pencil = 2; 
goods.tools.ruler = 3;
goods.tools['pencil case'] = 4;
console.log(goods); */

        /*     2. Second try
let goods = [];
goods.push('books', 'tools');
    for (let i = 0; i < goods.length; i++) {
        goods[i] = {};
        if (i == 0) {
            goods[i].books = 'My book';
        } else {
            goods[i].tools = '15';
        }
    }
console.log(goods); */

            /* 3. Days in english and russian
let days = {};
days.ru = [];
days.en = [];
days.ru.push('пон', 'вт', 'среда');
days.en.push('monday', 'tuesday', 'wednesday');
console.log(days); */

       /*  4. 
let company = {};
company.employees = {};
company.employers = {};
company.offices = {};


company.employees.group1 = {};
company.employees.group2 = {};
company.employees.group1.Mike = 'Petrov';
company.employees.group2.Susan = 'Boyle';

company.employers.Andrew = 'Michigan';

company.offices.kitchen = '25m';
company.offices.bureau = '8m';
console.log(company); */

            /* BOOK: Web на практике для fullstack-разработчиков */
/* alert('Hi');
 */

/* if (confirm('Press "OK" or "Cancel"')) {
    alert('Ok');
} else {
    alert('Cancel');
}
 */
     /*        Alert message (Age);
    if (confirm('Are you 18+?')) {
        alert('Ok, you can visit this website');
    } else {
        alert('Sorry, you should leave this website');
    }
 */

   /*  const yourName = prompt('Hey, what is your name?','Mike');
    if (yourName == null) {
        alert('bye!');
    } else {
        document.write('hi, ' + yourName +' ! How are you?');
    } */

     /*        My own practice. With methods. Alert messages, confirm and prompt

    alert('Hi, dear newcomer!\nI want you to answer a question and to give me your name!')
    const response = confirm('Are you 18+?');
        if (response === true) {
            alert('Ok, you can stay on this website!');
                const yourName = prompt('Tell me your name, please!');
                    if (yourName == null) {
                        alert('Ok, sorry, bye!');
                    } else {
                        alert('Thank you, ' + yourName + ' ! Hope, you\'re doing well!');
                    }
        } else {
            alert('Sorry, but you can\'t proceed! Bye!');
        }
 */

            