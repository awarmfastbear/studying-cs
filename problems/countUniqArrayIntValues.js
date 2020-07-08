
// implement a function that accepts a sorted array and counts the unique values of the array.

// extra credit, if the array is unsorted, sort it first.

// input:              output:
// [1,1,2,2,3,4,]      4 unique values

// strategy: multiple pointers
//
// start with two pointers, one at the beginning [0] p1, another at [1], p2.
// We'll then iterate over the array checking to see if p2 === p1, if it is, then we'll modify the array 
// and set the value of pointer 1 to be pointer 2 to remove the duplicate entry. p1 = p2.
// the pointers will move forward together looking for unique values.
//

function countUniqueArrayIntValues(intArray1) {

    // return 0 if input is null, or array is less than 1
    if (!intArray1 || intArray1 < 1) return 0;

    let i = 0;
    for (var j = 1; j < intArray1.length; j++) {
        if (intArray1[i] !== intArray1[j]) {
            i++;
            intArray1[i] = intArray1[j]
            // console.log(i);
        }
    }

    console.log(i+1);
    return (i+1);

};

// countUniqueArrayIntValues([1,2,2,2,3,3,4]);
countUniqueArrayIntValues([55, 55, 98, 99, 99]);

// arr = [1,2,3];

// console.log(arr[0,1])