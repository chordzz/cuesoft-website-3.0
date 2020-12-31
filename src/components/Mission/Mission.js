import React from "react";
function Mission({ darkMode }) {
  return (
    <div style={{ color: darkMode ? "#ffffff" : "#474646" }}
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    >
      <h1>
        Our mission is to help enterprises accelerate adoption of new
        technologies, untangle complex issues that always emerge during digital
        evolution, and orchestrate ongoing innovation.
      </h1>
    </div>
  );
}
export default Mission;
