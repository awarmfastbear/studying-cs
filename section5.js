// function same(arr1, arr2) {
//     for (int1 in arr1) {
//         console.log(int1);
//         arr2.indexOf
//     }
// };

// same([1,2,3],[1,2,3])

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {}

    for (i in str1) {
        let letter = str1[i]
        frequencyCounter1[letter] ? frequencyCounter1[letter] += 1 : frequencyCounter1[letter] = 1;
    }

    for (i in str2) {
        let letter = str2[i];
        if (!frequencyCounter1[letter]) {
            return false;
        }
        else {
            frequencyCounter1[letter] -= 1;
        }
    }

    console.log("true, anagram found.")
    return true;
}

validAnagram('anagram', 'nagaram')