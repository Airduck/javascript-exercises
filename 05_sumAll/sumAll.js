const sumAll = function(first, second) {
    let sum = 0;
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
       return "ERROR"; 

    } else if (first < second) {
        for (let i = first; i <= second; i++) {
            sum +=  i;
        }
        return sum;

    } else if (second < first) {
        for (let i = second; i <= first; i++) {
            sum +=  i;
        }
        return sum; 
    } 
};


// Do not edit below this line
module.exports = sumAll;
