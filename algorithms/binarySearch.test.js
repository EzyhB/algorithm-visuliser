import { binarySearch } from "./binarySearch.js";

describe("Does the binary search return the 'target' value", () => {
    it("should return 252 when target = 252", () => {
        let inputArray = [
            32, 40, 66, 90, 111, 135, 153, 162, 168, 173, 201, 230, 237, 242, 252,
        ];
        let inputTarget = 252;

        expect(binarySearch(inputArray, inputTarget)).toBe(252);
    });

    it("should return 32 when target = 32", () => {
        let inputArray = [
            32, 40, 66, 90, 111, 135, 153, 162, 168, 173, 201, 230, 237, 242, 252,
        ];
        let inputTarget = 32;

        expect(binarySearch(inputArray, inputTarget)).toBe(32);
    });

    it("should return 237 when target = 237", () => {
        let inputArray = [
            32, 40, 66, 90, 111, 135, 153, 162, 168, 173, 201, 230, 237, 242, 252,
        ];
        let inputTarget = 237;

        expect(binarySearch(inputArray, inputTarget)).toBe(237);
    });

    it("should return 0 when target = 0", () => {
        let inputArray = [0];
        let inputTarget = 0;

        expect(binarySearch(inputArray, inputTarget)).toBe(0);
    });

    it("should return 'Value not found!' when target does not exist in the array", () => {
        let inputArray = [
            32, 40, 66, 90, 111, 135, 153, 162, 168, 173, 201, 230, 237, 242, 252,
        ];
        let inputTarget = 0;

        expect(binarySearch(inputArray, inputTarget)).toBe("value not found!");
    });
});