import JSZip from "jszip";

async function loadRemote(url) {
    const response = await fetch(url, {mode: 'cors',});
    console.log(response);
    if (!response.ok) {
        throw new Error(`Could not load file from ${url}: ${response.status}`);
    }
    return await response.blob();
}

async function loadRemoteZip(url) {
    const blob = await loadRemote(url);
    return await JSZip.loadAsync(blob);
}

async function containsFile(zip, filename) {
    return await zip.file(filename) !== null;
}

async function getFileContents(zip, filename, format) {
    format = format || "arraybuffer";
    return await zip.file(filename).async(format);
}

const utils = {
    loadRemote: loadRemote,
    loadRemoteZip: loadRemoteZip,
    containsFile: containsFile,
    getFileContents: getFileContents
}

export default utils;