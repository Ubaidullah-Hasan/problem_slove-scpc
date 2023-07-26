function secondSmallestNumber(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error("There is no second smallest element in the array.");
    }

    return secondSmallest;
}

const arr = [5, 2, 9, 1, 7, 3, 6, 4, 8];
console.log(secondSmallestNumber(arr)); 
