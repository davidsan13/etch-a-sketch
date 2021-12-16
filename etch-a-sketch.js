

init();
const resetBtn = document.querySelector('.reset');
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener("click",clearGrid);
resetBtn.addEventListener("click",createGrid);

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



function createGrid() {
    let userInput = prompt("Entergrid size");
    const div = document.getElementById('sub-container');
    if(userInput === null) {
        init();
        return;
    }
    console.log(userInput);
    console.log(div.firstChild);
    while(div.firstChild){
        div.removeChild(div.firstChild);
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
    const div = document.getElementById('sub-container');
    for(let i = 0; i < div.children.length; i++){
        div.children[i].setAttribute("style"," background-color:white");
    }
}