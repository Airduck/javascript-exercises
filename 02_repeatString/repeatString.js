const repeatString = function(string, num) {
    let finalString = "";
    if (num > 0) {
        for (let i=0; i < num; i++) {
            finalString += string;
        }
        return finalString;
    } else if (num == 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
