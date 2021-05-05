function add(num1, num2) {
    //console.log(arguments[2]);    // array like object
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        // console.log(element);
        sum = sum + element;

    }
    return sum;
}

const result = add(2, 4, 5, 6, 0, 9, 4);
console.log(result);