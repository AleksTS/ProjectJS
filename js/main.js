/*const sum = (a = 0, b = 0) => Number(a) + Number(b);

const addDigits = (num) => {

    let arr = [...num.toString()];
    let res = num; 

    while(arr.length != 1) {
        res = arr.reduce(sum);
        arr = [...res.toString()];
    }
    
    return res;
}

console.log(addDigits(10));


const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();
const str = "привет, мир. меня зовут - саша";

const solution = (str) => {
    let result = "";
    
    for (let i = 0; i < length(str); i++) {
        const shouldBeBig = str[i] !== " " && (i === 0 || str[i - 1] === " ");
        result += shouldBeBig ? toUpperCase(str[i]) : str[i];
    }
    return result;
};

console.log(solution(str));
*/


function discountPrices(prices, discount) {
    console.log(discounted); // NOT OK: ReferenceError

    let discounted = [];

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        let finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // 3
    console.log(discountedPrice); // 150
    console.log(finalPrice); // 150

    return discounted;
}

console.log(discountPrices([11, 34, 53, 23, 212], 0.2));