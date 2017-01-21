const {app, BrowserWindow} = require('electron')

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({width: 1024, height: 720});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
};


app.on('ready', createWindow);


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  //if (process.platform !== 'darwin') {
    app.quit();
  //}
});
