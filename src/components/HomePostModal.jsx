import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetchPostHomeAction } from "../redux/actions/actions";
import { Form } from "react-bootstrap";

function HomePutModal({ show, handleClose }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const newPost = {
      text: inputValue,
    };

    dispatch(fetchPostHomeAction(newPost));

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group controlId="formDescription">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                autoFocus
                as="textarea"
                name="postText"
                value={inputValue}
                onChange={handleInputValue}
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
