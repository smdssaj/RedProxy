import { BrowserWindow } from 'electron';

export async function DashboardWindowCreator() {
    const objWindowConfig = {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            contextIsolation: true
        }
    };
    // Create the browser window.
    const bwDashboardWin = new BrowserWindow(objWindowConfig);
    bwDashboardWin.setMenu(null);
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await bwDashboardWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'dashboard.html');
    } 
    else {
        createProtocol('app');
        // Load the index.html when not in development
        bwDashboardWin.loadURL('app://./dashboard.html');
    }

    return bwDashboardWin;
}
