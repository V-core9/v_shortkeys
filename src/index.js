const vShortKeyItem = require('./shortcut-item-class');

const dbg = require('./debug');
const { log, warn, info } = dbg;

module.exports = function vShortKeys(data = {}) {
  this.shortKeys = data.shortKeys || [];
  this.currentPresses = [];
  this.intervalObject = null;
  this.loopInterval = (1000 / 60); // loop interval in milliseconds

  //? Start and stop methods.
  this.start = () => {
    this.intervalObject = setInterval(this.loop, this.loopInterval);
  };

  this.stop = () => {
    clearInterval(this.intervalObject);
    this.intervalObject = null;
    this.currentPresses = [];
  };

  //? Main Looping Function
  this.loop = () => {
    if (this.currentPresses.length > 0) {
      log(this.currentPresses);
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
            if (((this.shortKeys[i].triggered == false) || (timeDelta > this.shortKeys[i].autoTrigger)) && (timeDelta > this.shortKeys[i].coolDown)) {
              this.shortKeys[i].exec();
              this.shortKeys[i].date = Date.now();
              this.shortKeys[i].triggered = true;
              warn(`Triggered : ${this.shortKeys[i].name}`);
            }
          } else {
            if (this.shortKeys[i].triggered) this.shortKeys[i].triggered = false;
          }
        }
      }
    }

  };

  this.findByName = (name) => {
    for (var i = 0; i < this.shortKeys.length; i++) {
      if (this.shortKeys[i].name == name) return this.shortKeys[i];
    }
    return null;
  };

  //? Enable/Disable Shortcut
  this.enableShortcut = (name) => {
    try {
      var item = this.findByName(name);
      if (item.disabled !== true) {
        log(`🧯 Failed : Shortcut is already enabled [${name}]`);
        return false;
      } else {
        item.disabled = false;
        log(`🟢 Shortcut Enabled : ${name}`);
        return true;
      }
    } catch (err) {
      return err;
    }
  };

  this.disableShortcut = (name) => {
    try {
      var item = this.findByName(name);
      if (item.disabled) {
        log(`🧯 Failed : Shortcut is already disabled [${name}]`);
        return false;
      } else {
        this.findByName(name).disabled = true;
        log(`🛑 Disabled Shortcut : ${name}`);
        return true;
      }
    } catch (err) {
      return err;
    }
  };


  //? Method to [un]register new Shortcuts
  this.registerShortcut = (name, buttons, exec, description = "", autoTrigger = 0, coolDown = 0) => {
    var item = this.findByName(name);
    if (item === null) {
      var newItem = new vShortKeyItem(name, buttons, exec, description, autoTrigger, coolDown);
      this.shortKeys.push(newItem);
      info(`✅ Shortcut Registered : ${name}`);
    } else {
      return warn(`❌ Shortcut Already Registered : ${name}`);
    }
  };

  this.unregisterShortcut = (name) => {
    var item = this.findByName(name);
    if (item) {
      this.shortKeys.splice(this.shortKeys.indexOf(item), 1);
      info(`🧨 Shortcut Unregistered : ${name}`);
    } else {
      warn(`❌ Failed : Shortcut not found [${name}]`);
    }
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


  //? Handle setting different interval
  this.setLoopInterval = (interval) => {
    try {
      info(`Setting LoopInterval Value to ${interval}`);
      this.loopInterval = interval;
      this.stop();
      this.start();
      return this;
    } catch (err) {
      return (err);
    }
  };

  //? Method to set option[s]
  this.setOption = (options = {}) => {
    info(`📐 Setting Options`);
    if (options.debug !== undefined) dbg.debug = options.debug;
    if (options.interval !== undefined) this.setLoopInterval(options.interval);
  };


  this.setEventListeners = () => {
    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("keyup", this.keyUp);
    window.addEventListener('blur', this.stop);
    window.addEventListener('focus', this.start);
    return this;
  };

  //* In case some options have been passed in.
  if (data.options !== undefined) this.setOption(data.options);

  this.setEventListeners();
  this.start();
};

