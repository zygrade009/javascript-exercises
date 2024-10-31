const repeatString = function(string, num ) {
   let result = '';
   if(string===result)return result;
   if(num>=0){
    while(num--){
        result += string;
     }
   }else{
       result = 'ERROR';
   }
   return result;
};

// Do not edit below this line
module.exports = repeatString;
