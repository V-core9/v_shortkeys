module.exports = function vShortKeyItem(name, buttons, callback, description = "", autoTrigger = 0, coolDown = 0, delay = 0) {
  this.name = name;
  this.description = description;
  this.buttons = buttons;
  this.callback = callback;
  this.autoTrigger = autoTrigger;
  this.coolDown = coolDown;
  this.date = Date.now();
  this.triggered = false;
  this.disabled = false;
  this.delay = delay;
};
