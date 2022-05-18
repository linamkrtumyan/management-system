import React from "react";
import "./header.css";

function Header({ signOut, authorizedUser }) {
  console.log(authorizedUser, "authorizedUser");
  return (
    <div className="header">
      {authorizedUser === null ? (
        <p>{localStorage.getItem("persist:user")}</p>
      ) : (
        <p> {authorizedUser}</p>
      )}

      <img src={require("../../assets/logoWithName.svg").default} alt="logo" />
      <div className="signoutButton" onClick={signOut}>
        {" "}
        <img
          className="signoutIcon"
          src={require("../../assets/signout.svg").default}
          alt="signout"
        />
        Sign Out
      </div>
    </div>
  );
}

export default Header;
