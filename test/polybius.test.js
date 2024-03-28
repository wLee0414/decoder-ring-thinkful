// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return a string when encoding", () => {
        const input = "anything";
        const actual = polybius(input);
        expect(actual).to.be.a('string');
    });

    it("should return false if numbers of characters in string excluding spaces is odd", () => {
        const input = "12412";
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });

    it("should maintain the spaces from input", () => {
        const input = "aa aa";
        const actual = polybius(input);
        expect(actual).to.equal("1111 1111");
    });

    it("should ignore capital letters", () => {
        const input = "Aa Aa";
        const actual = polybius(input);
        expect(actual).to.equal("1111 1111");
    });

    it("should have i and j both convert to 42 when encoding", () => {
        const input = "i j";
        const actual = polybius(input);
        expect(actual).to.equal("42 42");
    });

    it("should have 42 to be i/j when decoding", () => {
        const input = "42";
        const actual = polybius(input, false);
        expect(actual).to.equal("i/j");
    });

    it("should encode inputted text into the correct number pairs", () => {
        const input = "thinkful";
        const actual = polybius(input);
        expect(actual).to.equal("4432423352125413");
    });

    it("should decode input into the letter corresponding with the number pairs", () => {
        const input = "4432423352125413";
        const actual = polybius(input, false);
        expect(actual).to.equal("thi/jnkful");
    });
});