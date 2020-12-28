import React from "react";

function NotFound({ location }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ padding: "200px 0" }}>
        Error! The page{" "}
        <span style={{ color: "red" }}>{location.pathname}</span> does not exist
      </h1>
    </div>
  );
}

export default NotFound;
