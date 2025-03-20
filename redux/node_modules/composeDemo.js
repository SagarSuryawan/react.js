import { compose } from 'redux'

function removeSpaces(string) {
    return string.split(" ").join("")
}

function repeatString(string) {
    return string.repeat(2);
}

function converToUpperCase(string){
    return string.toUpperCase()
}


const input = "abc def ghi"

// console.log(converToUpperCase(repeatString(removeSpaces(input))))


const composeFunction = compose(removeSpaces, repeatString, converToUpperCase)

console.log(composeFunction(input))
