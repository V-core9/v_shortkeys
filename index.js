var currentKeyPress = [];
var scInterval = 10;
var shortCutsInterval = null;
var scArray = [];

const appBlur = async () => {
    console.log('appBlur');
    clearInterval(shortCutsInterval);
    shortCutsInterval = null;
    currentKeyPress = [];
};

const appFocus = async () => {
    console.log('appFocus');
    shortCutsInterval = setInterval(shortCutFunction, scInterval);
};

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
    if (currentKeyPress.length > 0) {
        console.log(currentKeyPress);
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
                    }
                } else {
                    if (scArray[i].triggered) {
                        scArray[i].triggered = false;
                    }
                }
            }
        }
    }
    console.timeEnd('shortCutFunction');
};

const vskInit = (shortKeys) => {
    scArray = shortKeys;

    window.addEventListener("keydown", keyDownFunc);
    window.addEventListener("keyup", keyUpFunc);
    window.addEventListener('blur', appBlur);
    window.addEventListener('focus', appFocus);

    shortCutsInterval = setInterval(shortCutFunction, scInterval);
};

module.exports = vskInit;