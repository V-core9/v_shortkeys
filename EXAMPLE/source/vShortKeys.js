const vskInit = require('../../index');

//!---------------------------------

const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = require('./helpers');

var demoShortKeys = [
    {
        name: "console.log",
        buttons: [81, 87, 69],
        delay: 50,
        date: 0,
        triggered: false,
        exec: messageConsoleDemo
    },
    {
        name: "fullScreen.toggle",
        buttons: [18, 13],
        delay: 1000,
        date: 0,
        triggered: false,
        exec: fullScreen.toggle
    },
    {
        name: "closeWindowFunc",
        buttons: [18, 67],
        delay: 0,
        date: 0,
        triggered: false,
        disabled: false,
        exec: closeWindowFunc
    },
    {
        name: "showRootModal",
        buttons: [77, 79, 68],
        delay: 2000,
        date: 0,
        triggered: false,
        disabled: false,
        exec: toggleRootModal
    },
    {
        name: "clearConsole",
        buttons: [67, 83],
        delay: 500,
        date: 0,
        triggered: false,
        disabled: false,
        exec: clearConsole
    }
];

vskInit(demoShortKeys);