// for an array of numbers, print fizz if it's odd. buzz if it's even. and fizzbuzz at the end of the array.

function fizzBuzz(arr1) {

    if (!arr1 || arr1.length <= 1) {
        console.log("bad input");
        return false;
    }

    for (i in arr1) {
        let num = arr1[i];
        if (num % 2 != 0) {
            //it's even
            console.log(num + ": fizz!");
        }
        else {
            console.log(num + ": buzz!");
        }
        if (parseInt(i) + 1 == arr1.length) {
            console.log("fizzbuzz");
        }
    }



}

fizzBuzz([1])