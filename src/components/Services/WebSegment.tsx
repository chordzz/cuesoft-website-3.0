import { Icon } from "semantic-ui-react";
import { WebSegmentProps } from "../../types/componentTypes";

function WebSegment({ darkMode }: WebSegmentProps) {
  return (
    <div className="web">
      <h5
        style={{
          textAlign: "center",
          padding: "15px 30px 10px 0",
          color: darkMode ? "#000000" : undefined,
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        Web Development
      </h5>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : undefined,
        }}
        className="segment-p"
      >
        Arm yourself with a cutting edge website built to fit your needs today
        and to grow along with your organization{" "}
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

export default WebSegment;
