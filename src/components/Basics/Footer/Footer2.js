import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Footer2({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <p
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Company
      </p>
      <List>
        <List.Item as={Link}>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
          >
            About
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link}>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
          >
            Careers
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link}>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
          >
            Contact
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link}>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
          >
            Investors
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default Footer2;
