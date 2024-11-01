const sumAll = function(left ,right) {
    let sum=0;
    if(left<0||right<0||typeof left!=="number"||typeof right!=="number"||left%1!==0||right%1!==0){
        return "ERROR";
    }
    if(left>right){
        let temp=left;
        left=right;
        right=temp;
    }
    for(let i=left;i<=right;i++){
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
