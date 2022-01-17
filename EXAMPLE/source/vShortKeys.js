const vskInit = require('../../index');

const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = require('./helpers');

var demoShortKeys = [
    {
        name: "console.log",
        description: "This will send console log message.",
        buttons: [81, 87, 69],
        delay: 50,
        date: 0,
        triggered: false,
        exec: messageConsoleDemo
    },
    {
        name: "fullScreen.toggle",
        description: "Toggler for the fullscreen mode.",
        buttons: [18, 13],
        delay: 1000,
        date: 0,
        triggered: false,
        exec: fullScreen.toggle
    },
    {
        name: "closeWindowFunc",
        description: "Will try to close the window.",
        buttons: [18, 67],
        delay: 0,
        date: 0,
        triggered: false,
        disabled: false,
        exec: closeWindowFunc
    },
    {
        name: "showRootModal",
        description: "Random demo modal pops up.",
        buttons: [77, 79, 68],
        delay: 2000,
        date: 0,
        triggered: false,
        disabled: false,
        exec: toggleRootModal
    },
    {
        name: "clearConsole",
        description: "This will clear the console.",
        buttons: [67, 83],
        delay: 500,
        date: 0,
        triggered: false,
        disabled: false,
        exec: clearConsole
    }
];

vskInit(demoShortKeys);

var stringShortKeys = '<h4>Shortcodes:</h4>';

for(let i = 0; i < demoShortKeys.length; i++) {
    stringShortKeys += `
                        <div class="singleShotCode">
                            <p><span class="number">${i+1}.</span> Keys : ${JSON.stringify(demoShortKeys[i].buttons)} => <span style="color: orange;">${demoShortKeys[i].name}()</span> </p>
                            <p class="description">Description: ${demoShortKeys[i].description}</p>
                            <p class="delay">Delay: ${demoShortKeys[i].delay}</p>
                            ${(demoShortKeys[i].disabled == true ) ? '<p style="color:red;">Disabled</p>' : ''}
                        </div>
                        `;
}

document.querySelector('.docs').innerHTML = stringShortKeys;