const containerDiv = document.querySelector(".grid-container");
const UserDefGridBtn = document.querySelector(".user-defined-grid");

let numOfRows = 16;
let numOfColumns = 16;
let rowElements = [];
let columnElements = [];

function generateGrid(numOfRows,numOfColumns) {
  let rowItem;
  let columnItem;

  for (let i = 0; i < numOfRows; i++) {
    rowItem = document.createElement("div")
    rowItem.classList.add("row");
    rowItem.classList.add("row-"+(i+1));
    rowElements.push(rowItem);

    for (let j = 0; j < numOfColumns; j++) {
      columnItem = document.createElement("div");
      columnItem.classList.add("column");
      columnItem.classList.add("row-"+(i+1)+"-column-"+(j+1));
      columnElements.push(columnItem);
      rowElements[i].appendChild(columnItem);
    }
    containerDiv.appendChild(rowElements[i]);
    hoverEffect();
  }
}

function hoverEffect() {
  function randomColour() {
    const colours = ['red','orange','yellow','green','blue','indigo','violet'];

    return colours[Math.floor(Math.random()*7)];
  }

  for (row in rowElements) {
    rowElements[row].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = randomColour();

      setTimeout(() => {
        e.target.style.backgroundColor = "";
      }, 2500);
    });
  }
}

UserDefGridBtn.addEventListener("click", () => {
  let gridNumber = prompt("Please enter number (under 100): ");

  if (gridNumber < 101) {
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

generateGrid(numOfRows,numOfColumns);