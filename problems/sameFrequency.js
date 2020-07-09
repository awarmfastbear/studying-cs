// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(int1, int2) {

    frequencyCounter1 = {};
    frequencyCounter2 = {};

    for (i in int1) {
        num = int1[i];
        console.log(int1);
        // frequencyCounter1[i] = frequencyCounter1[num];
    }
    // console.log(frequencyCounter1);
    console.log(int1.length);
}

sameFrequency(20,30)