
// big O(n)

function laugh(times) {
    if(times >= 1 ) {
        console.log("laugh")
        times -= 1;
        laugh(times);
    }
}

laugh(2);
