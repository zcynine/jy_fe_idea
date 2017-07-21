// Create an empty menubar
var menu = new nw.Menu({
	type: 'menubar'
});

// Create a submenu as the 2nd level menu
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({
	label: 'Item A'
}));
submenu.append(new nw.MenuItem({
	label: 'Item B'
}));

// Create and append the 1st level menu to the menubar
menu.append(new nw.MenuItem({
	label: 'First Menu',
	submenu: submenu
}));

// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;



document.body.addEventListener('contextmenu', function(ev) {
	ev.preventDefault();
	menu.popup(ev.x, ev.y);
	return false;
});



// Get the current window
var win = nw.Window.get();

// Listen to the minimize event
win.on('minimize', function() {
	console.log('Window is minimized');
});


// Create a tray icon
var tray = new nw.Tray({
	title: 'Tray'
});

var menu = new nw.Menu();
menu.append(new nw.MenuItem({
	type: 'checkbox',
	label: 'box1'
}));
tray.menu = menu;



var shortcut = new nw.Shortcut({
	key: "Ctrl+Shift+A",
	active: function() {
		console.log("Global desktop keyboard shortcut: " + this.key + " active.");
	},
	failed: function(msg) {
		console.log(msg);
	}
});

nw.App.registerGlobalHotKey(shortcut);