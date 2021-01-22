import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const search = window.location.search;
const params = new URLSearchParams(search);

//const url = "http://localhost:8000/octoprint-systeminfo-20210119184038.zip";
//const url = "https://github.com/foosel/testing-stuff/files/5837673/octoprint-systeminfo-20210119184038.zip";
const url = params.get('url', '');

console.log("URL", url);

ReactDOM.render(
  <App url={(url == null) ? "" : url} />,
  document.querySelector('#root'),
);