const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = require('./helpers');

var demoShortKeys = [
    {
        name: "console.log",
        description: "[q + w + e] \n This will send console log message. NOTE:-!-will auto trigger soon as it can cuz coolDown is much bigger than autoTrigger time-!-",
        buttons: [81, 87, 69],
        date: 0,
        triggered: false,
        exec: messageConsoleDemo,
        autoTrigger: 250,
        coolDown: 1000
    },
    {
        name: "fullScreen.toggle",
        description: "[alt + enter] \n Toggler for the fullscreen mode. NOTE:-!-User can trigger it as fast as it gets to release and press back the same buttons-!-",
        buttons: [18, 13],
        autoTrigger: 1000,
        date: 0,
        triggered: false,
        exec: fullScreen.toggle,
        coolDown: 0
    },
    {
        name: "closeWindowFunc",
        description: "[alt + c] \n Will try to close the window. NOTE:Disabled so we dont press it at random.",
        buttons: [18, 67],
        autoTrigger: 0,
        date: 0,
        triggered: false,
        disabled: true,
        exec: closeWindowFunc,
        coolDown: 0
    },
    {
        name: "showRootModal",
        description: "[m + o + d] \n Random demo modal pops up.",
        buttons: [77, 79, 68],
        autoTrigger: 2000,
        date: 0,
        triggered: false,
        disabled: false,
        exec: toggleRootModal,
        coolDown: 1000
    },
    {
        name: "clearConsole",
        description: "[c + s] \n Will clear the console messages.",
        buttons: [67, 83],
        autoTrigger: 500,
        date: 0,
        triggered: false,
        disabled: false,
        exec: clearConsole,
        coolDown: 1000
    }
];

const vShortKeys = require('../../index.v2');

var vsk = new vShortKeys({ shortKeys: demoShortKeys, options: { debug: true, loopInterval: 50 } });

console.log(vsk);

var stringShortKeys = '<h4>Shortcodes:</h4>';

for (let i = 0; i < demoShortKeys.length; i++) {
    stringShortKeys += `
                        <div class="singleShotCode">
                            <p class="name"><span class="number">${i + 1}. ${demoShortKeys[i].name}()</span></p>
                            <p>🎹 Keys : ${JSON.stringify(demoShortKeys[i].buttons)}</p>
                            <p class="delay">⏳ CoolDown: ${demoShortKeys[i].coolDown}ms</p>
                            <p class="delay">🔃 AutoTrigger: ${demoShortKeys[i].autoTrigger}ms</p>
                            ${(demoShortKeys[i].disabled == true) ? '<p style="color:red;">Disabled</p>' : ''}
                            <div class="description">
                                <h4>Description:</h4>
                                <p>${demoShortKeys[i].description}</p>
                            </div>
                        </div>
                        `;
}
document.querySelector('.docs').innerHTML = stringShortKeys;