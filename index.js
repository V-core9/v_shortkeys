const vShortKeys = {
    currentPresses: [],
    scInterval: 1,
    intObject: null,
    scArray: [],

    stop : async () => {
        clearInterval(vShortKeys.intObject);
        vShortKeys.intObject = null;
        vShortKeys.currentPresses = [];
    },
    
    start : async () => {
        vShortKeys.intObject = setInterval(vShortKeys.loop, vShortKeys.scInterval);
    },
    
    keyDown : async (event) => {
        var key = event.keyCode;
        if (!vShortKeys.currentPresses.includes(key)) {
            vShortKeys.currentPresses.push(key);
        }
    },
    
    keyUp : async (event) => {
        var key = event.keyCode;
        var index = vShortKeys.currentPresses.indexOf(key);
        if (index > -1) {
            vShortKeys.currentPresses.splice(index, 1);
        }
    },
    loop : async () => {
        console.time('shortCutFunction');
        if (vShortKeys.currentPresses.length > 0) {
            console.log(vShortKeys.currentPresses);
            var i, j;
            for (i = 0; i < vShortKeys.scArray.length; i++) {
                if (vShortKeys.scArray[i].disabled !== true) {
                    var btnNum = vShortKeys.scArray[i].buttons.length;
                    for (j = 0; j < vShortKeys.scArray[i].buttons.length; j++) {
                        if (vShortKeys.currentPresses.indexOf(vShortKeys.scArray[i].buttons[j]) > -1) {
                            btnNum--;
                        }
                    }
                    if (btnNum == 0) {
                        if ((vShortKeys.scArray[i].triggered == false) || ((Date.now() - vShortKeys.scArray[i].date) > vShortKeys.scArray[i].delay)) {
                            vShortKeys.scArray[i].exec();
                            vShortKeys.scArray[i].date = Date.now();
                            vShortKeys.scArray[i].triggered = true;
                        }
                    } else {
                        if (vShortKeys.scArray[i].triggered) {
                            vShortKeys.scArray[i].triggered = false;
                        }
                    }
                }
            }
        }
        console.timeEnd('shortCutFunction');
    },
    init : async (shortKeys) => {
        vShortKeys.scArray = shortKeys;
    
        window.addEventListener("keydown", vShortKeys.keyDown);
        window.addEventListener("keyup", vShortKeys.keyUp);
        window.addEventListener('blur', vShortKeys.stop);
        window.addEventListener('focus', vShortKeys.start);
        
        vShortKeys.start();
    }
};


module.exports = vShortKeys;