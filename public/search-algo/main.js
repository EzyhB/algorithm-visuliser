function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// binary search
const newGraphButton = document.querySelector("#new-graph");
const graphData = document.querySelector("#graph");

let arr = [];
//generate graph data
var generateBinary = function() {
    arr = [];
    let num = 30;
    let data = 5;
    while (num > 0) {
        let randomNum = getRandomArbitrary(5, 30);
        let i = arr.push((data += randomNum));
        num--;
    }
    graphData.innerHTML = arr;
    // call another function to make visual graph
};

newGraphButton.addEventListener("click", generateBinary);

//generate binary search number
const randomIntButton = document.querySelector("#search-random-int");
const searchNumber = document.querySelector("#search-int");

var searchRandomInt = function() {
    let arrIndex = getRandomArbitrary(0, arr.length - 1);
    searchNumber.innerHTML = `searching for number: ${arr[arrIndex]}`;
    //call function to search for the number
};

randomIntButton.addEventListener("click", searchRandomInt);