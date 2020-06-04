const assert = require("assert");

function duplicateEncode(word) {
    let charCount = {};
    let result = "";

    word.toLowerCase()
        .split("")
        .forEach((c) => {
            if (c in charCount) {
                charCount[c] = charCount[c] + 1;
            } else {
                charCount[c] = 1;
            }
        });

    word.toLowerCase()
        .split("")
        .forEach((c) => {
            if (charCount[c] == 1) {
                result = result + "(";
            } else {
                result = result + ")";
            }
        });

    return result;
}

describe("Simple Test", () => {
    it("should return (((", () => {
        assert.equal(duplicateEncode("din"), "(((");
    });
    it("should return ()()()", () => {
        assert.equal(duplicateEncode("recede"), "()()()");
    });
    it("should return )())())", () => {
        assert.equal(duplicateEncode("Success"), ")())())");
    });
    it("should return ))((", () => {
        assert.equal(duplicateEncode("(( @"), "))((");
    });
});
