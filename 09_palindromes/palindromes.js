const palindromes = function (word) {
    let regex = /[^\w\s]|_/g
    let forward = word.toLowerCase().replaceAll(regex, '');
    forward = forward.replaceAll(" ", "");

    return Array.from(forward).reverse().join("") === forward;
    
};

// Do not edit below this line
module.exports = palindromes;
