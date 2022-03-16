module.exports = function vShortKeys(data) {
    this.debug = false;
    this.shortKeys = data.shortKeys || [];
    this.currentPresses = [];
    this.intervalObject = null;

    this.options = {
        loopInterval: (1000 / 60), // loop interval in milliseconds
    };


    //? Start and stop methods.
    this.start = () => {
        this.intervalObject = setInterval(this.loop, this.options.loopInterval);
    };

    this.stop = () => {
        clearInterval(this.intervalObject);
        this.intervalObject = null;
        this.currentPresses = [];
    };


    //? Main Looping Function
    this.loop = () => {
        //console.time('shortCutFunction');
        if (this.currentPresses.length > 0) {
            console.log(this.currentPresses);
            var i, j;
            for (i = 0; i < this.shortKeys.length; i++) {
                if (this.shortKeys[i].disabled !== true) {
                    var btnNum = this.shortKeys[i].buttons.length;
                    for (j = 0; j < this.shortKeys[i].buttons.length; j++) {
                        if (this.currentPresses.indexOf(this.shortKeys[i].buttons[j]) > -1) {
                            btnNum--;
                        }
                    }
                    if (btnNum == 0) {
                        var timeDelta = Date.now() - this.shortKeys[i].date;
                        if (((this.shortKeys[i].triggered == false) || (timeDelta > this.shortKeys[i].autoTrigger)) && (timeDelta > this.shortKeys[i].coolDown )) {
                            this.shortKeys[i].exec();
                            this.shortKeys[i].date = Date.now();
                            this.shortKeys[i].triggered = true;
                            console.warn(`Triggered : ${this.shortKeys[i].name}`);
                        }
                    } else {
                        if (this.shortKeys[i].triggered) {
                            this.shortKeys[i].triggered = false;
                            console.warn(`UN-Triggered : ${this.shortKeys[i].name}`);
                        }
                    }
                }
            }
        }
        //console.timeEnd('shortCutFunction');
    };


    //? Event Handlers [ KeyDown, KeyUp ]
    this.keyDown = (event) => {
        var key = event.keyCode;
        if (!this.currentPresses.includes(key)) {
            this.currentPresses.push(key);
        }
    };

    this.keyUp = (ev) => {
        var key = ev.keyCode;
        var index = this.currentPresses.indexOf(key);
        if (index > -1) {
            this.currentPresses.splice(index, 1);
        }
    };


    //* Setting up options
    this.setLoopInterval = (interval) => {
        try {
            console.info(`Setting LoopInterval Value to ${interval}`);
            this.options.loopInterval = interval;
            return this;
        } catch (e) {
            return e;
        }
    };

    this.setDebug = (debug) => {
        try {
            console.info(`Setting Debug Value to ${debug}`);
            if (typeof debug === 'boolean') {
                this.debug = debug;
            } else {
                throw new Error('Debug Value must be a boolean');
            }
            return this;
        } catch (e) {
            return e;
        }
    };

    this.setOptions = (options) => { 
        console.info(`Setting Options`);
        if (options.loopInterval !== undefined) this.setLoopInterval(options.loopInterval);
        if (options.debug !== undefined) this.setDebug(options.debug);
    };


    this.setEventListeners = () => {
        window.addEventListener("keydown", this.keyDown);
        window.addEventListener("keyup", this.keyUp);
        window.addEventListener('blur', this.stop);
        window.addEventListener('focus', this.start);
        return this;
    };

    if (data.options !== undefined) this.setOptions(data.options);

    this.setEventListeners();
    this.start();
};
