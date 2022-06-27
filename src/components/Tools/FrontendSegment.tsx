import { List, Image } from "semantic-ui-react";
import React1 from "../../assets/icons/react1.svg";
import React2 from "../../assets/icons/react2.svg";
import Vue1 from "../../assets/icons/vue1.svg";
import Vue2 from "../../assets/icons/vue2.svg";
import Angular1 from "../../assets/icons/angular1.svg";
import Angular2 from "../../assets/icons/angular2.svg";
import { FrontendSegmentProps } from "../../types/componentTypes";

function FrontendSegment({ darkMode }: FrontendSegmentProps) {
  return (
    <div className="frontend-tools">
      <h4
        style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "600" }}
      >
        Frontend Development{" "}
      </h4>
      <List style={{ fontWeight: "600" }} className="tools-list">
        <List.Item>
          <Image
            src={darkMode ? React2 : React1}
            size="mini"
            className="tools"
          />
          <List.Content style={{ paddingTop: "10px" }}>React</List.Content>
        </List.Item>
        <List.Item>
          <Image src={darkMode ? Vue2 : Vue1} size="mini" className="tools" />
          <List.Content style={{ paddingTop: "10px" }}>Vue.js</List.Content>
        </List.Item>
        <List.Item>
          <Image
            src={darkMode ? Angular2 : Angular1}
            size="mini"
            className="tools"
          />
          <List.Content style={{ paddingTop: "10px" }}>Angular</List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default FrontendSegment;