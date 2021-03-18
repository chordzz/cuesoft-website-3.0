import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, Button, Checkbox } from "semantic-ui-react";
import TermsContent from "./TermsContent";

function Terms({ modalActive, closeModal, activateModal, termsData }) {
  const modal = modalActive ? (
    <Modal
      onClose={closeModal}
      onOpen={activateModal}
      open={modalActive}
      size="small"
    >
      <Modal.Header>Terms and Conditions</Modal.Header>
      <Modal.Content scrolling>
        {termsData &&
          termsData.length &&
          termsData.map((term, i) => {
            return (
              <div key={i}>
                <TermsContent term={term} />
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

Terms.propTypes = {
  termsData: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    termsData: state.termsData.data,
  };
};
export default connect(mapStateToProps)(Terms);
