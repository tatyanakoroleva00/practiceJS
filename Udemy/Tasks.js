/* // Задачи на работу с массивами
    1. 
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) return 'Семья пуста';
    else return 'Семья состоит из: ' + arr.join(' ');
}
showFamily(family); */

/*     2. 
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((el) => {
        console.log(el.toLowerCase());
    });
}
standardizeStrings(favoriteCities); */

 /*    3. Задача с собеседований. Напишите функцию reverse, 
которая принимает в себя строку и возвращает эту строку в обратном порядке.
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != "string")  return "Ошибка!";
    else {
        let arr = str.split('').reverse();
        let newArr = [];
            for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
            }
    return (newArr.join(''));
    }
}
reverse(someString); */

  /*       //4. 
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(arr, missingCurr) {
    if (arr.length === 0) return 'Нет доступных валют';
    else {
        let str = 'Доступные валюты:\n';

        for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
                continue;
          } str += arr[i] + '\n';
         }
        return str
    }
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'); */

    //Test
 
    //Debugging
/*     const restorantData = {
        menu: [
            {
                name: 'Salad Caesar',
                price: '14$'
            },
            {
                name: 'Pizza Diavola',
                price: '9$'
            },
            {
                name: 'Beefsteak',
                price: '17$'
            },
            {
                name: 'Napoleon',
                price: '7$'
            }
        ],
        waitors: [
            {name: 'Alice', age: 22}, {name: 'John', age: 24}
        ],
        averageLunchPrice: '20$',
        openNow: true
    };

    
    function isOpen(prop) {
        let answer = '';
        !prop ? answer = 'Закрыто' : answer = 'Открыто';
        return answer;
    }
    console.log(isOpen(restorantData.openNow));

    
    
    function isAverageLunchPriceTrue(fDish, sDish, average) {
        if (fDish.price.slice(0, -1) + sDish.price.slice(0, -1) < average.slice(0, -1)) return 'Цена выше средней';
        else return 'Цена ниже средней';
    }

    console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

    
    function transferWaitors(data) {
        let copy = Object.assign({}, data);
    
        copy.waitors = [{name: 'Mike', age: 32}];
        return copy;
    }
    
    transferWaitors(restorantData); */