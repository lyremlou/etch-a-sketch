let container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
  let col1 = document.createElement("div");
  container.appendChild(col1);

  let col2 = document.createElement("div");
  container.appendChild(col2);

  let col3 = document.createElement("div");
  container.appendChild(col3);

  let col4 = document.createElement("div");
  container.appendChild(col4);

  for (let j = 0; j < 16; j++) {
    const row1 = document.createElement("div");
    row1.setAttribute("class", "grid");
    col1.appendChild(row1);

    const row2 = document.createElement("div");
    row2.setAttribute("class", "grid");
    col2.appendChild(row2);

    const row3 = document.createElement("div");
    row3.setAttribute("class", "grid");
    col3.appendChild(row3);

    const row4 = document.createElement("div");
    row4.setAttribute("class", "grid");
    col4.appendChild(row4);
  }
}
