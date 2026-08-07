const removeFromArray = function(arr, ...nums) {
    const returnArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (!nums.includes(arr[i])) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
