//calculated using height of viewport - height of button
const HEIGHT_OF_GRID = "936px";
const gridContainer = document.querySelector("#gridContainer");

function createGrid (numOfSquaresPerSide) {
    for (let i = 0; i < (numOfSquaresPerSide * numOfSquaresPerSide); i++) {
        const div = document.createElement("div");
        div.classList.toggle("square");

        // calculate height of square = height of grid/squares per side
        div.style.height = (Number(HEIGHT_OF_GRID.replace("px", ""))/numOfSquaresPerSide) + "px";
        // for square height = width
        div.style.width = div.style.height;
        div.brightness = 0;
    
        div.addEventListener("mouseover", () => {
            // div.classList.toggle("hovered");
            if (!div.brightness) {
                div.brightness = 10
                div.style.filter = `brightness(${div.brightness}%)`
                div.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`;
            } else {
                div.brightness += 10
                div.style.filter = `brightness(${div.brightness}%)`
            }
        })
    
        div.addEventListener("mouseout", () => {
            // div.classList.toggle("hovered");
            // div.style.backgroundColor = null;
        })
    
        gridContainer.appendChild(div);
    }
}

const newGridButton = document.querySelector("#newGridButton");

newGridButton.addEventListener("click", () => {
    console.log("click")
    let numOfSquaresPerSide = prompt("How many number of squares per side from 1-100 would you like in the new grid?");
    //deal with invalid inputs
    if (numOfSquaresPerSide == null | numOfSquaresPerSide < 1 | numOfSquaresPerSide > 100) {
        alert("Please enter a value between 1 and 100.")
    } else {
        //replaceChildren removes all children from the gridContainer, clearing all previous divs
        gridContainer.replaceChildren();
        createGrid(numOfSquaresPerSide);
    }
})

createGrid(16);