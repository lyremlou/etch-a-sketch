let outerContainer = document.querySelector(".container");

let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("class", "btn-div");
outerContainer.appendChild(buttonContainer);

let promptButton = document.createElement("button");
promptButton.textContent = "New Grid";
promptButton.setAttribute("class", "button");
buttonContainer.appendChild(promptButton);

let gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "gridContainer");
outerContainer.appendChild(gridContainer);

let grid = document.createElement("div");
grid.setAttribute("class", "grid");
gridContainer.appendChild(grid);

for (let i = 0; i < 16; i++) {
  let col = document.createElement("div");
  grid.appendChild(col);

  for (let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.setAttribute("class", "grid");
    row.addEventListener("mouseover", () => {
      row.setAttribute("style", "background: purple;");
    });

    col.appendChild(row);
  }
}
