import { binarySearch } from "../algorithms/binarySearch.js";
import { LinearSearch } from "../algorithms/linearSearch.js";
// import { getAlgoInfoFromDB } from "../modles/algoInfo.js";

// im

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// binary search
const newGraphButton = document.querySelector("#new-graph");
const graphData = document.querySelector(".graph");
const graphItems = document.querySelector(".graph-Items");
const graphHeader = document.querySelector("#graph-title");

let arr = [];
//generate graph data
var generateBinary = function() {
    graphHeader.innerHTML = "";
    arr = [];
    let num = 32;
    let data = 5;
    graphItems.innerHTML = "";
    let id = 0;
    while (num > 0) {
        let randomNum = getRandomArbitrary(5, 30);
        data += randomNum;
        let i = arr.push(data);
        var item = document.createElement(`li`);
        item.id = `a${id}`;
        item.innerHTML = `${data}`;
        graphItems.appendChild(item);
        num--;
        id++;
    }

    // call another function to make visual graph
};

newGraphButton.addEventListener("click", generateBinary);

//generate binary search number
const randomIntButton = document.querySelector("#search-random-int");
const searchNumber = document.querySelector("#search-int");

var searchRandomIntBinary = function() {
    let arrIndex = getRandomArbitrary(0, arr.length - 1);
    searchNumber.innerHTML = `searching for number: ${arr[arrIndex]}`;
    //call function to search for the number
    binarySearch(arr, arr[arrIndex]);
};

randomIntButton.addEventListener("click", searchRandomIntBinary);

// get liniar search number

const linearButton = document.querySelector("#search-linear-int");
var searchRandomIntLiniar = function() {
    let arrIndex = getRandomArbitrary(0, arr.length - 1);
    searchNumber.innerHTML = `searching for number: ${arr[arrIndex]}`;
    //call function to search for the number
    LinearSearch(arr, arr[arrIndex]);
};
linearButton.addEventListener("click", searchRandomIntLiniar);

//the DB stuff

const dbSearchBar = document.querySelector("#input-algorithm");
const dbSearchButton = document.querySelector("#search-algorithm");

const dbH1Name = document.querySelector("#algorithm-name");
const dbH3Info = document.querySelector("#algorithm-info");

let searchedAlgo = "";

function dbQueryType(e) {
    searchedAlgo = e.target.value;
}
dbSearchBar.addEventListener("keyup", dbQueryType);

async function dbQueryPress() {
    const data = await getAlgoInfoFromDB(searchedAlgo);
    dbH1Name.innerHTML = searchedAlgo;
    dbH3Info.innerHTML = data;
}
dbSearchButton.addEventListener("click", dbQueryPress);