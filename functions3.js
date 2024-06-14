
function highestNumOfArray(array) {

    // let highestNum = array[0]

    let highestNum = array[0];

    for (let x = 1; x < array.length; x++) {
        
        // the number at that slot - whether or not it is higher than highest Num
        //if higher, then highestNum == new value
    }

    return highestNum;
}

// console.log(highestNumOfArray([3,4,6,10,1,300,18,827,817,9]));


function filterForFives(array) {

    let newArrayOfFives = [];

    for (let number of array) {
        // if divisible by 5 ??
    }

    return newArrayOfFives;
}

console.log(filterForFives([100,101,500,503,5]))

//params ?, should I call right away?, what gets returned?

// Filtering for Fives - 2
    // Write a function that takes an array of numbers and returns a new array that only includes those numbers that are cleanly divisible by 5

    // Ex: passing in [100,101,500,503,5] should return [100,500,5]

// Array Sum Function - 2
    // Write a function that takes an array of numbers as an argument and returns the sum of all numbers in the array. 

    // Ex: passing in [1,200,4,0] should return 205.


/*


    Calculate the Total Cost - 3 
        Write a function that takes an array of numbers (prices of items) as well as a tax percentage and returns the total cost of a bill.

        Ex: passing in [10,20,30] and 17 should return 70.20 because the tax amount would equal 10.2.
    
*/