import React from "react";
import ReactDOM from "react-dom/client";
import RGPD_OPENER from "./rgpd-opener";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RGPD_OPENER />
    </div>
  </React.StrictMode>
);
