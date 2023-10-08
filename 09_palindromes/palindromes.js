const palindromes = function (string) {
    let splitString = string.split("");
    let reversedString = splitString.reverse();
    let newString = reversedString.join("")
    let punctuationlessString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString = punctuationlessString.replace(/\s+/g, '');
    let punctuationlessNewString = newString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalNewString = punctuationlessNewString.replace(/\s+/g, '');

    return finalNewString.toLowerCase() === finalString.toLowerCase();

};

// Do not edit below this line
module.exports = palindromes;
