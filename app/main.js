const {app, BrowserWindow} = require('electron')

function createWindow(){
  let mainWindow = new BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
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
