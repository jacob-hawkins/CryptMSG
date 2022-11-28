import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// returnTo: "http://localhost:3000"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button id="logout-button" onClick={() => logout({ returnTo: "https://cryptmsg.net" })}>Log Out</button>
  );
};

export default LogoutButton;