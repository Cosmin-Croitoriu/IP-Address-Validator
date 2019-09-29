const ValidateIpv4Address = (string) => {
    var stringArray = string.split('.');
   if(stringArray.length === 4) {
       return stringArray[stringArray.length -1] != '0' &&
       stringArray[stringArray.length -1] != '255' ? true:false; 
   }else{
       return false;
   }
}



module.exports = ValidateIpv4Address;