

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener("click",clearGrid);
const slider = document.getElementById("myRange");
const output = document.getElementById("text");

slider.addEventListener("click",createGrid);
output.innerHTML = slider.value +"x"+ slider.value;
console.log(slider)
slider.oninput =function(){
    output.innerHTML = this.value + "x" + this.value;
}
createGrid();

function createGrid() {
    const div = document.getElementById('sub-container');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for(let row = 0; row < slider.value * slider.value; row++) {
        const container = document.querySelector('#sub-container');
        container.style.gridTemplateColumns= `repeat(${slider.value}, 1fr)`;
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
    const color = document.querySelector('#colorpicker');
    this.setAttribute("style", "background-color:" + color.value + ";")
}

function clearGrid() {
    const div = document.getElementById('sub-container');
    for(let i = 0; i < div.children.length; i++){
        div.children[i].setAttribute("style"," background-color:white");
    }
}


