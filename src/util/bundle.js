import ziputils from "./zip";

async function loadBundle(zip) {
    const files = ["octoprint.log", "serial.log", "terminal.txt", "plugin_softwareupdate_console.log", "plugin_pluginmanager_console.log"];

    const systeminfo = await ziputils.getFileContents(zip, "systeminfo.txt", "string");
    if (!systeminfo) {
        throw new Error("No systeminfo.txt found");
    }

    const contents = {};
    for (const filename of files) {
        try {
            contents[filename] = await ziputils.getFileContents(zip, filename, "string");
        } catch(error) {
            console.log(`No ${filename} in zip...`);
        }
    }

    const logs = [];
    for (const filename of files) {
        if (contents[filename]) {
            logs.push({ log: filename, content: contents[filename] });
        }
    }

    return {
        systeminfo: systeminfo,
        logs: logs
    };
}


const defaultBundle = {
    systeminfo: "",
    logs: []
};

const utils = {
    loadBundle: loadBundle,
    defaultBundle: defaultBundle
}

export default utils;
