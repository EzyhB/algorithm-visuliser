export var LinearSearch = function(array, target) {
    let timer = 2000;
    for (let i = 0; i < array.length; i++) {
        console.log(i);
        if (array[i] == target) {
            linearAnimationsFound(i, timer);
            return array[i];
        }
        linearAnimations(i, timer);
        timer += 2000;
    }
};

function linearAnimations(index, timer) {
    setTimeout(() => {
        let graphIndex = document.querySelector(`#a${index}`);
        graphIndex.classList.toggle("middle");
    }, timer);
}

function linearAnimationsFound(index, timer) {
    setTimeout(() => {
        let graphIndex = document.querySelector(`#a${index}`);
        graphIndex.classList.toggle("found");
    }, timer);
}