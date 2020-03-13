//will upload problems upon completion!
//Remove Trailing and Leading Zeros
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
//
// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples
// removeLeadingTrailing("230.000") ➞ "230"
//
// removeLeadingTrailing("00402") ➞ "402"
//
// removeLeadingTrailing("03.1400") ➞ "3.14"
//
// removeLeadingTrailing("30") ➞ "30"

function removeLeadingTrailing(n) {
    return Math.abs(n);
}

//another answer which I found great but need to learn more about:

const removeLeadingTrailing = n => ''+(+n);


//second

//The Most Brilliant Exciting Fantastic Number
// Given a number n, return a sentence which describes the number in the following ways.
//
// Always start the string with "The most ".
// If n is evenly divisible by 1, add "brilliant " to the sentence.
// If n is evenly divisble by 2, add "exciting " to the sentence.
// ... 3, add "fantastic " to the sentence.
// ... 4, add "virtuous " to the sentence.
// ... 5, add "heart-warming " ...
// ... 6, add "tear-jerking " ...
// ... 7, add "beautiful " ...
// ... 8, add "exhilarating " ...
// ... 9, add "emotional " ...
// If n is evenly divisible by 10, add "inspiring " to the sentence.
// Always end the string with "number is n!".

const descriptors = [
    'brilliant',
    'exciting',
    'fantastic',
    'virtuous',
    'heart-warming',
    'tear-jerking',
    'beautiful',
    'exhilarating',
    'emotional',
    'inspiring',
]
const max = 10

function describeNum(n) {
    const adjectivesToUse = []
    for(let i=1; i <=max; i++){
        if(n % i === 0)
            adjectivesToUse.push(descriptors[i-1])
    }

    return `The most ${adjectivesToUse.join(' ')} number is ${n}!`
}

//another interesting answer but not sure what the null does:

function describeNum(n) {
    let arr = ["The most"];
    n % 1 === 0 ? arr.push("brilliant") : null;
    n % 2 === 0 ? arr.push("exciting") : null;
    n % 3 === 0 ? arr.push("fantastic") : null;
    n % 4 === 0 ? arr.push("virtuous") : null;
    n % 5 === 0 ? arr.push("heart-warming") : null;
    n % 6 === 0 ? arr.push("tear-jerking") : null;
    n % 7 === 0 ? arr.push("beautiful") : null;
    n % 8 === 0 ? arr.push("exhilarating") : null;
    n % 9 === 0 ? arr.push("emotional") : null;
    n % 10 === 0 ? arr.push("inspiring") : null;
    arr === arr.push(`number is ${n}!`);
    return arr.join(' ');
}

//
function describeNum(n) {
    let words= ["no", "brilliant ", "exciting ", "fantastic ", "virtuous ", "heart-warming ", "tear-jerking ", "beautiful ",
        "exhilarating ", "emotional ","inspiring "];
    var result= "The most ";
    for (let i=1; i<words.length; i++) {
        if (n%i===0) {result= result+ words[i];}
    } return result+ "number is "+n+"!";
}

///problem 3:
//Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
//
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
//
// Write a function that returns the total number of non-nested items in a nested array.
//
// Examples
// getLength([1, [2, 3]]) ➞ 3
//
// getLength([1, [2, [3, 4]]]) ➞ 4
//
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
//
// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
    let count = 0;
    arr.forEach(item => {
        if (Array.isArray(item)) {
            count += getLength(item);
        } else {
            count++;
        }
    });
    return count;
}