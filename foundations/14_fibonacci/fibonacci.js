const fibonacci = function(n) {
    n = parseInt(n);
    if (n===0) {return 0};
    if (n<0) {return "OOPS"};
    const arr = [1,1];
    if (n > 2) {
        for (let i = 0; i < n-2; i++) {
            arr.push(arr[i]+arr[i+1]);
        };
    };
    return arr[arr.length -1];
};



// Do not edit below this line
module.exports = fibonacci;
