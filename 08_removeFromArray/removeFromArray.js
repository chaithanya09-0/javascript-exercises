const removeFromArray = function(arr, num) {
    let index= arr.findIndex(num);
    arr.splice(index,1);
};

// Do not edit below this line
module.exports = removeFromArray;
