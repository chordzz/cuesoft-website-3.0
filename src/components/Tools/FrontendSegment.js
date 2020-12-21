import React from "react";
import { List, Image } from "semantic-ui-react";
import React1 from '../../icons/home/react1.svg'
import React2 from '../../icons/home/react2.svg'
import Vue1 from '../../icons/home/vue1.svg'
import Vue2 from '../../icons/home/vue2.svg'
import Angular1 from '../../icons/home/angular1.svg'
import Angular2 from '../../icons/home/angular2.svg' 

function FrontendSegment({ darkMode }) {
  return (
    <div style={{textAlign: 'center'}}>
      <h4>Frontend Development </h4>
      <List>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={ darkMode ? React2 : React1 } size='mini' />
          <List.Content style={{ paddingTop: "10px" }}>React</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={ darkMode ? Vue2 : Vue1 } size='mini' />
          <List.Content style={{ paddingTop: "10px" }}>Vue.js</List.Content>
        </List.Item>
        <List.Item style={{ paddingTop: "30px" }}>
          <Image src={ darkMode ? Angular2 : Angular1} size='mini' />
          <List.Content style={{ paddingTop: "10px" }}>Angular</List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default FrontendSegment;
