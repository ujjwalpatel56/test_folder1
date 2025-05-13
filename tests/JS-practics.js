let str='hello'
let reverse='';
function reversestring(str){
    for(i=str.length-1;i>=0;i--)
        reverse+=str[i];
     return reverse;
}
console.log(reversestring(str))