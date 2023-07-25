
function frequentElementInArray(arr) {
    const object = {};
    let maxFrequency = 0;
    let frequentElement;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        object[element] = (object[element] || 0) + 1;

        if (object[element] > maxFrequency) {
            maxFrequency = object[element];
            frequentElement = element;
        }
    }

    return frequentElement;
}


const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = frequentElementInArray(inputArray);
console.log(mostFrequent); 





