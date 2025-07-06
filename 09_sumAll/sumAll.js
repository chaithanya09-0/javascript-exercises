const sumAll = function(num1 , num2) {
    if(num1<0 || num2<0) return "ERROR"
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
    if(Number.isNaN(num1) || Number.isNaN(num2)) return "ERROR"
    if(num1>num2){
        let temp=num2;
        num2=num1;
        num1=temp;
    }
    let arr= []
    for(let i=num1; i<=num2;i++){
        arr.push(i)
    }
    return arr.reduce((sum,number)=>sum+number, 0)
};

// Do not edit below this line
module.exports = sumAll;
