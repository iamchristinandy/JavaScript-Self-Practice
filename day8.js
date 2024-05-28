// Write a function that takes an array of numbers
//and returns a new array containing only the prime numbers from the original array.

function isPrime(num){
        if (num <=1) return false;
        if (num === 2) return true;
 
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i*i <=num; i+=6){
            if (num % i === 0 || num % i+2 === 0) return false;
        }
        return true;
}

function getPrimes(array){
    return array.filter(isPrime)
}

// Example usage
const IWantPrimes = [1,2,3,4,5,6,7,8,9,10,12,13,15,19,33, 31, 36,42,43];
console.log(getPrimes(IWantPrimes));

