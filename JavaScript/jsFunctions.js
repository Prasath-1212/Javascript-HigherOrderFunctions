function customMap(arr, callback) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i]));
    }
    return mappedArray;
}

function customFilter(arr, callback) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// Example usage:

function square(x) {
    return x * x;
}

function isEven(x) {
    return x % 2 === 0;
}

function add(x, y) {
    return x + y;
}

function printItem(item) {
    console.log(item);
}

let numbers = [1, 2, 3, 4, 5];

let mappedResult = customMap(numbers, square);
console.log("Mapped Result:", mappedResult);

let filteredResult = customFilter(numbers, isEven);
console.log("Filtered Result:", filteredResult);

let reducedResult = customReduce(numbers, add, 0);
console.log("Reduced Result:", reducedResult);

console.log("Printing Items:");
customForEach(numbers, printItem);
