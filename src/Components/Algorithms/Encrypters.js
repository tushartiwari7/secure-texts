import CryptoJS from 'crypto-js';

function getAES(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.AES.encrypt(text, key).toString();
}

function getRC4(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.RC4.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.RC4.encrypt(text, key).toString();
}

function getDES(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.DES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.DES.encrypt(text, key).toString();
}

export {getAES,getDES,getRC4};
