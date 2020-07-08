
// author: Ian Seiler
// July 7th, 2020
// given a string, display it in a reversed order.

// reverseStr("cat") => "tac"

// access the string as a sorted array, start at the end
//  0    1     2
//["c", "a", "t"]

// BigO notation:
// time => O(n)
// space => O(n)

function reverseStr(inputStr) {

    // skip empty input, skip input less than 1 char,  skip numbers
    if (!inputStr || inputStr.length <= 1  || typeof(inputStr) === "number" ) {
        
        console.log("Not a valid input, please provide a string. e.g. \"cat\" ")
        return false;
    }
    
    // find the total length of the string to know where to start.
    startChar = inputStr.length
    for (letter in inputStr) {
        // because an array is zero based, we need to start one lower than the total length
        console.log(inputStr[startChar -1])
        startChar -= 1;
    }
    return true;
}

// reverseStr("cat") // => "tac", true
// reverseStr(11)  // => false
