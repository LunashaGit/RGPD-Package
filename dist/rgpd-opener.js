import React, { useState } from "react";
import "./rgpd_opener.css";
function RGPD_OPENER({ width }) {
    const [accepted, setAccepted] = useState(localStorage.getItem("accepted") === "true" ? true : false);
    const [alreadyOpen, setAlreadyOpen] = useState(localStorage.getItem("alreadyOpen") === "true" ? true : false);
    const consent = (x) => {
        setAlreadyOpen(true);
        localStorage.setItem("alreadyOpen", "true");
        if (x === "accept") {
            localStorage.setItem("accepted", "true");
            setAccepted(true);
        }
        if (x === "decline") {
            localStorage.setItem("accepted", "false");
            setAccepted(false);
        }
    };
    return (React.createElement(React.Fragment, null, alreadyOpen === false && (React.createElement("div", { style: width ? { width: width + "rem" } : { width: "ll" }, className: "card" },
        React.createElement("h1", null, "Cookie Consent"),
        React.createElement("p", null, "This website uses cookies to ensure you get the best experience on our website."),
        React.createElement("a", { href: "http://www.aes-asbl.be/wp-content/uploads/2018/03/GDPR-mep-Bea-V6.pdf" }, "More informations"),
        React.createElement("div", { className: "consent" },
            React.createElement("button", { onClick: () => {
                    consent("accept");
                } }, "Accept"),
            React.createElement("button", { onClick: () => {
                    consent("decline");
                } }, "Decline"))))));
}
export default RGPD_OPENER;
