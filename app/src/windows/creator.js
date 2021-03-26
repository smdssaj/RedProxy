import { BrowserWindow } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

async function WindowCreator(configuration) {
    // Create the browser window.
    const window = new BrowserWindow(configuration.attributes);

    // set the menubar.
    window.setMenu(configuration.menu);
    
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode.
        await window.loadURL(process.env.WEBPACK_DEV_SERVER_URL + configuration.path)
    }
    else {
        createProtocol('app');
        // Load the index.html when not in development.
        window.loadURL(`app://./${configuration.path}`);
    }
    return window;
}

export default WindowCreator;
