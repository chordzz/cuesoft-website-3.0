import React from "react";
import { Modal, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

function Terms({ info, handleClose, handleOpen }) {
  return (
    <Modal size="tiny" open={handleOpen} onClose={handleClose}>
      <Modal.Header
        style={{
          textAlign: "center",
        }}
      >
        Terms and Conditions
      </Modal.Header>
      <Modal.Content>
        <p>{info.para1}</p>
      </Modal.Content>
      <Modal.Action>
        <Button onClick={handleClose} color="red">
          Cancel
        </Button>
      </Modal.Action>
    </Modal>
  );
}

Terms.propTypes = {
  terms: PropTypes.object,
  handleOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Terms;
