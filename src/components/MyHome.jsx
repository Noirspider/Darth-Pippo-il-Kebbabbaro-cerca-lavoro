import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyHome() {
  return (
    <Container>
      <Row>
        {/* INIZIO PARTE SINISTRA */}
        <Col md={3}>
          <Row>
            <Col>
              <div className="fs-1 mt-3 w-100">
                <Card className=" rounded rounded-3">
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/CFFfwXrWgAA1rGe.jpg"
                    className="object-fit-cover rounded rounded-top-3"
                    style={{ height: "56px", objectPosition: "0 16%" }}
                  />
                  <Card.Body className=" pt-0">
                    <Row>
                      <Col className=" ">
                        <div className=" position-relative d-flex justify-content-center">
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/it/c/c4/Il_campione_olimpico_%28The_Olympic_Champ%29_1942.png"
                            roundedCircle
                            className="object-fit-cover position position-absolute border border-4 border-white"
                            style={{ height: "72px", width: "72px", margin: "-36px 0 0 0" }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="fs-7 mt-5">
                      <Col xs={12} className="d-flex justify-content-center">
                        <div className=" text-center">
                          <h2 className=" fs-6">Pippo</h2>
                          <h4 className="fs-7 text-gray fw-normal">Full Darth Developer</h4>
                        </div>
                      </Col>
                      <hr className="text-gray" />
                      <Col xs={12}>
                        <div>
                          <div className="d-flex justify-content-between">
                            <p className="text-gray fw-semibold m-0">Visitatori del profilo</p>
                            <p className="text-primary fw-semibold m-0">50</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="text-gray fw-semibold m-0">Collegamenti</p>
                            <p className="text-primary fw-semibold m-0">100</p>
                          </div>
                          <p className="fw-semibold">Espandi la tua rete</p>
                        </div>
                      </Col>
                      <hr className="text-gray" />
                      <Col xs={12}>
                        <div>
                          <p className="text-gray m-0">Accedi a strumenti e informazioni in esclusiva</p>

                          <p className="fw-semibold">
                            <i className="bi bi-gem"></i> Prova Premium per 0 EUR
                          </p>
                        </div>
                      </Col>
                      <hr className="text-gray" />
                      <Col xs={12}>
                        <div>
                          <p>
                            <i className="bi bi-bookmark-fill"></i> I miei elementi
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          {/* --- */}
          <Row>
            <Col>
              <div className="mt-3 w-100">
                <Card className=" rounded rounded-3">
                  <Card.Body>
                    <Row className="fs-7">
                      <Col xs={12}>
                        <div>
                          <p className="mb-2">Recenti</p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> React Developers - ReactJS & ...
                          </p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> Artificial Intelligence, Machine...
                          </p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> JavaScript Developer
                          </p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> JavaScript
                          </p>
                          <p className="m-1">
                            <i className="bi bi-hash"></i> management
                          </p>
                        </div>
                      </Col>
                      {/* <hr className="text-gray" /> */}
                    </Row>
                    <Row className="fs-7 mt-3">
                      <Col xs={12}>
                        <div>
                          <p className="mb-2">Gruppi</p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> React Developers - ReactJS & ...
                          </p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> Artificial Intelligence, Machine...
                          </p>
                          <p className="m-1">
                            <i className="bi bi-people-fill"></i> JavaScript Developer
                          </p>
                        </div>
                      </Col>
                      {/* <hr className="text-gray" /> */}
                    </Row>
                    <Row className="fs-7 mt-3">
                      <Col xs={12}>
                        <div>
                          <p className="mb-2">Hashtag seguiti</p>
                          <p className="m-1">
                            <i className="bi bi-hash"></i> management
                          </p>
                          <p className="m-1">
                            <i className="bi bi-hash"></i> economy
                          </p>
                          <p className="m-1">
                            <i className="bi bi-hash"></i> tech
                          </p>
                        </div>
                      </Col>
                      {/* <hr className="text-gray" /> */}
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        {/* FINE PARTE SINISTRA */}
        {/* INIZIO PARTE CENTRALE */}
        <Col md={5} className="d-flex flex-column align-items-center">
          {/* INIZIO --- */}
          {/* inizio nuovo post */}
          <Row className="w-100 mt-3">
            <Col>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  {/* input */}
                  <Row className="mb-1">
                    <Col xs={1}>
                      <div>
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/it/c/c4/Il_campione_olimpico_%28The_Olympic_Champ%29_1942.png"
                          roundedCircle
                          className="object-fit-cover border border-2 border-white"
                          style={{ height: "48px", width: "48px" }}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="px-1">
                        <Form.Group>
                          {/* <Form.Label></Form.Label> */}
                          <Form.Control
                            className="rounded rounded-5 fs-7 fw-semibold py-2 mt-1"
                            placeholder="Avvia un post"
                          />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                  {/* fine input */}
                  {/* tipo nuovo post */}

                  <Row>
                    <Col xs={12} className="p-0 m-0 my-2 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <Row className="mx-3">
                          <Col xs={4}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-image me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Contenuti multimediali</span>
                            </div>
                          </Col>
                          <Col xs={4}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-calendar-week me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Evento</span>
                            </div>
                          </Col>
                          <Col xs={4}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-blockquote-left me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Scrivi un articolo</span>
                            </div>
                          </Col>
                        </Row>
                      </Link>
                    </Col>
                  </Row>
                  {/* fine tipo nuovo post */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* fine nuovo post */}
          <Row className="w-100 mt-3">
            <Col>
              <Card className="rounded rounded-3">
                <Card.Body className="pb-0">
                  {/* post: intestazione */}
                  <Row className="mb-2">
                    <Col xs={1}>
                      <div>
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/it/c/c4/Il_campione_olimpico_%28The_Olympic_Champ%29_1942.png"
                          roundedCircle
                          className="object-fit-cover border border-2 border-white"
                          style={{ height: "48px", width: "48px" }}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="px-1">
                        <p className="fw-semibold m-0">Autore del post</p>
                        <p className="text-gray fs-7 m-0">Full Darth Developer</p>
                        <p className="text-gray fs-7 m-0">
                          2 giorni <span className="fw-bold"> · </span>
                          <i className="bi bi-globe-americas"></i>
                        </p>
                      </div>
                    </Col>
                    <Col xs={2}>
                      <div className=" text-end">
                        <i className="bi bi-three-dots fs-5"></i>
                        <i className="bi bi-x-lg fs-5 ms-3"></i>
                      </div>
                    </Col>
                  </Row>
                  {/* post: corpo */}
                  <Row>
                    <Col xs={12}>
                      <div>
                        <p className="fs-7">
                          In un mondo dove il cielo era dipinto di verde e gli alberi danzavano il tango, Pippo e Franco
                          si ritrovarono a navigare su una barca a forma di cucchiaio gigante. Il mare era un infinito
                          tappeto di gelato alla fragola, e i due amici remavano usando enormi bacchette cinesi. "Pippo,
                          hai visto quella nuvola a forma di pollo?" chiese Franco, puntando verso un cumulo di vapore
                          che gracchiava come una gallina. "Sì, e guarda là! Un gatto che suona il violino!" rispose
                          Pippo, indicando un felino elegantemente vestito che galleggiava su una ciambella pneumatica.
                          Mentre navigavano, incontrarono un pescatore che pescava parole dal mare. "Buongiorno!"
                          esclamò, tirando su dalla sua rete un grosso "CIAO" scintillante. Pippo e Franco risposero al
                          saluto, stupiti, e continuarono il loro viaggio. D'improvviso, la barca-cucchiaio colpì
                          qualcosa di duro. Era un'isola fatta interamente di libri. Gli alberi erano pagine piegate, e
                          i fiori erano segnalibri colorati. "È l'Isola delle Storie Non Raccontate," disse una voce
                          misteriosa. Era un vecchio saggio con un cappello da lampada. "Ogni libro qui contiene una
                          storia che nessuno ha mai letto." Pippo e Franco esplorarono l'isola, trovando libri che
                          raccontavano di mondi dove il tempo camminava all'indietro e gli animali parlavano in rime.
                          Alla fine della giornata, decisero di ripartire, portando con loro un libro ciascuno. Tornati
                          sulla loro barca-cucchiaio, ripresero a remare nel mare di gelato. Mentre il sole, che
                          assomigliava sorprendentemente a un'enorme arancia, tramontava, i due amici si guardarono e
                          risero. Erano stati testimoni di meraviglie inimmaginabili, e tutto ciò che potevano fare era
                          sorridere alla stranezza e bellezza del loro viaggio. E così, mentre la notte cadeva su un
                          mondo dove tutto era possibile, Pippo e Franco continuarono a navigare, chiedendosi quali
                          altre avventure li aspettassero all'orizzonte.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  {/* --- */}
                  <hr className="text-gray my-0" />
                  <Row>
                    <Col xs={12} className="p-0 m-0 my-2 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <Row>
                          <Col xs={3}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-hand-thumbs-up me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Consiglia</span>
                            </div>
                          </Col>
                          <Col xs={3}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-chat-text me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Commenta</span>
                            </div>
                          </Col>
                          <Col xs={3}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-repeat me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Diffondi il post</span>
                            </div>
                          </Col>
                          <Col xs={3}>
                            <div className="d-flex justify-content-center align-items-center hover-gray">
                              <i className="bi bi-send-fill me-1"></i>
                              <span className="fs-7 text-gray fw-semibold">Invia</span>
                            </div>
                          </Col>
                        </Row>
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
        <Col xs={0} md={4}>
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
          <div className=" position-sticky" style={{ top: "75px" }}>
            <Row>
              <Col xs={12}>
                <div>
                  <img src="https://i.imgflip.com/8d710i.jpg" alt="meme" className=" w-100" />
                </div>
              </Col>
            </Row>
            <Row className="my-2">
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
                      class="global-footer-compact__linkedin-logo mx-1"
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyHome;
