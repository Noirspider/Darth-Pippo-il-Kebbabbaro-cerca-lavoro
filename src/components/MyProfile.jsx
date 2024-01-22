import React, { useRef } from "react"; // Importa useRef
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function MyProfile() {
  const sliderRef = useRef(null); // Crea una ref per il componente Slider

  const goToNextSlide = () => {
    sliderRef.current.slickNext(); // Utilizza la ref per chiamare il metodo slickNext()
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev(); // Utilizza la ref per chiamare il metodo slickPrev()
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={9} className="d-flex">
          <Row className="w-100">
            <Col>
              <div className="fs-1 text-danger bg-warning mt-3 rounded-3">
                <Card className="">
                  <Card.Img
                    variant="top"
                    src="https://product-images.tcgplayer.com/fit-in/874x874/274436.jpg"
                    className="object-fit-cover"
                    style={{ height: "201px", objectPosition: "0 16%" }}
                  />
                  <Card.Body>
                    <Row>
                      <Col className="d-flex justify-content-between">
                        <div className="fs-1 text-danger bg-darkgray mt-3">immagine</div>
                        <div className="fs-1 text-danger bg-darkgray mt-3">Matita</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8}>
                        <div className="fs-1 text-danger bg-darkgray mt-3">
                          <h2>Tizio</h2>
                          <h4>titolo tizio</h4>
                          <p>tiziolandia</p>
                        </div>
                        <div>
                          <button className="btn btn-pink rounded">Bottone 1</button>
                          <button className="btn btn-pink rounded mx-2">Bottone 2</button>
                          <button className="btn btn-pink rounded">Franco</button>
                        </div>
                        <div className="d-flex">
                          <div>
                            <Card style={{ width: "18rem" }}>
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>dddddd</Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                              </Card.Body>
                            </Card>
                          </div>{" "}
                          <div>
                            <Card style={{ width: "18rem" }}>
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>dddddd</Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                              </Card.Body>
                            </Card>
                          </div>{" "}
                          <div>
                            <Card style={{ width: "18rem" }}>
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>dddddd</Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                              </Card.Body>
                            </Card>
                          </div>
                        </div>
                        {/* <div>
                          <Slider {...settings} ref={sliderRef}>
                            {" "}
                            <button className="slider-arrow" onClick={goToPrevSlide}>
                              <FaArrowLeft />
                            </button>
                            <div>
                              <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                  <Card.Text>dddddd</Card.Text>
                                  <Card.Link href="#">Card Link</Card.Link>
                                  <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                              </Card>
                            </div>
                            <div>
                              <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                  <Card.Text>dddddd</Card.Text>
                                  <Card.Link href="#">Card Link</Card.Link>
                                  <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                              </Card>
                            </div>
                            <div>
                              <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                  <Card.Text>dddddd</Card.Text>
                                  <Card.Link href="#">Card Link</Card.Link>
                                  <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                              </Card>
                            </div>
                            <button className="slider-arrow" onClick={goToNextSlide}>
                              <FaArrowRight />
                            </button>
                          </Slider>
                        </div> */}
                      </Col>
                      <Col xs={4}>
                        <div className="fs-1 text-danger bg-darkgray mt-3">Università Tizio secondo</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <div className="fs-1 text-danger bg-darkgray mt-3">Darth Pippo il kebabbaro cerca lavoro</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
