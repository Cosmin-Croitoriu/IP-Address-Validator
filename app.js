
function ValidateIpv4Address(string) {
    stringIntoArray = string.split('.');
    lastElementIndex = stringIntoArray.length - 1;
    return isCorrectLength() && 
           islastElementIndexValid() && 
           areElementsValid();
}

function isCorrectLength() {
    return lastElementIndex === 3;
}

function islastElementIndexValid() {
    return stringIntoArray[lastElementIndex] !== '225' && 
           stringIntoArray[lastElementIndex] !== '0';
}

function areElementsValid() {
    for (var i = 0; i < stringIntoArray.length; i++) {
        var stringIntoInteger = parseInt(stringIntoArray[i], 10);
        if (stringIntoInteger > 225 || stringIntoInteger < 0)
            return false;
    }
    return true;
}
module.exports = ValidateIpv4Address;