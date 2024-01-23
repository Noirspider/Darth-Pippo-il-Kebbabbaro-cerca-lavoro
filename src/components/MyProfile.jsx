import React, { useEffect } from "react"; // Importa useRef
import { Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfileAction } from "../redux/actions/actions";

function MyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction("65af7f33bd5d12001890d40a"));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center ">
        <Col xs={9} className="d-flex flex-column">
          <Row className="w-100">
            <Col>
              <div className="fs-1 mt-3">
                <Card className=" rounded rounded-3">
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/CFFfwXrWgAA1rGe.jpg"
                    className="object-fit-cover rounded rounded-top-3"
                    style={{ height: "201px", objectPosition: "0 16%" }}
                  />
                  <Card.Body>
                    <Row>
                      <Col className="d-flex justify-content-between">
                        <div className=" position-relative">
                          <Image
                            src="https://i.pinimg.com/736x/d8/c7/36/d8c736420ebfa1df591f693fc06af017.jpg"
                            roundedCircle
                            className="object-fit-cover position-absolute border border-4 border-white"
                            style={{ height: "152px", width: "152px", top: "-135px" }}
                          />
                        </div>
                        <div>
                          {" "}
                          <i className="bi bi-pencil"></i>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8}>
                        <div className="mt-3">
                          <h2>Darth Pippo</h2>
                          <h4>Oscuro Lord del Kebab</h4>
                          <p>La Kebab Nera</p>
                        </div>
                        <div>
                          <button className="btn btn-primary rounded-5">Bottone 1</button>
                          <button className="btn btn-outline-primary rounded-5 mx-2">Bottone 2</button>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div>Università Tizio secondo</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mt-3">
            <Col>
              <Card className="rounded rounded-3">
                <Card.Body>
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div>
                        <h3>Analisi</h3>
                        <i className="bi bi-eye-fill">solo per kebab</i>
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
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                          </svg>{" "}
                        </div>
                        <div>
                          <h4>7 visualizzazioni di Pippo</h4>
                          <p>scopri chi ha visitato il tuo profilo</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="d-flex mx-2">
                        <div>
                          <i className="bi bi-search"></i>
                        </div>
                        <div>
                          <h4>2 comparse nei motori di ricerca</h4>
                          <p>Vedi quante volte compari nei risultati di ricerca.</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}></Col>
                  </Row>
                  <Row className="border-top-5 border-black">
                    <Col xs={12} className="p-0 m-0 ">
                      <Link to={"/"} className=" text-decoration-none text-black">
                        <div className=" text-center">
                          {" "}
                          Mostrami altre attività <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Row className=" mt-3">
            <Col xs={12}>
              <div className=" d-flex justify-content-between">
                <div>
                  {" "}
                  <h3>Lingua del profilo</h3>
                  <p>Italiano</p>
                </div>
                <div>
                  <i className="bi bi-pencil"></i>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className=" d-flex justify-content-between">
                <div>
                  {" "}
                  <h3> Public profile & URL</h3>
                  <p> HTTPS://PIPPOOOOOOOO </p>
                </div>
                <div>
                  <i className="bi bi-pencil"></i>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                <img src="https://i.imgflip.com/8d710i.jpg" alt="meme" className=" w-100" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
