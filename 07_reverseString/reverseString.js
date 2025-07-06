const reverseString = function(str) {
    let reverse='';
    for(let i=0; i< str.length; i++){
        reverse += str[str.length-1-i]
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
