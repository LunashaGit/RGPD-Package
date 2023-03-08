import { useState } from "react";
import "./App.css";

function App({ width }: { width?: string }) {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("accepted") === "true" ? true : false
  );
  const [alreadyOpen, setAlreadyOpen] = useState(
    localStorage.getItem("alreadyOpen") === "true" ? true : false
  );

  const consent = (x: string) => {
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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
