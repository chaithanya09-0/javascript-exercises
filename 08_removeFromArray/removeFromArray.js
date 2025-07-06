const removeFromArray = function(arr, ...args) {
    
    for(let i=0; i<args.length;i++){
        let item= args[i]
        while(arr.includes(item)){
            let index= arr.indexOf(item)
            arr.splice(index,1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
