function find2IndexOfSum(arr, target) {
    let i, j;
    for (i = 0, j = i + 1; i < arr.length; i++, j++) {
        if (arr[i] + arr[j] === target) {
            return [i, j];
        }
    }
    return null;
}


const inputArray = [1, 3, 6, 8, 11, 15];
const value = 9;
const result = find2IndexOfSum(inputArray, value);
console.log(result); 
