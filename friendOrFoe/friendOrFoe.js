const assert = require("assert");

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
    let result = friends.filter((name) => name.length == 4);

    return result;
}

describe("Simple Test", () => {
    it("should return ['Ryan', 'Mark']", () => {
        assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
    });
    it("should return ['Ryan']", () => {
        assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), [
            "Ryan",
        ]);
    });
    it("should return  ['Jimm', 'Cari', 'aret']", () => {
        assert.deepEqual(
            friend([
                "Jimm",
                "Cari",
                "aret",
                "truehdnviegkwgvke",
                "sixtyiscooooool",
            ]),
            ["Jimm", "Cari", "aret"]
        );
    });
    it("should return ['Love', 'Your', 'Face']", () => {
        assert.deepEqual(friend(["Love", "Your", "Face", "1"]), [
            "Love",
            "Your",
            "Face",
        ]);
    });
});
