//Problem 1
multiple = (a, b, c) => a * b * c;
console.log(multiple(1, 2, 4));
//problem 1
const threeLines = `I am a web developer.
I love code.
I love briyani.`
console.log(threeLines);
//problem 1
add = (a, b = 2) => a + b;
console.log(add(1));
//problem 2
// const friends = [jhon, kon, mon];
//didint do it
//problem 3 skipped

//problem 5: Take two arrays as paramter and combine two array and find the max number of the array.
const arr1 = [1, 2, 3];
const arr2 = [4, 77, 8];
maxArr = (array1, array2) => {
    const newarr = [...array1, ...array2]
    return Math.max(...newarr);
}
console.log(maxArr(arr1, arr2));