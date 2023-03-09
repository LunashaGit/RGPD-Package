import React, { useState } from "react";
import "./rgpd-opener.css";
import { LocalStorage } from "./hooks/LocalStorage";
function RGPD_OPENER({ width }: { width?: string }) {
  const { alreadyOpen, consent } = LocalStorage();

  return (
    <>
      {alreadyOpen === false && (
        <div
          style={width ? { width: width + "rem" } : { width: "ll" }}
          className="card"
        >
          <h1>Cookie Consent</h1>
          <p>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <a href="http://www.aes-asbl.be/wp-content/uploads/2018/03/GDPR-mep-Bea-V6.pdf">
            More informations
          </a>
          <div className="consent">
            <button
              onClick={() => {
                consent("accept");
              }}
            >
              Accept
            </button>
            <button
              onClick={() => {
                consent("decline");
              }}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RGPD_OPENER;
