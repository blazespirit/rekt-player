const { app,
        BrowserWindow,
        globalShortcut,
        ipcMain } = require('electron');
const path        = require('path');
const url         = require('url');

let rektPlayer;
let remoteCtrlServer;

function createWindow() {
    rektPlayer = new BrowserWindow({
        fullscreen: true,
        frame: false,
        // resizable: false, // disable resize. *note: on raspbian, set this to false will disable full screen.
    });

    rektPlayer.loadURL(url.format({
        pathname: path.join(__dirname, '..', 'renderer', 'app', 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Emitted when the window is closed.
    rektPlayer.on('closed', () => {
        rektPlayer = null;
        remoteCtrlServer = null;
    });

    rektPlayer.webContents.openDevTools();

    globalShortcut.register('Ctrl + F12', function () {
        rektPlayer.webContents.toggleDevTools();
    });

    // open invisible window as remote control server
    remoteCtrlServer = new BrowserWindow({
        show: false
    });

    remoteCtrlServer.loadURL(url.format({
        pathname: path.join(__dirname, '..', 'renderer', 'remoteCtrlServer', 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    remoteCtrlServer.webContents.openDevTools();
}

// setup IPC
ipcMain.on('gesture', (event, gesture) => {
    rektPlayer.webContents.send('gesture', gesture);
});

app.on('ready', createWindow);

app.on('will-quit', () => {
    // Unregister all shortcuts.
    globalShortcut.unregisterAll();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (rektPlayer === null) {
        createWindow();
    }
});
