const containerDiv = document.querySelector(".container");

let numOfRows = 4;
let numOfColumns = 4;
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
