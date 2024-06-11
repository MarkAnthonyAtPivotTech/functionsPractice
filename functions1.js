function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5,6));


function addFourNums(n1,n2,n3,n4) {
    let totalSum =  n1 + n2 + n3 + n4;
    return totalSum;
}
console.log(addFourNums(10,20,30,500))

// Even or Odd Function
//     Write a function that takes a number as an argument and returns true if the number is even, otherwise false.

function isNumEven(num) {

    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
    
}

console.log(isNumEven(3))
console.log(isNumEven(300))

/*
    

    Is A Prime - 1
        Write a function thats a number and returns true or false depending on whether the number is Prime (prime numbers are only divisible by themselves and by 1 and are not cleanly divisible by 2, 3, 5, or 7)
    
    Highest Number Function - 1
        Write a function that takes in three numbers and returns the number that is the highest. 
        
        Ex: passing 200, 200, and 199 returns 200.
    
    Multiplying Digits Function - 2
        Write a function that takes a number as an argument and returns the factorial of that number (e.g., factoral 5 = 5*4*3*2*1 = 120).

        Ex: passing in 5 should return 120;
*/
