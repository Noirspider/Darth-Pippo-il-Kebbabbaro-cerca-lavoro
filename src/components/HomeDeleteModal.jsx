import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteExpAction, fetchDeleteHomeAction } from "../redux/actions/actions";
import { Button, Modal } from "react-bootstrap";

function HomeDeleteModal({ postData, show, handleClose }) {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.myProfile);

  const handleDelete = () => {
    dispatch(fetchDeleteHomeAction(postData._id));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Sei sicuro di voler cancellare questo Post? <br />
        {postData.text}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HomeDeleteModal;
