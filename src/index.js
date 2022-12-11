const { app,BrowserWindow,ipcMain,Tray,autoUpdater} = require('electron');
const path = require("path"); 
require("electron-reload")(__dirname);
const ipc = ipcMain

const createWindow = () => {
    const window = new BrowserWindow({
      width: 910,
      height: 610,
      frame: false,
      icon: path.join(__dirname, "mainlogo.png"),
      transparent: true,
      resizable: false,
      show: false,
      webPreferences: {
      
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    }
    })
    const splash = new BrowserWindow({
      width: 250,
      height: 330,
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      icon: path.join(__dirname, "mainlogo.png"),
      });
    window.loadFile('src/app/index.html');
    splash.loadFile('src/app/startwin/start.html');
    window.on('ready-to-show',async ()=>{
      setTimeout(()=>{
        splash.destroy();
        setTimeout(()=>{
          window.show();
        },300)
      },3000)
    })
    tray = new Tray(path.join(__dirname, "tryicn2.png"))
    tray.setToolTip('Flubel-Boove')
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