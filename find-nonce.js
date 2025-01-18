// find a nonce for the following input - 
// Jack => John | usd 100
// Jamie => Julie | usd 10

const crypto= require('crypto');
let nonce=1;

function findNonce(input){

    while(true){

    let inputStr= input.toString()+ nonce.toString();
    let hash= crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith('00000')){
        return {nonce: nonce, hash: hash};
    }
    nonce ++;
    }
    
}

let result= findNonce(`Jack => John | usd 
    100 Jamie => Julie | usd 10`);
console.log(`nonce: ${result.nonce}`);
console.log(`hash: ${result.hash}`);


