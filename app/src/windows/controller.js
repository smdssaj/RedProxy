import { UpdateWindowCreator, GetLastVersion, IsLastVersion } from "./update";
import { DashboardWindowCreator } from "./dashboard";

async function controller() {

    // show updater window.
    const bwUpdaterWindow = await UpdateWindowCreator();
    try{
        
        // fetch last version from the server and compare it with
        //          the current one.
        const strLastVersion = await GetLastVersion();
        if(IsLastVersion(strLastVersion)){
            // !todo : get update files from the server..
            //          I don't know how to do it for now :)
            console.log("version is not the latest :(");
        }
    }
    catch(e){
        console.log("something went wrong, can NOT check the version OR can NOT update the app.");
        console.log(e);
        bwUpdaterWindow.close();

        // !todo: open retry window.
        return;
    }
    
    //         - kill updater window.
    //         - open dashboard window.
    bwUpdaterWindow.close();
    const bwDashboardWindow = await DashboardWindowCreator();
    bwDashboardWindow.maximize();
}

export default controller;