const palindromes = function (str) {
    let cleanStr=str.toLowerCase()
    cleanStr=cleanStr.replace(/[^a-z0-9]/g, '')
    let arr=cleanStr.split('')
    let reverse=arr.reverse();
    reverse = reverse.join('')
    return (cleanStr === reverse);
};

// Do not edit below this line
module.exports = palindromes;
