
// author: Ian Seiler
// July 8th, 2020.

//Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz".

// O(n)
function fizzBuzz() {

    for (i = 1; i <= 100; i++) {
        outputNum = i;
        if (i % 3 === 0) {
            outputNum = "fizz";
        }
        if (i % 5 === 0) {
            outputNum = "buzz";
            console.log(outputNum);
        }
        else {
            console.log(outputNum);

        }

    }

}

fizzBuzz();