
import * as ed from "@noble/ed25519";


async function main(){

    //Generate a secure random private key
    const privateKey =  ed.utils.randomPrivateKey();

    //Convert the message "hello world" to a Uint8Array
    const message = new TextEncoder().encode("hello world");

    //Generate the public key from private key
    const publicKey = await ed.getPublicKeyAsync(privateKey);

    //Sign the message
    const signature= await ed.signAsync(message, privateKey);

    //verify the signature
    const isValid= await ed.verifyAsync(signature, message, publicKey);

    //Output the result
    console.log(isValid); // should print 'true' if the signature is valid
}

main();


