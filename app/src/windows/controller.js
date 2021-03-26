import { GetLastVersion, IsLastVersion } from "./update";
import WindowCreator from './creator';
import { objDashboardWindowConfig, objUpdateWindowConfig } from "./config";

async function controller() {

    // show updater window.
    const bwUpdaterWindow = await WindowCreator(objUpdateWindowConfig);
    try{
        
        // fetch last version from the server 
        //      & compare it with the current one.
        const strLastVersion = await GetLastVersion();
        if(IsLastVersion(strLastVersion)){
            // !todo : get updated files from the server..
            //          I don't know how to do it for now :).
            console.log("version is not the latest :(");
        }
    }
    catch(e){
        console.error("something went wrong, can NOT check the version OR can NOT update the app.");
        console.error(e);

        // close updater window.
        bwUpdaterWindow.close();

        // !todo: open retry window.

        // end the process.
        return;
    }
    
    //         - kill updater window.
    //         - open dashboard window.
    bwUpdaterWindow.close();

    // open dashboard window.
    const bwDashboardWindow = await WindowCreator(objDashboardWindowConfig);
    // bwDashboardWindow.webContents.openDevTools();
}

export default controller;