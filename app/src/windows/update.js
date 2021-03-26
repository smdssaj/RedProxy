import { app } from 'electron';
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