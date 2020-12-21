import React from "react";
import { List, Image } from "semantic-ui-react";
import Apple from "../../assets/icons/apple.svg";
import Apple2 from "../../assets/icons/apple2.svg";
import Flutter from "../../assets/icons/flutter.svg";
import Flutter2 from "../../assets/icons/flutter2.svg";
import Android1 from "../../assets/icons/android1.svg";
import Android2 from "../../assets/icons/android2.svg";

function MobileSegment({ darkMode }) {
  return (
    <div style={{textAlign: 'center'}}>
      <h4>Mobile Development </h4>
      <List>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={ darkMode ? Android2 : Android1 } size='mini' />
          <List.Content style={{ paddingTop: "10px" }}>Android</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={darkMode ? Apple2 : Apple} size="mini" />
          <List.Content style={{ paddingTop: "10px" }}>iOS</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image
            src={darkMode ? Flutter2 : Flutter}
            style={{ height: "30px", width: "30px" }}
          />
          <List.Content style={{ paddingTop: "10px" }}>Flutter</List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default MobileSegment;
