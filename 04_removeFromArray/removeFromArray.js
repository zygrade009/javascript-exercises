const removeFromArray = function(numbers,num1,num2=0,num3=0,num4=0) {
    const n=numbers.length;
    let i=0;
    
    
        let store=[];
        for(let i=0;i<n;i++){
             if(numbers[i]===num1||numbers[i]===num2||numbers[i]===num3||numbers[i]===num4){
                 continue;
             }else{
                store.push(numbers[i]);
             }
        }
        
        return store;
};

// Do not edit below this line
module.exports = removeFromArray;
