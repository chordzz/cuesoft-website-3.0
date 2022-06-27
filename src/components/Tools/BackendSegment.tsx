import { List, Image } from "semantic-ui-react";
import Java from "../../assets/icons/java.svg";
import Java2 from "../../assets/icons/java2.svg";
import Node1 from "../../assets/icons/node1.svg";
import Node2 from "../../assets/icons/node2.svg";
import Php1 from "../../assets/icons/php1.svg";
import Php2 from "../../assets/icons/php2.svg";
import { BackendSegmentProps } from "../../types/componentTypes";

function BackendSegment({ darkMode }: BackendSegmentProps) {
  return (
    <div className="backend-tools" style={{ textAlign: "center" }}>
      <h4
        style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "600" }}
      >
        Backend Development{" "}
      </h4>
      <List style={{ fontWeight: "600" }} className="tools-list">
        <List.Item className="tool-details">
          <Image src={darkMode ? Node2 : Node1} size="mini" className="tools" />
          <List.Content style={{ paddingTop: "15px" }}>Node.js</List.Content>
        </List.Item>
        <List.Item className="tools-details">
          <Image src={darkMode ? Php2 : Php1} size="mini" className="tools" />
          <List.Content style={{ paddingTop: "15px" }}>PHP</List.Content>
        </List.Item>
        <List.Item className="tools-details">
          <Image src={darkMode ? Java2 : Java} size="mini" className="tools" />
          <List.Content style={{ paddingTop: "20px" }}>Java</List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default BackendSegment;
