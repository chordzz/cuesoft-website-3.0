import React from "react";
import { Button } from "semantic-ui-react";

function MobileFooter1({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px", textAlign: "center" }}>
      <h2
        style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "5px" }}
      >
        Let's get started
      </h2>
      <p style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "5px" }}>
        Let us show you what responsive, reliable and accountable software
        support looks like in today's world, as well as give you a glimpse of
        future
      </p>
      <Button
        size="tiny"
        as="a"
        color={darkMode ? "yellow" : "red"}
        style={{ borderRadius: "30px" }}
      >
        <span style={{ color: darkMode ? "#000000" : "#ffffff" }}>
          Start a project
        </span>
      </Button>
    </div>
  );
}

export default MobileFooter1;
