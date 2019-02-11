import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltLeft, faHome, faCaretRight } from '@fortawesome/free-solid-svg-icons';

library.add(faLongArrowAltLeft, faHome, faCaretRight)

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
