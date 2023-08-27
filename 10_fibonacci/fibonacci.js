const fibonacci = function(nTerm) {
    if (nTerm <= 0) return "OOPS";
    if (typeof nTerm === "string") nTerm = Number(nTerm);
    if (nTerm === 1 || nTerm === 2) return 1;

    return fibonacci(nTerm - 1) + fibonacci(nTerm -2);
};

// Do not edit below this line
module.exports = fibonacci;
