module.exports = function vShortKeyItem(name, buttons, exec, description = "", autoTrigger = 0, coolDown = 0) {
  this.name = name;
  this.description = description;
  this.buttons = buttons;
  this.exec = exec;
  this.autoTrigger = autoTrigger;
  this.coolDown = coolDown;
  this.date = Date.now();
  this.triggered = false;
  this.disabled = false;
};
