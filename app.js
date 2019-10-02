
function ValidateIpv4Address(string) {
    stringIntoArray = string.split('.')
    lastElement = stringIntoArray.length - 1
    if (arrayLength(stringIntoArray) || areElementsValid(stringIntoArray) || isLastElementValid(stringIntoArray))
        return false;
    else
        return true;
}

function arrayLength(stringIntoArray) {
    return stringIntoArray.length !== 4
}

function isLastElemetZero(stringIntoArray) {
    return stringIntoArray[lastElement] === '0'
}
function isLastElement255(stringIntoArray) {
    return stringIntoArray[lastElement] === '225'
}

function isLastElementValid(stringIntoArray) {
    return isLastElement255(stringIntoArray) || isLastElemetZero(stringIntoArray)
}

function areElementsValid(stringIntoArray) {
    for (var i = 0; i < stringIntoArray.length; i++) {
        var elementRange = parseInt(stringIntoArray[i], 10);
        if (elementRange > 225 || elementRange < 0)
            return true;
    }
}
module.exports = ValidateIpv4Address;