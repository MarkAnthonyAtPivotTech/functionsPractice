// name your function -
// think about what parameters you'll recieve
// envoke your function - use parenthesis()
// try to return something right away
// pass your args - so that they're received as parameters
// scaffold out your code - write the skeleton

// after the above, then you're ready for the logic inside

// String Reversal Function
    // Write a function that takes a string as an argument and returns the reversed string. 
        
    // Ex: passing in 'Rick and Morty' should return 'ytroM dna kciR'

function stringReverse(string) {
    let newString = string.split('');
    newString = newString.reverse();
    newString = newString.join(' ')
    return newString;
}


function isPalindrome(word) {

        let wordBackwards = word.split('').reverse().join('');
        if (wordBackwards === word) {
            return true;
        } else return false;

}

// console.log(isPalindrome('racecar'))


// Welcome to My Bar Function - 3
    // Write a function that takes in 3 arguments - someone's name, someone's age, and the number of drinks they have had today - and returns a message saying whether or not that person is welcome into the bar. 

    // Ex: passing in 'Max', 18, and 18 should return something like: 'Sorry, Max. You are not welcome into this bar because you are underage.`

function welcomeToMyBar(name,age,numDrinks) {

    let message = `Welcome to my bar, ${name}`

    // check if they are old enough

    // check how many drinks they had (4 === too many)

    // return a message

    return message;
}

// console.log(welcomeToMyBar('Bruce Wayne',49,10))

// Convert To °F or °C - 2 
    // Write a function that takes a number and a unit and then converts that number into Celcius or to Fahrenheit depending on the unit

    // Ex: passing in 100 and Fahrenheit should return 212
    // Ex: passing in 100 and Celcius should return 37.78
    // Ex: passing only in 100 should return a string saying: 'Sorry, no unit was specified to convert to'.

function conversionBetweenCandF(temp,convertTo) {
    console.log(temp,convertTo)

    //if convert to F - use certain formula

    //if convert to C - use opposite formula
}

// console.log(conversionBetweenCandF(100,'F'))

/*

    Identify Season - 2
        Write a function that takes in the name of a month and returns what season that month is in.

        Ex: passing in 'January' should return the string 'Winter'
    
    Convert To °F or °C - 2 
        Write a function that takes a number and a unit and then converts that number into Celcius or to Fahrenheit depending on the unit

        Ex: passing in 100 and Fahrenheit should return 212
        Ex: passing in 100 and Celcius should return 37.78
        Ex: passing only in 100 should return a string saying: 'Sorry, no unit was specified to convert to'.


*/
    

