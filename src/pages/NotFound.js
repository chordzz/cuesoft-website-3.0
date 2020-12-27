import React from "react";

<<<<<<< Updated upstream
function NotFound() {
  return (
    <div>
      <h1 style={{ padding: "200px 0" }}>Error</h1>
=======
function NotFound({ location }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ padding: "200px 0" }}>
        Error! The page{" "}
        <span style={{ color: "red" }}>{location.pathname}</span> does not exist
      </h1>
>>>>>>> Stashed changes
    </div>
  );
}

export default NotFound;
