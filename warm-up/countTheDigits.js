// count the digits of a number;

function count(n) {
    n = Math.abs(n);
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return (count === 0 ? 1 : count)

}

let res = count(0);
console.log(res)