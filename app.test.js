const ValidateIpv4Address  = require('./app');
test("return true if the string is made of 4 groups of parts", () => {
    expect (ValidateIpv4Address("122.122.122.122")).toBeTruthy;
});

test("return false if the string is not made of 4 groups of parts", () => {
    expect (ValidateIpv4Address("122.122.122")).toBeFalsy;
});

