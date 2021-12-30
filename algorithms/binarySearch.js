let arr = [243, 89, 43, 484, 322, 412, 81, 43, 338, 44];

export var binarySearch = function(array, target) {
    let right = array.length - 1;
    let left = 0;
    if (array.length == 1) {
        return array[right];
    } else if (array.length == 0) {
        return array;
    }
    while (left <= right) {
        let mid = parseInt((right + left) / 2);
        if (array[mid] > target) {
            right = mid - 1;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            return array[mid];
        }
    }
    return "value not found!";
};