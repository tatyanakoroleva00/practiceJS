// For example, for the provided input [1, 2, 3] the 
// transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numberArray) {
    const newArr = [];
    numberArray.map((item) => {
        item = {val : item};
        newArr.push(item);
    })
    console.log(newArr);
}
transformToObjects([1, 2, 3]);