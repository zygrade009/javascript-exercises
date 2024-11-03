const palindromes = function (string) {
    
    
    let i=0;
    let j=string.length-1;
    let flag=0;
    while(i<=j){
       if(string[i++]!==string[j--]){
          flag=1;
          break;
       }
    }
    if(flag===0)return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
