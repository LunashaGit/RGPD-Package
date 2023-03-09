import React from "react";
import ReactDOM from "react-dom/client";
import RGPD_OPENER from "./rgpd-opener";
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(React.StrictMode, null,
    React.createElement("div", { className: "App" },
        React.createElement(RGPD_OPENER, null))));
