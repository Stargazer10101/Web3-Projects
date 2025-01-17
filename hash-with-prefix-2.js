// Given that input string should start with an input prefix: "Hello" ? 
// How would the code change?




const crypto= require('crypto');
function findHashWithPrefix(prefix, inputPrefix){

let input = 0;
while(true){

    let inputStr =  inputPrefix. toString()+input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith(prefix)){
        return{input: inputStr, hash: hash};
    }
    input ++;
}
}
const result= findHashWithPrefix('0000', '100xdevs');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);


