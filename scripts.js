const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid");

    div.addEventListener("mouseover", () => {
        div.classList.toggle("hovered");
        console.log("hovered")
    })

    div.addEventListener("mouseout", () => {
        div.classList.toggle("hovered");
        console.log("unhovered")
    })

    gridContainer.appendChild(div);
}
