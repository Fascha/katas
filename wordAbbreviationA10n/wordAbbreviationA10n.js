// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {
    let letters = /^[A-Za-z]+$/;

    let result = "";
    let current = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i].match(letters)) {
            current = current + string[i];
        } else {
            if (current.length >= 4) {
                result =
                    result +
                    current[0] +
                    (current.length - 2) +
                    current.slice(-1);
            } else {
                result = result + current;
            }
            current = "";
            result = result + string[i];
        }
    }

    if (current.length > 0) {
        if (current.length >= 4) {
            result =
                result + current[0] + (current.length - 2) + current.slice(-1);
        } else {
            result = result + current;
        }
    }
    return result;
}

const assert = require("assert");

describe("Simple Test", () => {
    it("should pass simple tests", () => {
        assert.equal(abbreviate("internationalization"), "i18n");
        assert.equal(abbreviate("accessibility"), "a11y");
        assert.equal(abbreviate("Accessibility"), "A11y");
        assert.equal(abbreviate("elephant-ride"), "e6t-r2e");
    });
});
