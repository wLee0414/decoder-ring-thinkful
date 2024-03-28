// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift equals 0", () => {
        const input = "anything";
        const shift = 0;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        const input = "anything";
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is greater than 25", () => {
        const input = "anything";
        const shift = 26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is missing", () => {
        const input = "anything";
        const actual = caesar(input);
        expect(actual).to.be.false;
    });

    it("should ignore capital letters", () => {
        const input = "ABc D";
        const shift = 1;
        const actual = caesar(input, shift);
        expect(actual).to.equal("bcd e");
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "zzaa";
        const shift = 1;
        const actual = caesar(input, shift);
        expect(actual).to.equal("aabb");
    });

    it("should maintain spaces and symbols", () => {
        const input = "$# &(ab";
        const shift = 1;
        const actual = caesar(input, shift);
        expect(actual).to.equal("$# &(bc");
    });

    it("should shift to the left if shift is a negative number", () => {
        const input = "abcd";
        const shift = -1;
        const actual = caesar(input, shift);
        expect(actual).to.equal("zabc");
    });

    it("should be able to decode", () => {
        const input = "cbe"
        const shift = 1;
        const actual = caesar(input, shift, false);
        expect(actual).to.equal("bad");
    });
})