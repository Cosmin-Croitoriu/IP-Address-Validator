const ValidateIpv4Address  = require('./app');
test("check if the string is made of 4 groups of integers", () => {
    expect (ValidateIpv4Address("122.122.122.122")).toBeTruthy;
})
