/*  1. Array.diff (long intuitive method)

My attempt to find in the array 2 all items presented  in array a, delete them and 
to leave the array a with what is left in it

let a = [1, 2, 2]; // remove from here, if they are present in b
let b = [2];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            delete a[i];
            break;
        }
    }
} 
let k = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] != null) {
        k.push(a[i]);
    }
}
console.log(k);
 */

/*     1*. Best practices. Array.diff
//Let's make long story short :)

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  } */