import React, { useState } from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Terms } from "../../Modals";

function Footer4({ darkMode, terms }) {
  const [isOpen, setIsOpen] = useState(false);
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
        <List.Item
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(true)}
        >
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
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
          >
            Partners
          </List.Content>
        </List.Item>
      </List>
      {terms &&
        terms.length &&
        terms.map((info, i) => {
          return (
            <div key={i}>
              <Terms
                info={info}
                handleOpen={isOpen}
                handleClose={() => setIsOpen(false)}
              />
            </div>
          );
        })}
    </div>
  );
}

Footer4.propTypes = {
  terms: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    terms: state.terms.data,
  };
};
export default connect(mapStateToProps)(Footer4);
