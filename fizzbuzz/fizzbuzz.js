const assert = require("assert");

const fizzbuzz = (number) => {
    if (number % 5 == 0 || number.toString(10).substr(-1) == "5") {
        if (number % 3 == 0) {
            return "Fizzbuzz";
        } else {
            return "Buzz";
        }
    } else if (number % 3 == 0 || number.toString(10).substr(-1) == "3") {
        return "Fizz";
    }
    return number;
};

describe("Simple Math Test", () => {
    it("should return 1", () => {
        assert.equal(fizzbuzz(1), 1);
    });
    it("should return 2", () => {
        assert.equal(fizzbuzz(2), 2);
    });
    it("should return Fizz", () => {
        assert.equal(fizzbuzz(3), "Fizz");
    });
    it("should return 4", () => {
        assert.equal(fizzbuzz(4), 4);
    });
    it("should return Buzz", () => {
        assert.equal(fizzbuzz(5), "Buzz");
    });
    it("should return 6", () => {
        assert.equal(fizzbuzz(6), "Fizz");
    });
    it("should return 7", () => {
        assert.equal(fizzbuzz(7), 7);
    });
    it("should return 8", () => {
        assert.equal(fizzbuzz(8), 8);
    });
    it("should return Fizz", () => {
        assert.equal(fizzbuzz(9), "Fizz");
    });
    it("should return 10", () => {
        assert.equal(fizzbuzz(10), "Buzz");
    });
    it("should return 11", () => {
        assert.equal(fizzbuzz(11), 11);
    });
    it("should return 12", () => {
        assert.equal(fizzbuzz(12), "Fizz");
    });
    it("should return 13", () => {
        assert.equal(fizzbuzz(13), "Fizz");
    });
    it("should return 14", () => {
        assert.equal(fizzbuzz(14), 14);
    });
    it("should return 15", () => {
        assert.equal(fizzbuzz(15), "Fizzbuzz");
    });
});
