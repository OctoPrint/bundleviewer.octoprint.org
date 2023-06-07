import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "@fontsource/roboto";
import "@fontsource/jetbrains-mono";

const search = window.location.search;
const params = new URLSearchParams(search);

const shared = {
    url: params.get("url", ""),
    text: params.get("text", ""),
    title: params.get("title", "")
};

let url = "";
if (shared.url) {
    url = shared.url;
} else if (shared.text) {
    // https://bugs.chromium.org/p/chromium/issues/detail?id=789379
    const match = shared.text.match(/https?:\/\/[^\s]+/gi);
    if (match) {
        url = match[0];
    }
}

console.log("URL", url);

ReactDOM.render(<App url={url} shared={shared} />, document.querySelector("#root"));

serviceWorkerRegistration.register();
