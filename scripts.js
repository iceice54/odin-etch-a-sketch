const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid");

    gridContainer.appendChild(div);
}
