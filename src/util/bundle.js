import ziputils from "./zip";

async function loadBundle(zip) {
    const files = ["octoprint.log"];

    let systeminfo = false;
    try {
        systeminfo = await ziputils.getFileContents(zip, "systeminfo.txt", "string");
    } catch (error) {
        console.log("Could not read systeminfo.txt from zip, probably not a bundle...");
    }

    const contents = {};
    for (const f of zip.file(/\.(log|txt|gcode|gco|g)$/i)) {
        if (
            f.name.startsWith(".") ||
            f.name.startsWith("__") ||
            f.name === "systeminfo.txt"
        )
            continue;
        try {
            contents[f.name] = await f.async("string");
        } catch (error) {
            console.log(`Could not read {f.name} from zip...`);
        }
    }

    const logs = [];
    for (const filename of files) {
        if (contents[filename]) {
            logs.push({log: filename, content: contents[filename]});
        }
    }
    for (const filename of Object.keys(contents).sort()) {
        if (!files.includes(filename)) {
            logs.push({log: filename, content: contents[filename]});
        }
    }

    return {
        hasContent: true,
        systeminfo: systeminfo,
        logs: logs
    };
}

async function loadLog(blob) {
    return {
        hasContent: true,
        logs: [{log: blob.name || "unknown", content: await blob.text()}]
    };
}

const defaultBundle = {
    hasContent: false,
    systeminfo: "",
    logs: []
};

const utils = {
    loadBundle: loadBundle,
    loadLog: loadLog,
    defaultBundle: defaultBundle
};

export default utils;
