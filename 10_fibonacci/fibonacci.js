const fibonacci = function(number) {

     if(number==0)return 0;
     else if(number<0)return "OOPS";
     else if(number==String){
        return fibonacci(parseInt(number));
     }
     let numbers=[1,1];
     let i=2;
     while(i<number){
        numbers.push(numbers[i-1]+numbers[i-2]);
        i++;
     }
     return numbers[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
