import {ethers} from "ethers";

//Generate a random wallet
const wallet= ethers.Wallet.createRandom();

//Extract the public and private keys

const publicKey= wallet.address;
const privateKey= wallet.privateKey;

//Message to sign
const message= "hello world";

//sign the message using the wallet's private key
const signature = await wallet.signMessage(message);
console.log("Signature", signature);

//verify the signature
const recoveredAddress= ethers.verifyMessage(message, signature);

console.log("Recovered Address", recoveredAddress);
console.log("Signature is valid", recoveredAddress === publicKey);