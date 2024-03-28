// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should maintain spaces as well as special characters", () => {
        const input = "I'm !@#$%^";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal("j'n !@#$%^");
    });

    it("should ignore capital letters", () => {
        const input = "AbcdE";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal("bcdef");
    });

    it("should return false if alphabet is not exactly 26 letters long", () => {
        const input = "anything";
        const alphabet = "bcdefghijklmnopqrstuvwxyz";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if all characters in alphabet is not unique", () => {
        const input = "anything";
        const alphabet = "zbcdefghijklmnopqrstuvwxyz";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("should properly encode text", () => {
        const input = "hello world";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal("ifmmp xpsme");
    });

    it("should properly decode text", () => {
        const input = "ifmmp xpsme";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal("hello world");
    });
});