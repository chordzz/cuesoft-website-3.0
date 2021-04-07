import React, { useState } from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Terms, Privacy } from "../../Modals";

function Footer4({ darkMode }) {
  const [termsModalActive, setTermsModalActive] = useState(false);
  const [policyModalActive, setPolicyModalActive] = useState(false);
  const activateTermsModal = () => {
    setTermsModalActive(true);
  };
  const activatePolicyModal = () => {
    setPolicyModalActive(true);
  };
  const deactivateModal = () => {
    setTermsModalActive(false);
    setPolicyModalActive(false);
  };
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
        <List.Item as={Link} to="#" onClick={activateTermsModal}>
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
        <List.Item as={Link} to="#" onClick={activatePolicyModal}>
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
      <Terms
        activateModal={activateTermsModal}
        closeModal={deactivateModal}
        modalActive={termsModalActive}
      />
      <Privacy
        activateModal={activatePolicyModal}
        closeModal={deactivateModal}
        modalActive={policyModalActive}
      />
    </div>
  );
}

Footer4.propTypes = {
  modalActive: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  activateModal: PropTypes.func.isRequired,
};

export default Footer4;
