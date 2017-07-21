'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var ipc = require('ipc');

var config = require('./config');
config.test();

var mainWindow = null;

app.on('ready', function() {
	mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        resizable: true,
        frame: true
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
    //mainWindow.loadUrl('https://activity.joyoung.com/jyjyadm');
});