import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyHome() {
  return (
    <Container>
      <Row className="justify-content-center ">
        {/* INIZIO PARTE SINISTRA */}
        <Col ms={2}></Col>
        {/* FINE PARTE SINISTRA */}
        {/* INIZIO PARTE CENTRALE */}
        <Col md={7} className="d-flex flex-column align-items-center">
          {/* INIZIO --- */}
          <Row className="w-100 mt-3">
            <Col>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div>
                        <h3 className=" h5">Analisi</h3>
                        <i className="bi bi-eye-fill fs-6 text-muted"></i>
                        <span className=" fs-7 text-muted"> Solo per te</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <div className="d-flex">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            className="mercado-match me-2"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                          </svg>{" "}
                        </div>
                        <div>
                          <h4 className="h6">7 visualizzazioni di Pippo</h4>
                          <p className="fs-7">Scopri chi ha visitato il tuo profilo</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="d-flex mx-2">
                        <div>
                          <i className="bi bi-search fs-5 me-2"></i>
                        </div>
                        <div>
                          <h4 className="h6">2 comparse nei motori di ricerca</h4>
                          <p className="fs-7">Vedi quante volte compari nei risultati di ricerca.</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}></Col>
                  </Row>
                  <hr className="text-gray my-0" />
                  <Row className="border-top-5 border-black  hover-gray">
                    <Col xs={12} className="p-0 m-0 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <div className=" text-center py-2">
                          <p className="d-inline">Mostra tutte le analisi </p>
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* FINE PARTE CENTRALE */}
        {/* INIZIO PARTE DESTRA */}
        <Col xs={0} md={3}>
          <Row className=" mt-3">
            <Col xs={12}>
              <div className=" d-flex justify-content-between">
                <div>
                  {" "}
                  <h3 className="h5">LinkedIn Notizie</h3>
                  <ul>
                    <li className="fw-semibold">I 15 lavori in più rapida crescita</li>
                    <span className="text-gray small">Notizie principali</span>
                    <li className="fw-semibold">Cercare lavoro nella tecnologia</li>
                    <span className="text-gray small">1 giorno fa</span>
                    <li className="fw-semibold">Le città dei lavori in crescita</li>
                    <span className="text-gray small">23 ore fa</span>
                  </ul>
                </div>

                <div>
                  <i className="bi bi-info-square-fill"></i>
                </div>
              </div>
            </Col>
            <hr />
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                <img src="https://i.imgflip.com/8d710i.jpg" alt="meme" className=" w-100" />
              </div>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              <div className="d-flex justify-content-center small">
                <ul className="d-flex list-unstyled">
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Informazioni</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Accessibilità</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Centro assistenza</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Privacy e condizioni</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Opzioni per gli annunci pubblicitari</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Pubblicità</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Servizi alle aziende</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Scarica l'app LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray small text-decoration-none">
                      <span>Altro</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MyHome;
