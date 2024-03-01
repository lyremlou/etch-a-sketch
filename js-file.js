let container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let col = document.createElement("div");
  container.appendChild(col);

  for (let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.setAttribute("class", "grid");
    row.addEventListener("mouseover", () => {
      row.setAttribute("style", "background: purple;");
    });

    col.appendChild(row);
  }
}
