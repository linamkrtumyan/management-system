import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import {store, persistor} from "./store";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./components/RoutesComponent";
import { PersistGate } from "redux-persist/integration/react";

import Store from "./store";

const { persistor, store } = Store();



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}> 
        <RoutesComponent />

        </PersistGate>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
