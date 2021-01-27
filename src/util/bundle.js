import ziputils from "./zip";

const logToLanguage = {
    "octoprint.log": "log",
    "plugin_softwareupdate_console.log": "cli",
    "plugin_pluginmanager_console.log": "cli"
}

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
            const language = logToLanguage[filename] || "plain";
            logs.push({ log: filename, content: contents[filename], language: language });
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
