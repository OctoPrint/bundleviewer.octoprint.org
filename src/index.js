import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const search = window.location.search;
const params = new URLSearchParams(search);

const url = params.get('url', '');

console.log("URL", url);

ReactDOM.render(
  <App url={(url == null) ? "" : url} />,
  document.querySelector('#root'),
);

serviceWorkerRegistration.register();