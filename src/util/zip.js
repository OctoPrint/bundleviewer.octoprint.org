import JSZip from "jszip";
import remoteutils from "./remote"

async function loadRemoteZip(url) {
    const { blob } = await remoteutils.loadRemote(url);
    return await loadZip(blob);
}

async function loadZip(blob) {
    return await JSZip.loadAsync(blob);
}

async function containsFile(zip, filename) {
    return await zip.file(filename) !== null;
}

async function getFileContents(zip, filename, format) {
    format = format || "blob";
    return await zip.file(filename).async(format);
}

const utils = {
    loadZip: loadZip,
    loadRemoteZip: loadRemoteZip,
    containsFile: containsFile,
    getFileContents: getFileContents
}

export default utils;