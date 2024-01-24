import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetchPutHomeAction } from "../redux/actions/actions";
import { Form } from "react-bootstrap";

function HomePutModal({ postData, show, handleClose }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(postData.text);

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedPost = {
      text: formData,
    };

    dispatch(fetchPutHomeAction(postData._id, { text: formData }));

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post {postData._id}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group controlId="formDescription">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                as="textarea"
                name="postText"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default HomePutModal;
