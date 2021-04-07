import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, Button, Checkbox } from "semantic-ui-react";
import PrivacyContent from "./PrivacyContent";

function Privacy({ modalActive, closeModal, activateModal, privacyData }) {
  const modal = modalActive ? (
    <Modal
      onClose={closeModal}
      onOpen={activateModal}
      open={modalActive}
      size="small"
    >
      <Modal.Header>Privacy Policy</Modal.Header>
      <Modal.Content scrolling>
        {privacyData &&
          privacyData.length &&
          privacyData.map((privacy, i) => {
            return (
              <div key={i}>
                <PrivacyContent privacy={privacy} />
              </div>
            );
          })}
        <Checkbox label="Agree?" style={{ paddingTop: "5rem" }} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal} color="red">
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  ) : (
    false
  );
  return <div>{modal}</div>;
}

Privacy.propTypes = {
  privacyData: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    privacyData: state.privacyData.data,
  };
};
export default connect(mapStateToProps)(Privacy);
