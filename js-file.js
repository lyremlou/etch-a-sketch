let container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let col = document.createElement("div");
  container.appendChild(col);

  for (let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.setAttribute("class", "grid");
    row.addEventListener("mouseenter", () => {
      row.setAttribute("style", "background: purple;");
    });
    row.addEventListener("mouseleave", () => {
      row.setAttribute("style", "background: white;");
    });
    col.appendChild(row);
  }
  
}
