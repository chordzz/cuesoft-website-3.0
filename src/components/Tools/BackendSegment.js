import React from "react";
import { List, Image } from "semantic-ui-react";
import Java from "../../icons/home/java.svg";
import Java2 from "../../icons/home/java2.svg";
import Node1 from "../../icons/home/node1.svg";
import Node2 from "../../icons/home/node2.svg";
import Php1 from "../../icons/home/php1.svg";
import Php2 from "../../icons/home/php2.svg";

function BackendSegment({ darkMode }) {
  return (
    <div style={{textAlign: 'center'}}>
      <h4>Backend Development </h4>
      <List>
        <List.Item style={{ paddingTop: "30px" }}>
        <Image src={ darkMode ? Node2 : Node1 } size='mini' />
          <List.Content style={{ paddingTop: "10px" }}>Node.js</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
        <Image src={ darkMode ? Php2 : Php1 } size='mini' />
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
