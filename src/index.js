const { app,BrowserWindow,ipcMain,Tray} = require('electron');
const path = require("path"); 
require("electron-reload")(__dirname);
const ipc = ipcMain

const createWindow = () => {
    const window = new BrowserWindow({
        width: 850,
    height: 610,
    frame: false,
    icon: path.join(__dirname, "icoon.png"),
    transparent: true,
    resizable: false,
    webPreferences: {
      
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    }
    })
    window.loadFile('src/app/index.html');
    tray = new Tray(path.join(__dirname, "icoon.png"))
    tray.setToolTip('Flubel Minecraft Bot')
    tray.on('click',()=>{
      window.isVisible()?window.hide():window.show()
    })
   ipc.on('minimizeApp', ()=>{
   window.minimize()
   })
 ipc.on('closeApp', ()=>{
    window.close()
  })
}
app.commandLine.appendSwitch("disable-renderer-backgrounding");
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })