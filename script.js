let num = prompt('enter a number');

let container = document.querySelector('.container');
let randomColorButton = document.querySelector('#random-color');
let blackColorButton = document.querySelector('#black-color');
let clearButton = document.querySelector('#clear-canvas');



function makeRows(rows,columns){
    container.style.setProperty('--grid-cols',columns);
    container.style.setProperty('--grid-rows',rows);

    for(i=0;i < (rows*columns);i++){
        let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    };
};

makeRows(num,num);


////////////

randomColorButton.addEventListener('click',randomColorInk);

function randomColorInk(){

    let colorss = document.querySelectorAll('.grid-item');

    colorss.forEach(onegrid => onegrid.addEventListener('mouseenter',colorgrid));
    
    function colorgrid(e){
      console.log(e.target.style.backgroundColor = randomColor())
    }
    
    function randomColor(){
        let color = "#";
        let randomNumber= Math.floor(Math.random()*16777215).toString(16);
    
        return color+randomNumber;
    }

}


//////////

blackColorButton.addEventListener('click', blackColorInk);

function blackColorInk(){

    let colorss = document.querySelectorAll('.grid-item');

    colorss.forEach(onegrid => onegrid.addEventListener('mouseenter',colorgrid));
    
    function colorgrid(e){
      console.log(e.target.style.backgroundColor = 'black')
    }
    
}

////////


clearButton.addEventListener('click', clearCanvas);

function clearCanvas(){

    let colorss = document.querySelectorAll('.grid-item');

    colorss.forEach(onegrid => onegrid.style.removeProperty('background-color'));
    
}
