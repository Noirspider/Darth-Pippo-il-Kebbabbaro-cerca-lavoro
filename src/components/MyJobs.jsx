import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyHome() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {/* INIZIO PARTE SINISTRA */}
        <Col md={2}>
          <Row>
            <Col>
              <div className="fs-1 mt-3 w-100">
                <Card className=" rounded rounded-3">
                  <Card.Body className=" pt-0">
                    <Row className="fs-7 mt-5">
                      {/* <hr className="text-gray" /> */}
                      <Col xs={12}>
                        <div>
                          <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-bookmark-fill fs-5 me-2"></i>
                              <span className="fw-semibold"> Le mie offerte di lavoro</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-list-task fs-5 me-2"></i>
                              <span className="fw-semibold"> Preferenze</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-clipboard2-check fs-5 me-2"></i>
                              <span className="fw-semibold"> Valutazioni delle competenze</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-play-btn-fill fs-5 me-2"></i>
                              <span className="fw-semibold"> Indicazioni per chi cerca lavoro</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                              <i className="bi bi-gear-fill fs-5 me-2"></i>
                              <span className="fw-semibold"> Impostazioni candidatura</span>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          {/* --- */}
        </Col>
        {/* FINE PARTE SINISTRA */}
        {/* INIZIO PARTE CENTRALE */}
        <Col md={5} className="d-flex flex-column align-items-center mt-3">
          {/* INIZIO --- */}

          <Col xs={12} className=" mb-3">
            <Card className="rounded rounded-3">
              <Card.Body className="pb-0">
                <Row>
                  <Col className="d-flex justify-content-between">
                    <div>
                      <h3 className=" h6">Le principali offerte di lavoro per te</h3>
                      <p className=" fs-7 text-muted">
                        Sulla base del tuo profilo e della tua cronologia delle ricerche
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={1}>
                    <div>
                      <img
                        src="https://cdn.icon-icons.com/icons2/1377/PNG/512/imagexgeneric_92742.png"
                        alt=""
                        className=" fix-h-50"
                      />
                    </div>
                    <img src="" alt="" />
                  </Col>
                  <Col>
                    <div>
                      <p className="small fw-semibold m-0">Sviluppatore Java</p>
                      <p className=" fs-7 m-0">Pippo Enterprise</p>
                      <p className=" fs-7 m-0">Roma, Lazio, Italia</p>
                    </div>
                  </Col>
                  <Col xs={1}>
                    <div>
                      <i className="bi bi-x-lg fs-5 icon-delete-post"></i>
                    </div>
                  </Col>
                </Row>

                <hr className="text-gray my-0" />
                <Row className="border-top-5 border-black  hover-gray">
                  <Col xs={12} className="p-0 m-0 ">
                    <Link to={"/"} className=" text-decoration-none text-black">
                      <div className=" text-center py-2">
                        <p className="d-inline">Mostra tutto </p>
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Col>
        {/* FINE PARTE CENTRALE */}
        {/* INIZIO PARTE DESTRA */}
        <Col xs={0} md={3}>
          <Row className="my-3">
            {" "}
            <Col>
              <div>
                <ul className="d-flex list-unstyled justify-content-center align-content-center flex-wrap">
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-darkgray small text-decoration-none my-4 mx-8">
                      <span>Informazioni</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Accessibilità</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Centro assistenza</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Privacy e condizioni</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Opzioni per gli annunci pubblicitari</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Pubblicità</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Servizi alle aziende</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Scarica l'app LinkedIn</span>
                    </a>
                  </li>
                  <li style={{ margin: "4px 8px" }}>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Altro</span>
                    </a>
                  </li>
                </ul>
                <div className="  d-flex justify-content-center align-items-center">
                  <svg
                    role="img"
                    aria-hidden="false"
                    aria-label="LinkedIn"
                    className="global-footer-compact__linkedin-logo mx-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="14"
                    viewBox="0 0 56 14"
                    data-supported-dps="56x14"
                    data-test-icon="linkedin-logo-blue-xxsmall"
                  >
                    <svg display="var(--hue-web-svg-display-light)">
                      <image
                        href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                        x="0"
                        y="0"
                        width="56"
                        height="14"
                      ></image>
                    </svg>
                  </svg>
                  LinkedIn Corporation © 2024
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MyHome;
