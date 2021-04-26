import React from "react";
import { List } from "semantic-ui-react";
// import { Link } from "react-router-dom";

function Footer3({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <h4
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "30px",
          fontWeight: "600",
        }}
        className="footer-header"
      >
        Community
      </h4>
      <List>
        <List.Item>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            <a href="https://medium.com/@cuesoft">Blog</a>
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            <a href="https://www.facebook.com/cuesoft">Facebook</a>
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            <a href="https://twitter.com/CuesoftCloud">Twitter</a>
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            <a href="https://www.instagram.com/cuesoftcloud/">Instagram </a>
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            <a href="https://www.linkedin.com/company/cuesoft">LinkedIn</a>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default Footer3;
