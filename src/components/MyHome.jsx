import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHomeAction, fetchPostHomeAction, fetchProfileAction } from "../redux/actions/actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomeDeleteModal from "./HomeDeleteModal";
import HomePutModal from "./HomePutModal";
import HomePostModal from "./HomePostModal";

function MyHome() {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.myProfile);
  const allPost = useSelector((state) => state.home.allPost);
  const refreshPost = useSelector((state) => state.home.refreshPost);

  const [searchBarValue, setSearchBarValue] = useState("");

  const [showHomeDeleteModal, setShowHomeDeleteModal] = useState(false);
  const [showHomePutModal, setShowHomePutModal] = useState(false);
  const [showHomePostModal, setShowHomePostModal] = useState(false);

  const [selectedPostData, setSelectedPostData] = useState(null);

  const [fetchTimer, setFetchTimer] = useState(null);

  useEffect(() => {
    dispatch(fetchProfileAction());

    setFetchTimer(
      setInterval(() => {
        dispatch(fetchHomeAction());
      }, 10000)
    );
  }, []);

  useEffect(() => {
    dispatch(fetchHomeAction());
  }, [refreshPost]);

  const handleAddPost = (e) => {
    e.preventDefault();

    if (searchBarValue != "") {
      const objectToPost = {
        text: searchBarValue,
      };

      dispatch(fetchPostHomeAction(objectToPost));
      setSearchBarValue("");
    }
  };

  const handleHomeDeleteModal = (post) => {
    setSelectedPostData(post);
    setShowHomeDeleteModal(true);
  };
  const handleHomePutModal = (post) => {
    setSelectedPostData(post);
    setShowHomePutModal(true);
  };

  const handleClose = () => {
    setSelectedPostData(null);
    setShowHomeDeleteModal(false);
    setShowHomePutModal(false);
    setShowHomePostModal(false);
  };

  return (
    <Container>
      {selectedPostData && (
        <HomeDeleteModal postData={selectedPostData} show={showHomeDeleteModal} handleClose={handleClose} />
      )}
      {selectedPostData && (
        <HomePutModal postData={selectedPostData} show={showHomePutModal} handleClose={handleClose} />
      )}

      <HomePostModal show={showHomePostModal} handleClose={handleClose} />

      <Row className="d-flex justify-content-center">
        {/* INIZIO PARTE SINISTRA */}
        <Col md={2}>
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
                          {myProfile && (
                            <Image
                              src={myProfile.image}
                              roundedCircle
                              className="object-fit-cover position position-absolute border border-4 border-white"
                              style={{ height: "72px", width: "72px", margin: "-36px 0 0 0" }}
                            />
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row className="fs-7 mt-5">
                      {myProfile && (
                        <Col xs={12} className="d-flex justify-content-center">
                          <div className=" text-center">
                            <h2 className=" fs-6">{myProfile.username}</h2>
                            <h4 className="fs-7 text-gray fw-normal">{myProfile.title}</h4>
                          </div>
                        </Col>
                      )}
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
                    <Col className=" col-auto pe-0">
                      {myProfile && (
                        <div>
                          <Image
                            src={myProfile.image}
                            roundedCircle
                            className="object-fit-cover border border-2 border-white"
                            style={{ height: "48px", width: "48px" }}
                          />
                        </div>
                      )}
                    </Col>

                    <Col>
                      <div className="px-1">
                        {/* 
                        <Form onSubmit={handleAddPost}>
                          <Form.Group>
                           -- <Form.Label></Form.Label> --
                            <Form.Control
                              value={searchBarValue}
                              onChange={(e) => setSearchBarValue(e.target.value)}
                              type="text"
                              className="rounded rounded-5 fs-7 fw-semibold py-2 mt-1"
                              placeholder="Avvia un post"
                            />
                          </Form.Group>
                        </Form>
*/}

                        {/* Componente modale */}

                        <div
                          className="w-100 rounded-5 border border-1 border-gray-400 text-gray-600 p-2 fw-semibold hover-gray"
                          onClick={() => setShowHomePostModal(true)}
                        >
                          Avvia un post
                        </div>
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
          {allPost && (
            <TransitionGroup className="row w-100 mt-3 ">
              {allPost.slice(0, 20).map((post) => (
                <CSSTransition key={post._id} timeout={300} classNames="fade">
                  <Col xs={12} className=" mb-3">
                    <Card className="rounded rounded-3">
                      <Card.Body className="pb-0">
                        {/* post: intestazione */}
                        <Row className="mb-2 ">
                          <Col className=" col-auto p-0 ps-2 ">
                            <div>
                              <Image
                                src={post.user.image}
                                roundedCircle
                                className="object-fit-cover border border-2 border-white"
                                style={{ height: "48px", width: "48px" }}
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="px-1">
                              <p className="fw-semibold m-0">{post.user.username}</p>
                              <p className="text-gray fs-7 m-0">{post.user.title}</p>
                              {/* <p className="text-gray fs-7 m-0">
                              2 giorni <span className="fw-bold"> · </span>
                              <i className="bi bi-globe-americas"></i>
                            </p> */}
                            </div>
                          </Col>
                          <Col xs={2}>
                            {myProfile._id && post.user._id && myProfile._id == post.user._id ? (
                              <div className=" d-flex flex-column text-end">
                                <i
                                  className="bi bi-three-dots fs-5 icon-put-post"
                                  onClick={() => handleHomePutModal(post)}
                                ></i>
                                <i
                                  className="bi bi-x-lg fs-5 icon-delete-post"
                                  onClick={() => handleHomeDeleteModal(post)}
                                ></i>
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </Col>
                        </Row>
                        {/* post: corpo */}
                        <Row>
                          <Col xs={12}>
                            <div>
                              <p className="fs-7">{post.text}</p>
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
                                    <span className="fs-7 text-gray fw-semibold">Condividi</span>
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
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyHome;
