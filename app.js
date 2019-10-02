
function ValidateIpv4Address(string) {
    stringIntoArray = string.split('.');
    lastElementIndex = stringIntoArray.length - 1;
    return isCorrectLength() && islastElementIndexValid() && isAnyElementIsValid()
}

function isCorrectLength() {
    return lastElementIndex === 3;
}

function isLastElemetNotZero() {
    return stringIntoArray[lastElementIndex] !== '0';
}

function islastElementIndexNot255() {
    return stringIntoArray[lastElementIndex] !== '225';
}

function islastElementIndexValid() {
    return islastElementIndexNot255() && isLastElemetNotZero();
}

function isAnyElementIsValid() {
    for (var i = 0; i < stringIntoArray.length; i++) {
        var stringNumberIntoInteger = parseInt(stringIntoArray[i], 10);
        if (stringNumberIntoInteger > 225 || stringNumberIntoInteger < 0)
            return false;
    }
    return true;
}
module.exports = ValidateIpv4Address;