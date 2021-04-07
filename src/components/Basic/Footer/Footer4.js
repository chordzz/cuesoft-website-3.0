import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Footer4({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <p
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "30px",
          fontWeight: "600",
        }}
      >
        Resources
      </p>
      <List>
        <List.Item as={Link} to="#">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            Terms
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link} to="#">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            Privacy Policy
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link} to="#">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            FAQ
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link} to="#">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            Partners
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default Footer4;
