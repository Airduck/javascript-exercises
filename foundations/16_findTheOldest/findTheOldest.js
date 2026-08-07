const findTheOldest = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (!("yearOfDeath" in arr[i])) {
            arr[i]["yearOfDeath"] = 2026;
        };
    };
    arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    return arr.pop();
};



// Do not edit below this line
module.exports = findTheOldest;
