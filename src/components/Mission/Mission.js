import React from "react";
function Mission({ darkMode }) {
  return (
    <div
      style={{ color: darkMode ? "#ffffff" : "null" }}
      // style={{ color: darkMode ? "#ffffff" : "#474646" }}
      // data-aos="fade-right"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      className="mission"
    >
      {/* <h2 style={{ fontWeight: "700" }}>
        Our mission is to help enterprises accelerate adoption of new
        technologies, untangle complex issues that always emerge during digital
        evolution, and orchestrate ongoing innovation.
      </h2> */}
      <h1 style={{ fontWeight: "700" }}>Our mission</h1>
      <p style={{ color: "#474646" }}>
        We help enterprises accelerate adoption of new technologies, untangle
        complex issues that always emerge during digital evolution, and
        orchestrate ongoing innovation.
      </p>
    </div>
  );
}
export default Mission;
