
for(let row = 0; row < 16; row++) {
    const container = document.querySelector('#container');
    const newDiv = document.createElement("div");
    newDiv.classList.add('div'+ row)
    newDiv.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    container.appendChild(newDiv);
    for(let column = 0; column < 16; column++) {
        const container = document.querySelector(".div" + row);
        const newDiv = document.createElement("div");
        newDiv.classList.add('column' + column)
        newDiv.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        container.appendChild(newDiv);

        const grid = document.querySelectorAll('.column' + column);
        console.log(grid)
        /* grid.forEach(function(gr) {
            gr.addEventListener("mouseover", hover);
        })*/
    }
}
createResetButton()

function createResetButton(){
    const container = document.querySelector('#container');
    const div = document.createElement('BUTTON');
    div.innerHTML = "RESET"
    div.classList.add('reset')
    container.appendChild(div);
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener("click",createGrid)
}

function createGrid() {
    const container = document.querySelector('#container');
    container.style.setProperty('grid-template-columns: repeat('userInput',25px [col-start])')
    let userInput = prompt("Entergrid size");
    let div = document.getElementById('container');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for(let row = 0; row < userInput; row++) {

        const container = document.querySelector('#container');
        const newDiv = document.createElement("div");
        newDiv.classList.add('div'+ row)
        container.appendChild(newDiv);
        for(let column = 0; column < userInput; column++) {
            const container = document.querySelector(".div" + row);
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("hi");
            newDiv.appendChild(newContent)
            newDiv.classList.add('column' + column)
            container.appendChild(newDiv);
            const grid = document.querySelectorAll('.column' + column);
            console.log(grid)
            /*grid.forEach(function(gr) {
                gr.addEventListener("mouseover", hover);
            })*/
        }
    }
}

/* function hover() {
    this.setAttribute("style", "background-color: black;")
}*/

function clearGrid() {

}