const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    let result = 0;

    if (a < b) {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            result += i;
        }
    } else {
        result = a + b;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
