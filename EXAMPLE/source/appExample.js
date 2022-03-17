//* Loading of some random things to make the example work
const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = require('./helpers');


//?- - - - - - - - - - -
//? Load the thing.
const vShortKeys = require('../../');

//? Create an instance of it.
var vsk = new vShortKeys();

// vsk.setDebug(true);

//? Register few shortcuts.
//* vShortKeys.registerShortcut(name, buttons, callback, description, autoTrigger, coolDown)
vsk.registerShortcut("clearConsole", [67, 83], clearConsole, "[c + s] \n Will clear the console messages.", 500, 1000);
vsk.registerShortcut("rootModal", [77, 79, 68], toggleRootModal, "[m + o + d] \n Random demo modal pops up.", 2000, 1000);
vsk.registerShortcut("fullScreen.toggle", [18, 13], fullScreen.toggle, "[alt + enter] \n Toggler for the fullscreen mode.", 1000, 0);
vsk.registerShortcut("console.log", [81, 87, 69], messageConsoleDemo, "[q + w + e] \n This will send console log message.", 250, 1000);

vsk.registerShortcut("number1", [49], () => console.log('YEA Demo Button 1'));
vsk.registerShortcut("enableRootModal", [69, 82, 77], () => vsk.enableShortcut("rootModal"), "[e + r + m] \n Enable Root Modal Shortcut.", 1000, 0);
vsk.registerShortcut("disableRootModal", [68, 82, 77], () => vsk.disableShortcut("rootModal"), "[d + r + m] \n Disable Root Modal Shortcut.", 1000, 0);

vsk.registerShortcut("closeWindow", [18, 67], closeWindowFunc, "[alt + c] \n Will try to close the window. NOTE:Disabled so we dont press it at random.", 0, 0);
vsk.registerShortcut("reEnableCloseWindow", [69, 67, 87], () => vsk.enableShortcut("closeWindow"), "[w + e + c] \n Re-Enable [closeWindow] Shortcut .", 1000, 0);

//? Disable the one that can close the tab.
vsk.disableShortcut("closeWindow");
//!---------------------------------------------






console.log(vsk);
console.table(vsk.shortKeys);


var skList = vsk.shortKeys;

var stringShortKeys = '<h4>Shortcodes:</h4>';

for (let i = 0; i < skList.length; i++) {
  stringShortKeys += `
                        <div class="singleShotCode">
                            <p class="name"><span class="number">${i + 1}. ${skList[i].name}()</span></p>
                            <p>🎹 Keys : ${JSON.stringify(skList[i].buttons)}</p>
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
