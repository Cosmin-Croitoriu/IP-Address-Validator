
function ValidateIpv4Address(string) {
    stringIntoArray = string.split('.')
    lastElement = stringIntoArray.length - 1
    return (isCorrectLength(stringIntoArray) && isLastElementValid(stringIntoArray) && isAnyElementIsValid(stringIntoArray))
}

function isCorrectLength(stringIntoArray) {
    return stringIntoArray.length === 4
}

function isLastElemetNotZero(stringIntoArray) {
    return stringIntoArray[lastElement] !== '0'
}
function isLastElementNot255(stringIntoArray) {
    return stringIntoArray[lastElement] !== '225'
}

function isLastElementValid(stringIntoArray) {
    return isLastElementNot255(stringIntoArray) && isLastElemetNotZero(stringIntoArray)
}

function isAnyElementIsValid(stringIntoArray) {
    for (var i = 0; i < stringIntoArray.length; i++) {
        var elementRange = parseInt(stringIntoArray[i], 10);
        if (elementRange > 225 || elementRange < 0)
            return false;
    }
    return true;
}
module.exports = ValidateIpv4Address;