export var binarySearch = function(array, target) {
    let right = array.length - 1;
    let left = 0;
    let mid = parseInt((right + left) / 2);
    let timer = 3000;

    if (array.length == 1) {
        binaryAnimationsMid(mid, timer);
        return array[right];
    } else if (array.length == 0) {
        binaryAnimationsMid(mid, timer);
        return array;
    }

    binaryAnimationsRight(right, timer);
    binaryAnimationsLeft(left, timer);
    binaryAnimationsMid(mid, timer);

    while (left <= right) {
        binaryAnimationsMid(mid, timer);
        mid = parseInt((right + left) / 2);
        // setTimeout(() => {
        binaryAnimationsMid(mid, timer);
        // }, timer);
        timer += 2000;
        if (array[mid] > target) {
            binaryAnimationsRight(right, timer);
            right = mid - 1;
            binaryAnimationsRight(right, timer);
        } else if (array[mid] < target) {
            binaryAnimationsLeft(left, timer);
            left = mid + 1;
            binaryAnimationsLeft(left, timer);
        } else {
            binaryAnimationsMid(mid, timer);
            binaryAnimationsFound(mid, timer);
            return array[mid];
        }

        timer += 3000;
    }

    return "value not found!";
};

function binaryAnimationsRight(right, timer) {
    setTimeout(() => {
        let graphRight = document.querySelector(`#a${right}`);
        graphRight.classList.toggle("right");
    }, timer);
}

function binaryAnimationsLeft(left, timer) {
    setTimeout(() => {
        let graphLeft = document.querySelector(`#a${left}`);
        graphLeft.classList.toggle("left");
    }, timer);
}

function binaryAnimationsMid(mid, timer) {
    setTimeout(() => {
        let graphMid = document.querySelector(`#a${mid}`);
        graphMid.classList.toggle("middle");
    }, timer);
}

function binaryAnimationsFound(mid, timer) {
    setTimeout(() => {
        let graphFound = document.querySelector(`#a${mid}`);
        graphFound.classList.toggle(`found`);
    }, timer);
}