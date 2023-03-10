import { useState } from "react";

export const LocalStorage = () => {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("accepted") === "true" ? true : false
  );
  const [alreadyOpen, setAlreadyOpen] = useState(
    localStorage.getItem("alreadyOpen") === "true" ? true : false
  );

  const accept = (x: string | boolean) => {
    localStorage.setItem("accepted", x as string);
    setAccepted(x as boolean);
  };

  const consent = (x: string) => {
    setAlreadyOpen(true);
    localStorage.setItem("alreadyOpen", "true");
    if (x === "accept") accept("true");
    if (x === "decline") accept("false");
  };

  return { alreadyOpen, consent };
};
