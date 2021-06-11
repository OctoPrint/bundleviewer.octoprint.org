import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const search = window.location.search;
const params = new URLSearchParams(search);

let url = params.get('url', '');
if (url === null || url === '') {
  // https://bugs.chromium.org/p/chromium/issues/detail?id=789379
  const match = params.get('text', '').match(/https?:\/\/[^\s]+/gi)
  if (match) {
    url = match[0];
  }
}

console.log("URL", url);

ReactDOM.render(
  <App url={(url == null) ? "" : url} />,
  document.querySelector('#root'),
);

serviceWorkerRegistration.register();