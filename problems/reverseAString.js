
// author: Ian Seiler
// given a string, display it in a reversed order.

// reverseStr("cat") => "tac"

//  0    1     2
//["c", "a", "t"]

// BigO notation:
// time => O(n)
// space => O(n)

function reverseStr(inputStr) {

    if (inputStr.length <= 1 || inputStr === null || typeof(inputStr) === "number" ) {
        // does not cover identical characters
        console.log("Not a valid input, please provide a string.")
        return false;
    }
    
    // find the total length of the string to know where to start.
    startChar = inputStr.length
    for (letter in inputStr) {
        console.log(inputStr[startChar - 1])
        startChar -= 1;
    }
    return true;
}

reverseStr("cat") // => "tac", true
// reverseStr(11)  // => false
