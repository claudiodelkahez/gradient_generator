let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');


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

//generate CSS code for gradient

function generateCode() {
    outputCode.value = `background-image: linear-gradient (${currentDirection}, ${colorOne.value}, ${colorTwo.value});`

    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`
}