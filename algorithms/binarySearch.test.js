import { binarySearch } from "./binarySearch.js";

describe("Does the binary search return the 'target' value", () => {
    it("should return empty array [] when input array is empty", () => {
        let inputArray = [];
        let inputTarget = 0;
        let actual = binarySearch(inputArray, inputTarget);
        let expected = [];

        expect(actual).toBe(expected);
    });

    it("should return 302 when target = 302", () => {
        let inputArray = [
            240, 156, 226, 487, 379, 57, 164, 487, 48, 97, 381, 105, 15, 302,
        ];
        let inputTarget = 302;

        expect(binarySearch(inputArray, inputTarget)).toBe(302);
    });

    it("should return 240 when target = 240", () => {
        let inputArray = [
            240, 156, 226, 487, 379, 57, 164, 487, 48, 97, 381, 105, 15, 302,
        ];
        let inputTarget = 240;

        expect(binarySearch(inputArray, inputTarget)).toBe(240);
    });

    it("should return 43 when target = 43", () => {
        let inputArray = [
            144, 278, 481, 327, 131, 409, 108, 271, 369, 318, 102, 279, 168, 216, 43,
            165, 126,
        ];
        let inputTarget = 43;

        expect(binarySearch(inputArray, inputTarget)).toBe(43);
    });

    it("should return 0 when target = 0", () => {
        let inputArray = [0];
        let inputTarget = 0;

        expect(binarySearch(inputArray, inputTarget)).toBe(0);
    });
});