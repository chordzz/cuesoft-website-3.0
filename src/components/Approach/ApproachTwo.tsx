import { Header } from "semantic-ui-react";
import { ApproachTwoProps } from "../../types/componentTypes";

function ApproachTwo({ darkMode, single }: ApproachTwoProps) {
  return (
    <div style={{ paddingTop: "30px" }} className="approach2-segment">
      <Header
        as="h4"
        style={{ color: darkMode && "#ffffff" }}
        className="h4-header"
      >
        {single.title}
      </Header>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
        }}
      >
        {single.body}
      </p>
    </div>
  );
}

export default ApproachTwo;
