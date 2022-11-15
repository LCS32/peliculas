import { Injectable } from '@angular/core';

const CryptoJS = require("crypto-js");
const SecureStorage = require("secure-web-storage");
const SECRET_KEY = '1234';

@Injectable({ providedIn: 'root' })
export class SecurityStorageService {

  secureStorage = new SecureStorage(sessionStorage, {
    hash: (key: string) => {
        key = CryptoJS.SHA256(key, SECRET_KEY);
        return key.toString();
    },
    encrypt: (data: any) => {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY);
 
        data = data.toString();
 
        return data;
    },
    decrypt: (data: any) => {
        data = CryptoJS.AES.decrypt(data, SECRET_KEY);
 
        data = data.toString(CryptoJS.enc.Utf8);
 
        return data;
    }
});

  constructor() { }
}
