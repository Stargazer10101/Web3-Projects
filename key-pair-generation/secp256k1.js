import * as secp from "@noble/secp256k1";

async function main(){

    const privateKey= secp.utils.randomPrivateKey();
    //sha256 of "hello world"
    const msgHash= 
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";

    const publicKey= secp.getPublicKey(privateKey);
    const signature= await secp.sigAsync(msgHash, privateKey);
    const isValid= secp.verify(signature, msgHash, publicKey);
    console.log(isValid);
}
main();