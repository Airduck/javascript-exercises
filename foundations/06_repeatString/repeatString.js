const repeatString = function(str, n) {
    let finalWord = "";
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            finalWord += str
        }
        return finalWord;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
