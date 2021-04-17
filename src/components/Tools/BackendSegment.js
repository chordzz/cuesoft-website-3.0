import React from "react";
import { List, Image } from "semantic-ui-react";
import Java from "../../assets/icons/java.svg";
import Java2 from "../../assets/icons/java2.svg";
import Node1 from "../../assets/icons/node1.svg";
import Node2 from "../../assets/icons/node2.svg";
import Php1 from "../../assets/icons/php1.svg";
import Php2 from "../../assets/icons/php2.svg";

function BackendSegment({ darkMode }) {
  return (
    <div className="backend-tools" style={{ textAlign: "center" }}>
      <h4
        style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "600" }}
      >
        Backend Development{" "}
      </h4>
      <List style={{ fontWeight: "600" }} className="tools-list">
        <List.Item>
          <Image src={darkMode ? Node2 : Node1} size="mini" />
          <List.Content style={{ paddingTop: "10px" }}>Node.js</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={darkMode ? Php2 : Php1} size="mini" />
          <List.Content style={{ paddingTop: "10px" }}>PHP</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={darkMode ? Java2 : Java} size="mini" />
          <List.Content style={{ paddingTop: "10px" }}>Java</List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default BackendSegment;
