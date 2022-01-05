let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currentDirection = 'to bottom';
let outputCod = document.getElementById('code');


//set gradient direction

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
    console.log(currentDirection);
}