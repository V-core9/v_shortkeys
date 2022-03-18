//* Loading of some random things to make the example work
const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = require('./helpers');


//?- - - - - - - - - - -
const vShortKeys = require('../../');
var vsk = new vShortKeys();
vsk.setOption({ debug: true, interval: 250 });

//* vShortKeys.registerShortcut(name, buttons, callback, description, autoTrigger, coolDown)

//? Super basic example:
//* Register a shortcut for the number 1 key
vsk.registerShortcut("number1", [49], () => console.log('YEA Demo Button 1'));

//* This will not work because the button is already registered
vsk.registerShortcut("number1", [50], () => console.log('YEA Demo Button FAILS'));

//? Unregister a shortcut
vsk.unregisterShortcut("number1");  //-> OK
vsk.unregisterShortcut("number1");  //-> Should Fail...but ok.


//? Register few sample shortcuts:
var sampleKeyList = [
  {
    name: "clearConsole",
    buttons: [67, 83],
    callback: clearConsole,
    description: "Will clear the console messages.",
    autoTrigger: 500,
    coolDown: 1000
  },
  {
    name: "rootModal",
    buttons: [77, 79, 68],
    callback: toggleRootModal,
    description: "Random demo modal pops up.",
    autoTrigger: 2000,
    coolDown: 1000
  },
  {
    name: "fullScreen.toggle",
    buttons: [18, 13],
    callback: fullScreen.toggle,
    description: "Toggler for the fullscreen mode.",
    autoTrigger: 1000,
    coolDown: 0
  },
  {
    name: "console.log",
    buttons: [81, 87, 69],
    callback: messageConsoleDemo,
    description: "This will send console log message.",
    autoTrigger: 250,
    coolDown: 1000
  },
];
sampleKeyList.map(item => vsk.registerShortcut(item.name, item.buttons, item.callback, item.description, item.autoTrigger, item.coolDown));

//? Enable and Disable "rootModal" Shortcut using 2 other.
vsk.registerShortcut("enableRootModal", [69, 82, 77], () => vsk.enableShortcut("rootModal"), "Enable [RootModal] Shortcut.", 1000, 0);
vsk.registerShortcut("disableRootModal", [68, 82, 77], () => vsk.disableShortcut("rootModal"), "Disable [RootModal] Shortcut.", 1000, 0);

//? Probably will not work cuz it needs to open that window before chrome allows you to close it.
vsk.registerShortcut("closeWindow", [18, 67], closeWindowFunc, "Will try to close the window. \nNOTE: Usually fails to do it :D", 0, 0);
vsk.registerShortcut("reEnableCloseWindow", [69, 67, 87], () => vsk.enableShortcut("closeWindow"), "Re-Enable [closeWindow] Shortcut.", 1000, 0);

//? Enable and Disable debug logging using the shortcuts
vsk.registerShortcut("enableDebugLogging", [68, 66, 71], () => vsk.setOption({ debug: true }), "Enable debug logging", 1000, 0);
vsk.registerShortcut("disableDebugLogging", [71, 66, 72], () => vsk.setOption({ debug: false }), "Disable debug logging", 1000, 0);

//? Disable & Enable
vsk.disableShortcut("closeWindow");
vsk.disableShortcut("clearConsole");
vsk.enableShortcut("clearConsole");

//? Set interval to 60Hz
vsk.setOption({ interval: (1000 / 60) });
//? Disable debug logging
vsk.setOption({ debug: false });
//!---------------------------------------------


console.log(vsk);
console.table(vsk.shortKeys);


var skList = vsk.shortKeys;

var stringShortKeys = '';
for (let i = 0; i < skList.length; i++) {
  stringShortKeys += `
                        <div class="singleShotCode">
                            <p class="name"><span class="number">${i + 1}. ${skList[i].name}()</span></p>
                            <p>🎹 Keys : ${JSON.stringify(skList[i].buttons.map(item => String.fromCharCode(item)))}</p>
                            <p class="delay">⏳ CoolDown: ${skList[i].coolDown}ms</p>
                            <p class="delay">🔃 AutoTrigger: ${skList[i].autoTrigger}ms</p>
                            ${(skList[i].disabled == true) ? '<p style="color:red;">Disabled</p>' : ''}
                            <div class="description">
                                <h4>Description:</h4>
                                <p>${skList[i].description}</p>
                            </div>
                        </div>
                        `;
}
document.querySelector('.docs').innerHTML = stringShortKeys;
