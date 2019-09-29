const ValidateIpv4Address = (string) => {
   if(string.split('.').length === 4) {
       return true;
   }else{
       return false
   }
}



module.exports = ValidateIpv4Address;