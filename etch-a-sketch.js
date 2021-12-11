
for(let row = 0; row <= 16; row++) {
    const container = document.querySelector('#container');
    const newDiv = document.createElement("div");
    newDiv.classList.add('div'+ row)
    container.appendChild(newDiv);
    for(let column = 1; column <= 16; column++) {
        const container = document.querySelector(".div" + row);
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("hi");
        newDiv.appendChild(newContent)
        newDiv.classList.add('column' + column)
        container.appendChild(newDiv);
        
        
    }
    
}