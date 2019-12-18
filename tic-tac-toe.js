const possibleOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
let strikes = 0; let boardList = [];

const rollDice = () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    animateDice();
    setTimeout(function () {
        const roll1 = document.getElementById('dice1');
        const roll2 = document.getElementById('dice2');
        
        roll1.innerHTML = "<img src='images/" + die1 + ".png' alt='" + die1 + "'>";
        roll2.innerHTML = "<img src='images/" + die2 + ".png' alt='" + die2 + "'>";

        checkNumber(die1 + die2);
        checkStrikes();
    }, 1200)
} 

const setBoard = () => {
    let availableOptions = possibleOptions;
    let squareIdx = 0;
    while (availableOptions.length > 2) {
        let selection = Math.floor(Math.random() * availableOptions.length);
        document.querySelectorAll('.square')[squareIdx].innerText = availableOptions[selection];
        boardList.push(availableOptions[selection]);
        squareIdx++;
        availableOptions.splice(selection, 1);
    }
}

const checkNumber = (roll) => {
    let numberCheck = false;
    document.querySelectorAll('#num-grid .box').forEach(box => {
        if ((box.innerText == roll) && (box.lastElementChild.style.display == '')) {
            box.lastElementChild.style.display = 'block';
            numberCheck = true;
        }
    });
    if (numberCheck === false) {
        strikes++;
    }
}

const checkStrikes = () => {
    const strikeBoxes = document.querySelectorAll('.strike');
    for (let idx = 0; idx < strikes; idx++) {
        strikeBoxes[idx].style.backgroundColor = 'red';
    }
    if (strikes === 3) {
        document.querySelectorAll('#num-grid .box')
    }
}

const animateDice = () => {
    const dice = document.getElementById('dice_roll')
    dice.style.display = 'block';

    let width = 25; let height = 25;
    // let left = 0; let right = 0;
    dice.style.width = width + '%';
    dice.style.height = height + '%';
    const grow = setInterval(function () {
        dice.style.width = width + '%';
        dice.style.height = height + '%';
        if ((width < 100) && (height < 100)) {
            width += 1;
            height += 1;
        }
    }, 8);

    

    setTimeout(function () {
        clearInterval(grow);

    }, 600);


    setTimeout(function () {
        document.getElementById('dice_roll').style.display = 'none';
    }, 1200)
}


const button = document.getElementById('roll-button');
button.addEventListener('click', rollDice);


setBoard();