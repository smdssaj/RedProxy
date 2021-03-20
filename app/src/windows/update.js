import { BrowserWindow, app } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { get } from "got";
import { gt } from 'semver';

export function IsLastVersion(version){
    // check if the current version is the newest.
    if(gt(version, app.getVersion())){
        // return true if it is.
        return true;
    }
    // return false if it is NOT :).
    return false;
}

export async function GetLastVersion() {
    try{
        // !todo : read version form another file.
        const { body } = await get("https://raw.githubusercontent.com/smdssaj/RedProxy/develop/app/package.json");
        // parse body as JSON            
        const bodyAsJSON = JSON.parse(body);
        // return version.
        return bodyAsJSON.version;
    }
    catch(e) {

        console.error(e);
    }
}

export async function UpdateWindowCreator() {
    const objWindowConfig = {
        width: 250,
        height: 250,
        frame: false,
        resizable: false,
        maximize: false,
        webPreferences: {
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            contextIsolation: true
        }
    };
    // Create the browser window.
    const bwUpdateWin = new BrowserWindow(objWindowConfig);
    bwUpdateWin.setMenu(null);
   
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await bwUpdateWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'updater.html')
    } 
    else {
        createProtocol('app');
        // Load the index.html when not in development
        bwUpdateWin.loadURL('app://./updater.html');
    }
    return bwUpdateWin;
}
