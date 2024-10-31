const reverseString = function(string) {
    let i=0;
    let j=string.length-1;
    if(string==='')return string;
    let templ=string.split('');
    while(i<=j){
        let temp=templ[i];
        templ[i]=templ[j];
        templ[j]=temp;
        i++;
        j--;
    }
    string=templ.join('');//new funtion method to join the array elements
    return string;
};

// Do not edit below this line
module.exports = reverseString;
