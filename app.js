
const ValidateIpv4Address = (string) => {
    var stringArray = string.split('.');
    if (stringArray.length != 4) {
        return false;
    } else if (areElementsValid(stringArray) === false) {
        return false;
    } else if((stringArray[stringArray.length - 1] === '0') || (stringArray[stringArray.length - 1] === '225')){
        return false;
    }else{
        return true;
    }
}

const areElementsValid = (stringArray) => {
    for (var i = 0; i < stringArray.length; i++) {
        if ((parseInt(stringArray[i], 10) > 225) || (parseInt(stringArray[i], 10) < 0)) {
            return false;
        }
    }
    return true;
}
module.exports = ValidateIpv4Address;