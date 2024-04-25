const containerDiv = document.querySelector(".grid-container");
const UserDefGridBtn = document.querySelector(".user-defined-grid");

let numOfRows = 3;
let numOfColumns = 3;
let rowElements = [];
let columnElements = [];

function generateGrid(numOfRows,numOfColumns) {
  let rowItem;
  let columnItem;

  for (let i = 0; i < numOfRows; i++) {
    rowItem = document.createElement("div")
    rowItem.classList.add("row");
    rowElements.push(rowItem);

    for (let j = 0; j < numOfColumns; j++) {
      columnItem = document.createElement("div");
      columnItem.classList.add("column");
      columnElements.push(columnItem);
      rowElements[i].appendChild(columnItem);
    }
    containerDiv.appendChild(rowElements[i]);
  }
}

generateGrid(numOfRows,numOfColumns);

UserDefGridBtn.addEventListener("click", () => {
  let gridNumber = prompt("Please enter number (under 100): ");

  if (gridNumber < 101) {
    console.log(`You've entered : ${gridNumber}`);
    rowElements = [];
    columnElements = [];
  
    while (containerDiv.hasChildNodes()) {
      containerDiv.removeChild(containerDiv.firstChild);
    }
  
    generateGrid(gridNumber,gridNumber);
  } else {
    alert(`${gridNumber} too high. Should be under 100!`)
  }
});