import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import styles from './Spinner.scss';

const Spinner = ({ canShow, message }) => {
  const className = `glyphicon glyphicon-refresh ${styles.spinner}`;

  // TODO: find out how to specify the `container` for the modal
  return (
    <Modal show={canShow} bsSize="small">
      <Modal.Body>
        <i className={className}/> {message}
      </Modal.Body>
    </Modal>
  );
};

Spinner.propTypes = {
  canShow: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default Spinner;
