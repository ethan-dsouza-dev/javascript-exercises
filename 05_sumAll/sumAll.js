const sumAll = function(startNum, endNum) {
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return "ERROR";
    }

    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }

    if (startNum > endNum) {
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    let finalSum = 0;
    let currentNum = startNum;
    while (currentNum <= endNum) {
        finalSum += currentNum;
        currentNum++;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
