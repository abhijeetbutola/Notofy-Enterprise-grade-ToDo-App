// /* eslint-disable linebreak-style */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// add button customize - done
// grid
// create modal window
// work on adding task to array
// sort functionality - name, date
// collapsable sidebar
// search onSubmit - done  Q- how are we getting our original set of cards back when clearing the search term
// add task by title
