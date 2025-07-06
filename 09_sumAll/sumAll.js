const sumAll = function(num1 , num2) {
    let arr = [];
    for(let i=num1; i<=num2; i++){
        arr.push(i)
    }
    return arr.reduce((sum,number)=> sum+number,0)
};

// Do not edit below this line
module.exports = sumAll;
