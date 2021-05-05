const numbers = [12, 2, 24, 26, 75, 32, 12, 67, 23];
const ages = [12, 32, 12, 10, 9, 8, 12, 15, 16];

function even(num) {
    let result;
    if (num % 2 === 0) {
        // console.log(`${num} is even number`);
        result = num;

    } else {
        result = num * 2;
    }
    return result;

}

const result = even(5);
const square = result * result;
console.log('result',square);

function evenifyAll(numbers) {
    let even_array = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        let result = even(num);
        even_array.push(result);

    }
    return even_array;
}

const  nums = evenifyAll(numbers);
console.log(nums);

// evenifyAll(ages);






