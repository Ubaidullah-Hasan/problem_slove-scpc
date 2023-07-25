function reverseString(str) {
    let reverse = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

const result = reverseString("dlrow olleh")
 console.log(result);