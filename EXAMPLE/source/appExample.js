//* Loading of some random things to make the example work
const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = require('./helpers');


//?- - - - - - - - - - -
const vShortKeys = require('../../');
var vsk = new vShortKeys();

vsk.setOption({ debug: true, interval: 250 });

vsk.setOption({ interval: (1000 / 60) });

//* vShortKeys.registerShortcut(name, buttons, callback, description, autoTrigger, coolDown)
//? Super basic example:
vsk.registerShortcut("number1", [49], () => console.log('YEA Demo Button 1'));

//? Register few shortcuts:
vsk.registerShortcut("clearConsole", [67, 83], clearConsole, "Will clear the console messages.", 500, 1000);
vsk.registerShortcut("rootModal", [77, 79, 68], toggleRootModal, "Random demo modal pops up.", 2000, 1000);
vsk.registerShortcut("fullScreen.toggle", [18, 13], fullScreen.toggle, "Toggler for the fullscreen mode.", 1000, 0);
vsk.registerShortcut("console.log", [81, 87, 69], messageConsoleDemo, "This will send console log message.", 250, 1000);

//? Enable and Disable "rootModal" Shortcut using 2 other.
vsk.registerShortcut("enableRootModal", [69, 82, 77], () => vsk.enableShortcut("rootModal"), "Enable Root Modal Shortcut.", 1000, 0);
vsk.registerShortcut("disableRootModal", [68, 82, 77], () => vsk.disableShortcut("rootModal"), "Disable Root Modal Shortcut.", 1000, 0);

//? Probably will not work cuz it needs to open that window before chrome allows you to close it.
vsk.registerShortcut("closeWindow", [18, 67], closeWindowFunc, "Will try to close the window. NOTE:Disabled so we dont press it at random.", 0, 0);
vsk.registerShortcut("reEnableCloseWindow", [69, 67, 87], () => vsk.enableShortcut("closeWindow"), "Re-Enable [closeWindow] Shortcut .", 1000, 0);

//? Enable and Disable debug logging using the shortcuts
vsk.registerShortcut("enableDebugLogging", [68, 66, 71], () => vsk.setOption({ debug: true }), "Enable debug logging", 1000, 0);
vsk.registerShortcut("disableDebugLogging", [71, 66, 72], () => vsk.setOption({ debug: false }), "Disable debug logging", 1000, 0);


//? Disable the one that can close the tab. [init demo]
vsk.disableShortcut("closeWindow");

vsk.setOption({ debug: false });
//!---------------------------------------------


console.log(vsk);
console.table(vsk.shortKeys);


var skList = vsk.shortKeys;

var stringShortKeys = '<h4>Shortcodes:</h4>';
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
