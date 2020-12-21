import React from "react";

function Developers({ darkMode }) {
  return (
    <div>
      <h2 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>
        Developers and teams for your project
      </h2>
      <p style={{ color: darkMode ? "white" : null }}>
        We build effective, scalable development teams fitting your project's
        needs. Our experienced developers are ready to join your project. We
        support their growth and keep them motivated so they can take up the
        most challenging jobs.
      </p>
    </div>
  );
}

export default Developers;
