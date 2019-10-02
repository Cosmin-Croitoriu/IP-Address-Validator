
function ValidateIpv4Address(string) {
    stringIntoArray = string.split('.');
    lastElement = stringIntoArray.length - 1;
    return isCorrectLength() && isLastElementValid() && isAnyElementIsValid()
}

function isCorrectLength() {
    return lastElement === 3;
}

function isLastElemetNotZero() {
    return stringIntoArray[lastElement] !== '0';
}

function isLastElementNot255() {
    return stringIntoArray[lastElement] !== '225';
}

function isLastElementValid() {
    return isLastElementNot255() && isLastElemetNotZero();
}

function isAnyElementIsValid() {
    for (var i = 0; i < stringIntoArray.length; i++) {
        var elementRange = parseInt(stringIntoArray[i], 10);
        if (elementRange > 225 || elementRange < 0)
            return false;
    }
    return true;
}
module.exports = ValidateIpv4Address;