const removeFromArray = function(tArray, rmItem, rmItem2, rmItem3, rmItem4) {
    if (!rmItem2 && !rmItem3 && !rmItem4) {
        return tArray.filter(element => element !== rmItem);
    } else if (!rmItem3 && !rmItem4) {
        return tArray.filter(element => element !== rmItem && element !== rmItem2);
    } else if (!rmItem4) {
        return tArray.filter(element => element !== rmItem && element !== rmItem2 && element !== rmItem3);
    } else {
        return tArray.filter(element => element !== rmItem && element !== rmItem2 && element !== rmItem3 && element !== rmItem4);
    }

};

// Do not edit below this line
module.exports = removeFromArray;
