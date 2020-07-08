// author: Ian Seiler
// July 7th, 2020
// bigO notation:
// O(n) for time and complexity.

function sortAnIntegerArray(arr) {
    // skip empty arrays, < 1, and skip arrays that don't contain only numbers
    if (!arr || arr.length < 1 || arr.every(isNaN) ) {
        console.log("invalid input.")
        return false
    }

    // create an empty map.
    frequencyCounter1 = {};

    for (i in arr) {
        value = arr[i];
        // count the number of times that value appears. set the map key to that number.
        frequencyCounter1[value] ? frequencyCounter1[value] += 1 : frequencyCounter1[value] = 1;
    }

    // print the ordered map.
    console.log(Object.keys(frequencyCounter1))

}

sortAnIntegerArray([2, 1]) //=> 

// sortAnIntegerArray([51, 4, 1, 55, 100, 1000, 22, 11, 1, 2, 3])
 //=>
// [
//     '1',    '2',  '3',
//     '4',    '11', '22',
//     '51',   '55', '100',
//     '1000'
// ]
  
// sortAnIntegerArray([1, 3, 2])
// sortAnIntegerArray([42,45,10,12])
// sortAnIntegerArray([3, 2000000000000000000000000003, 20000000000000000000000000000000000000])





// a horrible frankenstein approach can be found below.
// // not efficient, leaves empty items between entries.

// function sortAndOrderIntArr(unsortedIntArr1) {
//     // skip bad input

//     let tmpIntArr = [];
//     let sortedIntArr = [];

//     // build a new array, add values into the locations they should exist at..
//     for (int in unsortedIntArr1) {
//         actualInt = unsortedIntArr1[int]
//         if (actualInt === tmpIntArr[actualInt]) {
//         }
//         else {
//             console.log(tmpIntArr)
//             console.log(actualInt + ' doesn\'t exist in the sorted array');
//             tmpIntArr[actualInt] = actualInt; // we're skipping index locations :(
//         }
//     }

//     for (int in tmpIntArr) {
//         // console.log(int)
//         sortedIntArr.push(tmpIntArr[int])
//     }

//     // // multiple pointer method
//     // let i = 0;

//     // // input example [1,3,2]
//     // for (let j = 1; j < unsortedIntArr1.length; j++) {
//     //     actualInt = unsortedIntArr1[i]
//     //         // 1          <           3
//     //     if (unsortedIntArr1[i] < unsortedIntArr1[j]) {
//     //         sortedIntArr.push(unsortedIntArr1[i])
//     //         i++;
//     //     }
//     //     // if 
//     //         // sortedIntArr.push(unsortedIntArr1[j])
//     //         // sortedIntArr.push(unsortedIntArr1[i])
//     //     // }
//     // }

//     console.log(sortedIntArr);
//     return true
// }

// // sortAndOrderIntArr([1, 3, 2])
// // sortAndOrderIntArr([42,45,10,12])
// sortAndOrderIntArr([3, 2000000000000000000000000003, 20000000000000000000000000000000000000])


