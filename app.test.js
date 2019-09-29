const ValidateIpv4Address  = require('./app');
test("return true if the string is made of 4 groups of parts", () => {
    expect (ValidateIpv4Address("122.122.122.122")).toBe(true);
});

test("return false if the string is not made of 4 groups of parts", () => {
    expect (ValidateIpv4Address("122.122.122")).toBe(false);
});

test("return false if the last part is 0", () => {
    expect (ValidateIpv4Address("122.122.122.0")).toBe(false);
});

test("return true if the last part is not 0", () => {
    expect (ValidateIpv4Address("122.122.122.1")).toBe(true);
});





