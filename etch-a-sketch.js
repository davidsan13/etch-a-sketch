

init();
createResetButton();

function init(){
    for(let row = 0; row < 16* 16; row++) {
        const container = document.querySelector('#sub-container');
        container.style.gridTemplateColumns= `repeat(16, 1fr)`
        const newDiv = document.createElement("div");
        newDiv.classList.add('div'+ row)
        container.appendChild(newDiv);
        const grid = document.querySelectorAll('.div' + row);
        grid.forEach(function(gr) {
            gr.addEventListener("mouseover", hover);
        });
    }
}

function createResetButton(){
    const container = document.querySelector('#sub-container');
    const div = document.createElement('BUTTON');
    div.innerHTML = "RESET"
    div.classList.add('reset')
    container.appendChild(div);
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener("click",createGrid)
}

function createGrid() {
    let userInput = prompt("Entergrid size");
    const div = document.getElementById('sub-container');
    console.log(div);
    console.log(div.firstChild);
    while(div.firstChild){
        div.removeChild(div.firstChild);
        console.log("hi")
    }
    for(let row = 0; row < userInput * userInput; row++) {
        const container = document.querySelector('#sub-container');
        container.style.gridTemplateColumns= `repeat(${userInput}, 1fr)`;
        const newDiv = document.createElement("div");
        newDiv.classList.add('div'+ row)
        container.appendChild(newDiv);
        const grid = document.querySelectorAll('.div' + row);
        grid.forEach(function(gr) {
            gr.addEventListener("mouseover", hover);
        });
    }
}

function hover() {
    this.setAttribute("style", "background-color: black;")
}

function clearGrid() {
}