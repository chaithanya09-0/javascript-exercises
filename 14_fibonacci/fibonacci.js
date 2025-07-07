const fibonacci = function(n) {
    let num = n;
    if(typeof(n)=== "string") num = Number(n)
    if ( num===1 || num===2) return 1;
    if(num===0) return 0;
    if( num < 0 ) return "OOPS"
    return fibonacci(num-1) + fibonacci(num-2)

};

// Do not edit below this line
module.exports = fibonacci;
