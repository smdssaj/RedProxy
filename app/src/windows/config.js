export const objDashboardWindowConfig = {
    attributes: {
        width: 800,
        height: 600,
        frame: false,
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
