const {app, BrowserWindow} = require('electron')

let win

app.on('ready', function () {
  win = new BrowserWindow({width: 600, height: 500, resizable: false, frame: false})
  win.setMenu(null)
  win.loadURL('file://' + __dirname + '/index.html')
 // win.webContents.openDevTools()
})
