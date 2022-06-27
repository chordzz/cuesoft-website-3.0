import { Icon } from "semantic-ui-react";
import { EnterpriseSegmentProps } from "../../types/componentTypes";

function EnterpriseSegment({ darkMode }: EnterpriseSegmentProps) {
  return (
    <div className="enterprise">
      <h5
        style={{
          textAlign: "center",
          padding: "0",
          color: darkMode ? "#000000" : undefined,
          margin: "0",
        }}
      >
        Enterprise Software Development
      </h5>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : undefined,
          marginBottom: "30px",
          marginTop: "10px",
        }}
        className="segment-p"
      >
        Delight your end users with handcrafted easy to use software{" "}
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

export default EnterpriseSegment;
