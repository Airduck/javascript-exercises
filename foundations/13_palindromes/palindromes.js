const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, "");
    const arr = str.split("");
    const arr_reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr_reverse.push(arr[i]);
    };
    return arr.join("") === arr_reverse.join("");
};

console.log(palindromes("anna"))

// Do not edit below this line
module.exports = palindromes;
