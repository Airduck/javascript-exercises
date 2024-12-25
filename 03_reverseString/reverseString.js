const reverseString = function(string) {
    let wordArray = string.split(""); // [w,o,r,d]
    wordArray = wordArray.reverse();
    return wordArray.join("")
};

// Do not edit below this line
module.exports = reverseString;


