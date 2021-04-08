import React from "react";
import { Image, Button } from "semantic-ui-react";
import Logo from "../../../assets/icons/LogoWeb.svg";
import Logo2 from "../../../assets/icons/LogoWebDark.svg";

function Footer1({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <Image
        className="brand"
        src={darkMode ? Logo2 : Logo}
        alt="logo"
        size="small"
        inline
      />
      <h3
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          // paddingTop: "5px",
          // width: "308px",
          // height: "48px",
        }}
      >
        Let's get started
      </h3>
      <p style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "5px" }}>
        Let us show you what responsive, reliable and accountable software
        support looks like in today's world, as well as give you a glimpse of
        the future
      </p>
      <Button
        size="tiny"
        as="a"
        color={darkMode ? "yellow" : "red"}
        style={{ borderRadius: "30px" }}
        className="footer-button"
      >
        <span
          style={{
            color: darkMode ? "#000000" : "#ffffff",
            fontWeight: "600",
            width: "112px",
            height: "18px",
            fontSize: "1.3rem",
          }}
        >
          Start a project
        </span>
      </Button>
    </div>
  );
}

export default Footer1;
