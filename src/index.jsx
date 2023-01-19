import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(process);

root.render(
  <React.StrictMode>
    {/* <Provider> */}

    <Auth0Provider
      domain="dev-nkucxx4lnxluyswa.eu.auth0.com"
      clientId="DXda5NsnjUrHUJ6RQA3P1VLBUpyUsaA6"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    {/* </Provider> */}
  </React.StrictMode>
);
