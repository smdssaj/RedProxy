export const objDashboardWindowConfig = {
    attributes: {
        minWidth: 1000,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            contextIsolation: true
        }
    },

    menu: null,

    path: "dashboard.html"
};

export const objUpdateWindowConfig = {
    attributes: {
        width: 250,
        height: 250,
        frame: false,
        resizable: false,
        maximize: false,
        webPreferences: {
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            contextIsolation: true
        }
    },

    menu: null,

    path: "updater.html"
}; 
