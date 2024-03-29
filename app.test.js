const ValidateIpv4Address  = require('./app');
test("return true if the string is made of 4 groups of parts", () => {
    expect (ValidateIpv4Address("122.122.122.122")).toBe(true);
});

test("return false if the string is not made of 4 groups of numbers", () => {
    expect (ValidateIpv4Address("122.122.122")).toBe(false);
});

test("return false if the last element is 0", () => {
    expect (ValidateIpv4Address("122.122.122.0")).toBe(false);
});

test("return true if the last element is not 0", () => {
    expect (ValidateIpv4Address("122.122.122.1")).toBe(true);
});

test("return false if the last element is  255", () => {
    expect (ValidateIpv4Address("122.122.122.255")).toBe(false);
});

test("return false if any element is greater than 255", () => {
    expect (ValidateIpv4Address("122.122.256.220")).toBe(false);
});






