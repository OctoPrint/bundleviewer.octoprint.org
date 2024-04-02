import ziputils from "./zip";

async function loadBundle(zip) {
    const files = ["octoprint.log"];

    let systeminfo = false;
    let prefix = "";
    try {
        systeminfo = await ziputils.getFileContents(zip, "systeminfo.txt", "string");
    } catch (error) {
        try {
            // User might have unpacked and repacked the bundle, wouldn't be the first time...
            const systeminfoFiles = zip.file(/\/systeminfo.txt$/i);
            if (systeminfoFiles.length === 1) {
                const systeminfoFile = systeminfoFiles[0];
                systeminfo = await systeminfoFile.async("string");
                prefix = systeminfoFile.name.substring(
                    0,
                    systeminfoFile.name.length - "systeminfo.txt".length
                );
                console.log(`Repacked bundle, prefix is ${prefix}`);
            } else {
                console.log(
                    "No single systeminfo.txt in the zip, probably not a bundle..."
                );
            }
        } catch (error) {
            console.log(
                "Could not read systeminfo.txt from zip, probably not a bundle..."
            );
        }
    }

    const contents = {};
    for (const f of zip.file(/\.(log|txt|gcode|gco|g)$/i)) {
        if (
            !f.name.startsWith(prefix) ||
            f.name.startsWith(prefix + ".") ||
            f.name.startsWith(prefix + "__") ||
            f.name === prefix + "systeminfo.txt"
        )
            continue;

        const name = f.name.substring(prefix.length);
        try {
            contents[name] = await f.async("string");
        } catch (error) {
            console.log(`Could not read {name} from zip...`);
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
        logs: logs,
        prefix: prefix
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
