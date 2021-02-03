import contentdispositionutils from "content-disposition";

async function loadRemote(url) {
    const response = await fetch(url, {mode: 'cors',});
    if (!response.ok) {
        throw new Error(`Could not load file from ${url}: ${response.status}`);
    }
    const blob = await response.blob();

    let filename;
    const header = response.headers.get("content-disposition");
    if (header) {
        filename = contentdispositionutils.parse(header).parameters?.filename || "unknown";
    } else {
        filename = url.substring(url.lastIndexOf("/") + 1);
    }
    blob.name = filename;
    
    return blob;
}

const utils = {
    loadRemote: loadRemote
}
export default utils;