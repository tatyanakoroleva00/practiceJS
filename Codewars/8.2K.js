/*      101. Difference of Volumes of Cuboids
function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
    }  */

/*     102. Student's Final Grade
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    else return 0
    } */

/*     103. Is it even?
function testEven(n) {
    if (n != parseInt(n) && n !== 0) return false;
    else {
        return (n % 2 === 0);
    }
}  */

/*     // smart solution found
function testEven(n) {
    return n%2===0;
} */    

/*     104. Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
    } */

/*     105. Filter out the geese
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(item => !geese.includes(item));
    }; */

/* 106. What is between?
function between(a, b) {
    let arr = [];
        for (let i = a; i <= b; i++) {
            arr.push(i);
        } return arr
    } */

   /*  107. Well of Ideas - Easy Version
function well(x){
    let good = 0; 
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') good++;
    }
    switch(good) {
        case 1:
        case 2: 
            return 'Publish!'
        case 0: 
            return 'Fail!'
        default:
            return 'I smell a series!'
    }
    } */

/*     //smart answer found
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
            good_count < 3 ? 'Publish!' : 'I smell a series!';
    } */

/*         108. Grasshopper - Terminal game move function
function move (position, roll) {
    return roll * 2 + position
    } */

/*     109. My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse()
    } */

/*     110. N-th Power
function index(array, n){
    if (n > array.length - 1) return -1;
    return Math.pow(array[n], n)
    } */

/*     111. Is the string uppercase?
String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
    } */

/*     112. Grasshopper - Debug sayHello
function sayHello(name) {
    return 'Hello, ' + name 
    } */

/*     113. Stringy Strings
function stringy(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        i % 2 === 0 ? arr.push(0) : arr.push(1)
    } return arr.join('');
    }
     */

/*     114. Grasshopper - If/else syntax debug
function checkAlive (health) {
    return health > 0
    } */

/*     15. Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    return n < 5 ? 100 * n
            : n >= 10 ? 90 * n
            : 95 * n
    } */