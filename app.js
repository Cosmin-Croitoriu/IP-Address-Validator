const ValidateIpv4Address = (string) => {
   if(string.split('.').length === 4) {
       return true;
   }
}



module.exports = ValidateIpv4Address;