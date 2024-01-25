import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyJobs() {
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
                    <div className="ms-2">
                      <p className="small fw-semibold m-0">Sviluppatore Java</p>
                      <p className=" fs-7 text-gray-600 m-0">Pippo Enterprise</p>
                      <p className=" fs-7 text-gray-600 m-0">Roma, Lazio, Italia</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="#0F7D59"
                        className="mercado-match me-1"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                      </svg>
                      <span className="fs-8 text-gray-600">Selezione attiva</span>
                      <p className="fs-8 fw-bold text-green-500">10 ore fa</p>
                    </div>
                  </Col>
                  <Col xs={1}>
                    <div>
                      <i className="bi bi-x-lg fs-5 icon-delete-post"></i>
                    </div>
                  </Col>
                </Row>
                <hr />
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
                    <div className="ms-2">
                      <p className="small fw-semibold m-0">React Developer</p>
                      <p className=" fs-7 text-gray-600 m-0">The Dark Side Inc.</p>
                      <p className=" fs-7 text-gray-600 m-0">Roma, Lazio, Italia</p>
                      <i className="bi bi-check2-circle fs-4 text-green-400 me-1"></i>

                      <span className="fs-8 text-gray-600">Solitamente il tempo di risposta è 4 giorni</span>
                      <p className="fs-8 fw-bold text-green-500">20 ore fa</p>
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

          {/* dettagli offerta: */}
          <Col xs={12} className=" mb-3">
            <Card className="rounded rounded-3">
              <Card.Body className="pb-0">
                <Row>
                  <Col className="d-flex justify-content-between">
                    <div className=" fs-7 text-gray-700">
                      <h3 className=" h5 text-black">Sviluppatore Java (title)</h3>
                      <span>company_name</span>
                      <span> - </span>
                      <span>Roma, Lazio, Italia</span>
                      <span> - </span>
                      <span className="fw-bold text-green-500">Ripubblicata: 10 ore fa</span>
                      <span> - </span>
                      <span className="text-gray-600">16 candidati</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-between">
                    <div>
                      <div className="fs-7">
                        <i className="bi bi-briefcase-fill fs-5 me-2"></i>
                        <span className=" bg-green-100 px-1 rounded-1">In sede</span>
                        <span> - </span>
                        <span className=" bg-green-100 px-1 rounded-1">A tempo pieno</span>
                        <span> - </span>
                        <span>Esperienza minima</span>
                      </div>
                      <div className="fs-7">
                        <i className="bi bi-building fs-5 me-2"></i>
                        <span>Oltre 10.001 dipendenti</span>
                        <span> - </span>
                        <span>Servizi ingegneristici</span>
                      </div>
                      <div className="fs-7">
                        <i className="bi bi-people-fill fs-5 me-2"></i>
                        <span>7 ex dipendenti lavorano qui</span>
                      </div>
                      <div className="fs-7">
                        <i className="bi bi-list-check fs-5 me-2"></i>
                        <span>Competenze: Informatica, Ingegneria informatica e altre 2</span>
                        <span> - </span>
                        <span>Servizi ingegneristici</span>
                      </div>
                      <div className="fs-7">
                        <i className="bi bi-shield-check fs-5 me-2"></i>
                        <span>Visualizza le verifiche relative a questa offerta di lavoro. </span>
                        <a href="#">Mostra tutto</a>
                      </div>
                      <div className="fs-7">
                        <i className="bi bi-lightbulb fs-5 me-2"></i>
                        <span>Vedi come ti posizioni rispetto a 7 candidati. </span>
                        <a href="#">Prova Premium per 0 EUR</a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-between">
                    <div>
                      <Button variant="primary" className=" rounded-pill fw-semibold me-2 py-1 px-3">
                        Candidati <i className="bi bi-box-arrow-up-right fs-7"></i>
                      </Button>
                      <Button variant="outline-primary" className=" rounded-pill fw-semibold py-1 px-3">
                        Salva
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="d-flex justify-content-between">
                    <div>
                      <h5>Informazioni sull'offerta di lavoro</h5>
                      <p className="fs-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam deleniti neque
                        aperiam ab molestias tenetur fugit harum aliquid nulla, optio id excepturi esse dolore culpa
                        saepe, hic provident modi odit. Magnam molestiae aspernatur eligendi corporis praesentium
                        possimus labore nesciunt blanditiis aliquid quidem officiis voluptatibus, omnis perspiciatis
                        ipsum quis sequi quia? Similique inventore soluta illo necessitatibus molestiae. Illum maiores,
                        nihil neque totam voluptas aperiam facilis eius quidem, commodi vitae reprehenderit, ea
                        consequatur quisquam ipsum omnis ex necessitatibus excepturi. Harum sit impedit dicta minus
                        dolore libero, voluptas, dolor vitae aperiam pariatur ipsum similique rerum! Ad, rem nihil quas
                        maiores facilis itaque.
                      </p>
                    </div>
                  </Col>
                </Row>

                <hr className="text-gray my-0" />
                <Row className="border-top-5 border-black  hover-gray">
                  <Col xs={12} className="p-0 m-0 ">
                    <Link to={"/"} className=" text-decoration-none text-black">
                      <div className=" text-center py-2">
                        <p className="d-inline">Visualizza altro</p>
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

export default MyJobs;
