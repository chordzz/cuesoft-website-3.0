import { Icon } from "semantic-ui-react";
import { MobileAppSegementProps } from "../../types/componentTypes";

function MobileAppSegment({ darkMode }: MobileAppSegementProps) {
  return (
    <div className="mobile-app">
      <h5
        style={{
          textAlign: "center",
          padding: "20px 0 10px 0",
          color: darkMode ? "#000000" : undefined,
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        Mobile App Development
      </h5>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : undefined,
        }}
        className="segment-p"
      >
        Two factors converge in the creation of extraordinary digital solutions:
        User experience and powerful backend technology. We arm you with both{" "}
      </p>
      <Icon
        name="arrow circle right"
        style={{
          float: "right",
          fontSize: "25px",
          cursor: "pointer",
          color: darkMode ? "#F4B400" : "inherit",
        }}
      />
    </div>
  );
}

export default MobileAppSegment;
