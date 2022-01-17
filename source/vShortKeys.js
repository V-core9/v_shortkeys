const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo } = require('./helpers');

var currentKeyPress = [];

var scArray = [
    {
        name: "console.log",
        buttons: [81, 87, 69],
        delay: 3000,
        date: 0,
        triggered: false,
        exec: messageConsoleDemo
    },
    {
        name: "fullScreen.toggle",
        buttons: [18, 13],
        delay: 3000,
        date: 0,
        triggered: false,
        exec : fullScreen.toggle
    },
    {
        name: "closeWindowFunc",
        buttons: [18, 67],
        delay: 0,
        date: 0,
        triggered: false,
        disabled: false,
        exec: closeWindowFunc
    },
    {
        name: "showRootModal",
        buttons: [77, 79, 68],
        delay: 3000,
        date: 0,
        triggered: false,
        disabled: false,
        exec: toggleRootModal
    }
];

const keyDownFunc = async (event) => {
    var key = event.keyCode;
    if (!currentKeyPress.includes(key)) {
        currentKeyPress.push(key);
    }
};

const keyUpFunc = async (event) => {
    var key = event.keyCode;
    var index = currentKeyPress.indexOf(key);
    if (index > -1) {
        currentKeyPress.splice(index, 1);
    }
};

const shortCutFunction = () => {
    console.time('shortCutFunction');
    var i, j;
    for (i = 0; i < scArray.length; i++) {
        if (scArray[i].disabled !== true) {
            var btnNum = scArray[i].buttons.length;
            for (j = 0; j < scArray[i].buttons.length; j++) {
                if (currentKeyPress.indexOf(scArray[i].buttons[j]) > -1) {
                    btnNum--;
                }
            }
            if (btnNum == 0) {
                if ((scArray[i].triggered == false) || ((Date.now() - scArray[i].date) > scArray[i].delay)) {
                    scArray[i].exec();
                    scArray[i].date = Date.now();
                    scArray[i].triggered = true;
                    console.log(currentKeyPress);
                }
            } else {
                if (scArray[i].triggered) {
                    scArray[i].triggered = false;
                }
            }
        }
    }
    console.timeEnd('shortCutFunction');
};

var skTimeInt = 10;
var shortCutsInterval = setInterval(shortCutFunction, skTimeInt);

document.addEventListener("keydown", keyDownFunc);
document.addEventListener("keyup", keyUpFunc);
