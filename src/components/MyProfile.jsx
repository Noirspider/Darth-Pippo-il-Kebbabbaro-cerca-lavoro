import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function MyProfile() {
  return (
    <Container>
      <Row className=" justify-content-center">
        <Col xs={9} className=" d-flex ">
          <Row className="w-100">
            <Col>
              <div className=" fs-1 text-danger bg-warning mt-3 rounded-3">
                <Card className="">
                  <Card.Img
                    variant="top"
                    src="https://product-images.tcgplayer.com/fit-in/874x874/274436.jpg"
                    className=" object-fit-cover"
                    style={{ height: "201px", objectPosition: " 0 16%" }}
                  />
                  <Card.Body>
                    <Row>
                      <Col className="d-flex justify-content-between">
                        <div className=" fs-1 text-danger bg-darkgray mt-3">immagine</div>
                        <div className=" fs-1 text-danger bg-darkgray mt-3">Matita</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8}>
                        <div className=" fs-1 text-danger bg-darkgray mt-3">
                          <h2>Tizio</h2>
                          <h4>titolo tizio</h4>
                          <p>tiziolandia</p>
                        </div>
                        <div>
                          <button className="btn btn-pink rounded">Bottone 1</button>
                          <button className="btn btn-pink rounded mx-2">Bottone 2</button>
                          <button className="btn btn-pink rounded">Franco</button>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className=" fs-1 text-danger bg-darkgray mt-3">Università Tizio secondo</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <div className=" fs-1 text-danger bg-darkgray mt-3">Darth Pippo il kebabbaro cerca lavoro</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
