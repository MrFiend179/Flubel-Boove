const { app,BrowserWindow,ipcMain,Tray,Menu} = require('electron');
const path = require("path"); 
require("electron-reload")(__dirname);
const ipc = ipcMain
const client = require('discord-rich-presence')('1063868484435578961');
const {autoUpdater} = require('electron-updater')

const createWindow = () => {
    const window = new BrowserWindow({
      width: 950,
      height: 610,
      frame: false,
      icon: path.join(__dirname, "mainlogo1.png"),
      transparent: true,
      resizable: false,
      show: false,
      webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      backgroundThrottling: false
    }
    })
    const splash = new BrowserWindow({
      width: 260,
      height: 330,
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      icon: path.join(__dirname, "mainlogo1.png"),
      });
    window.loadFile('src/app/index.html');
    splash.loadFile('src/app/startwin/start.html');
    window.on('ready-to-show',async ()=>{
      setTimeout(()=>{
        splash.destroy();
        setTimeout(() => {
          window.show()
        }, 300);
      },3000)
    })
    const tray = new Tray(path.join(__dirname, "tryicnn1.png"))
    tray.setToolTip('Boove')
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Boove by Flubel',enabled: false},
      { type: 'separator' },
      { label: 'Hide Window', click: () => { window.hide() } },
      { label: 'Show Window', click: () => { window.show() } },
      { type: 'separator' },
      { label: 'Quit Boove', click: () => { app.quit() } }
    ])
    tray.setContextMenu(contextMenu)

   ipc.on('minimizeApp', ()=>{
   window.minimize()
   })
 ipc.on('closeApp', ()=>{
    window.hide()
  })
}
app.commandLine.appendSwitch("disable-renderer-backgrounding");
app.whenReady().then(() => {
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()
  autoUpdater.autoDownload = false;
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
const startTimestamp = Date.now();

ipcMain.on('toggle-state-changed', (event, state) => {
  if (state) {
    client.updatePresence({
      state: 'Currently in Minecraft-Bot',
      details: 'An advanced botting panel that makes bots for you',
      startTimestamp,
      largeImageKey: 'mainlrgimgbvlg',
      smallImageKey: 'lrgclrrimg',
      instance: true
    });
    ipc.on('minecraft',()=>{
      client.updatePresence({
        state: 'Currently in Minecraft-Bot',
        details: 'An advanced botting panel that makes bots for you',
        startTimestamp,
        largeImageKey: 'mainlrgimgbvlg',
        smallImageKey: 'lrgclrrimg',
        instance: true
      });
    });
    ipc.on('discord',()=>{
      client.updatePresence({
        state: 'Currently in Discord-Bot',
        details: 'An advanced botting panel that makes bots for you',
        startTimestamp,
        largeImageKey: 'mainlrgimgbvlg',
        smallImageKey: 'lrgclrrimg',
        instance: true
      });
    });
    ipc.on('settings',()=>{
      client.updatePresence({
        state: 'Editing app prefrences',
        details: 'An advanced botting panel that makes bots for you',
        startTimestamp,
        largeImageKey: 'mainlrgimgbvlg',
        smallImageKey: 'lrgclrrimg',
        instance: true
      });
    });
  } else {
    client.updatePresence({
    })
    ipc.on('minecraft',()=>{
      client.updatePresence({
        
      });
    });
    ipc.on('discord',()=>{
      client.updatePresence({
       
      });
    });
    ipc.on('settings',()=>{
      client.updatePresence({
        
      });
    });
  }
})

ipc.on('apprstevnt',()=>{
  app.relaunch()
  app.exit(0)
})
