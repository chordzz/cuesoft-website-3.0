import React from "react";

function Technical({ darkMode }) {
  return (
    <div
      style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "10px" }}
    >
      <p>
        We are a custom and proprietary software development company that builds
        innovation and secures digital solutions for companies, enterprises and
        startups. Our team of consultants, UX experts and software developers
        converts ideas into reality. Being a leading software development
        company, we understand that every enterprise has a different software
        requirement and therefore, we provide custom software development
        services to meet their expectaions.
      </p>
      <p>
        Our values are the guiding principles upon which Cuesoft was founded and
        how we strive to conduct our business on a daily basis. Values establish
        our view of the world as we shape the future. They determine how we
        treat each other.
      </p>
      <p>
        Our drive for exceptional service delivery is built on the belief that
        we are nothing if you are not satisfied with us. Our passion for helping
        you achieve your goals, no matter what, is what truly differentiates us
        from our competitors.
      </p>
    </div>
  );
}

export default Technical;
