const crypto = require('crypto');
const path = require("path");
const fs = require("fs");

let pathToKey = path.resolve("D:\\Users\\aarchamb\\Desktop\\CRYPTOGRAPHIE\\key.pem");
let key = fs.readFileSync(pathToKey, "utf8");

let labelResultatEncrypted  = document.getElementById("resEncrypted");
let labelResultatdecrypted  = document.getElementById("resDecripter");

let boutonEncrypt = document.getElementById("buttonClickCrypt");
let boutonDecrypt = document.getElementById("buttonDecrypt");
let keyObject = {key: key, padding : crypto.constants.RSA_PKCS1_PADDING}

boutonEncrypt.addEventListener("click", function (e) {
    if (textToCrypt != "") {
        let textToCrypt = document.getElementById("textToCrypt").value;
        let buffer = new Buffer(textToCrypt);
        let encrypted = crypto.publicEncrypt(keyObject, buffer);
        let finalEncryptedText = encrypted.toString("base64");
        labelResultatEncrypted.innerHTML = finalEncryptedText;
    }else{
        alert("Veuillez saisir un text")
    }
});

boutonDecrypt.addEventListener("click", function (e) {
    if (textToCrypt != "") {
        let textToDecrypt = document.getElementById("textToDecrypt").value;
        let buffer = new Buffer(textToDecrypt,"base64");
        let decrypted = crypto.privateDecrypt(keyObject, buffer);
        let finalDecryptedText = decrypted.toString("utf8");
        labelResultatEncrypted.innerHTML = finalDecryptedText;
    }else{
        alert("Veuillez saisir un text chiffré ")
    }
});



