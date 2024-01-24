import React, { useEffect, useState } from "react"; // Importa useRef
import { Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
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
                          <h4 className="h6">
                            7 visualizzazioni di Pippo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                            numquam maxime explicabo perferendis a quasi reprehenderit ullam fugit, id illum minus
                            placeat quod, distinctio deleniti vitae laboriosam quia! Incidunt, modi. In eaque unde amet
                            recusandae expedita iure quidem voluptatem voluptatum doloremque eos neque ipsam, officia
                            sequi, rerum, quam magni officiis? Voluptate nam ullam quibusdam ipsa. Consequatur dolore
                            quas dolorem fugiat? Cupiditate eius iure laudantium quas dolorem, est nesciunt perspiciatis
                            amet qui error eos a, impedit ducimus itaque. Omnis, iusto blanditiis. Repellendus vel
                            delectus nostrum numquam nesciunt qui facere ea provident? Illum mollitia et aliquid itaque
                            quod tempore deserunt, odit soluta repudiandae, cupiditate cumque. Non doloremque tenetur
                            praesentium deleniti ipsa, quos esse fugiat! Nisi recusandae deserunt quibusdam
                            consequuntur, sit tempora porro. Facilis quam officiis corporis facere exercitationem,
                            distinctio possimus architecto eos aliquam repellat, magni assumenda totam iusto nobis
                            doloremque maxime fugit ea. Commodi aut cupiditate repellendus asperiores at sed quis
                            facilis! Dolor optio quaerat autem totam recusandae fugiat omnis et modi voluptatum alias
                            consequuntur similique ullam, aliquid incidunt? Iure, cum non sapiente culpa aspernatur
                            perspiciatis rem atque repudiandae necessitatibus quis praesentium! Necessitatibus vitae
                            doloribus obcaecati provident voluptate deleniti, odit, voluptatum inventore ea enim sequi
                            assumenda nesciunt odio perspiciatis alias a saepe vel. Ad perferendis in alias voluptatem.
                            Ratione vitae quos magni. Velit tenetur in repellendus nihil nobis aut quos molestias quo
                            laborum odit nemo autem, esse facilis possimus atque dolores quas adipisci, numquam
                            distinctio tempore alias doloribus aperiam rerum! Facilis, modi. Repudiandae dolorem at
                            veniam cumque tempore necessitatibus perspiciatis quos praesentium suscipit quisquam.
                            Inventore, numquam atque non omnis saepe corrupti rem, quam dignissimos soluta id aliquam
                            magnam at, dolorum laborum facilis. Perspiciatis dolore nesciunt quisquam vel eveniet
                            corrupti, expedita eligendi iusto quae illum, labore debitis. Dolores sint culpa error neque
                            aliquam quam velit harum? Similique repellendus, nam eligendi deleniti deserunt sapiente.
                            Ex, dolore adipisci consequatur facere, nisi saepe suscipit soluta assumenda sed dolor
                            ducimus consequuntur repellat cum ipsum officia porro, et excepturi similique pariatur aut
                            fugit unde harum incidunt quaerat! Dolorem. Saepe libero voluptate quasi laborum aspernatur
                            dolor nam dolores labore reiciendis. Aliquid, alias commodi vitae excepturi ducimus debitis
                            laboriosam quod veniam perferendis necessitatibus autem modi nostrum eius cum nulla ad!
                            Eius, sit quis! Hic a nihil unde fugiat! Ea assumenda quas, doloribus explicabo dolorum
                            adipisci eum quaerat, voluptate in consectetur autem temporibus expedita totam repellat
                            molestiae a maiores, corrupti obcaecati. Accusantium architecto temporibus ducimus atque
                            expedita amet porro tempora similique a magni vel nostrum, ab sit vitae quisquam quam
                            suscipit sint officiis voluptates laudantium possimus! Reiciendis eum culpa est esse?
                            Dolorum aliquam praesentium at, ipsum exercitationem magnam architecto officia dolorem.
                            Autem, amet ipsum. Nostrum, doloremque cumque consequatur accusantium nemo natus officia
                            impedit velit voluptatibus culpa aspernatur nihil reiciendis, architecto soluta. Ducimus
                            provident deserunt quidem molestias nihil consectetur dignissimos perferendis quibusdam
                            quam? Dolorem recusandae quam expedita odit dignissimos laboriosam quas non deserunt culpa?
                            Fugiat quam nesciunt inventore minima dolor, harum corrupti! Asperiores ab a alias nulla ut,
                            reprehenderit nisi impedit, aliquam, doloremque in nemo non omnis qui beatae! Consectetur
                            explicabo error voluptatem at dicta eaque voluptates maiores accusamus quos quae. Aut.
                            Tempore excepturi iure, reiciendis nesciunt explicabo porro aliquam nulla natus suscipit
                            maiores nemo dicta molestias, tempora iste odio ex corrupti repudiandae cupiditate cumque
                            eos voluptatum quibusdam. Veritatis dicta magni modi! Soluta, deleniti obcaecati aliquid
                            distinctio dolores eum nihil natus tenetur recusandae praesentium, porro minima quisquam!
                            Itaque impedit, maiores officia modi animi libero! Adipisci, sint alias hic ea est neque
                            distinctio. Neque nisi voluptatibus recusandae? Esse, autem pariatur cumque eveniet illo
                            itaque molestias iure ullam cupiditate nisi quas saepe accusamus architecto nesciunt minus a
                            id! Fugit repellendus perferendis numquam officiis odit? Quas voluptates excepturi
                            similique, ipsa magnam tempore aliquam cumque maxime perferendis reprehenderit ea obcaecati
                            repellat minus neque magni ut sapiente eum illo quidem distinctio pariatur blanditiis unde
                            veniam laborum! Enim? Amet modi, adipisci cumque eligendi accusantium ab excepturi sunt unde
                            quod, optio numquam quisquam doloribus blanditiis neque atque harum cupiditate assumenda
                            alias exercitationem consectetur cum. Cum itaque molestias consequatur eveniet. Laborum sit
                            id recusandae nemo, cum temporibus nisi veniam alias quo reprehenderit unde autem asperiores
                            est suscipit aspernatur atque sint iste qui incidunt beatae obcaecati. Explicabo illo ipsa
                            pariatur repellendus! Odio ab numquam dolorum? Deserunt molestias iste ipsa eveniet ea
                            consequatur iusto tenetur. Quod, qui veritatis voluptates omnis exercitationem quaerat atque
                            est iste numquam nisi! Mollitia dolor vero reiciendis sequi! Incidunt rerum obcaecati
                            corporis enim! Sequi aut tenetur blanditiis optio nobis nam, deserunt vero nostrum
                            laudantium exercitationem magnam non illo cupiditate praesentium facilis veniam id vitae
                            animi deleniti doloremque voluptate. Quae enim animi, nihil amet repellendus eum ex modi
                            velit rerum non, perferendis commodi ipsam esse a numquam vero suscipit dolor, debitis iste
                            dicta. Voluptas culpa autem quas. Perspiciatis, reprehenderit! Magnam quisquam, quidem
                            voluptas perferendis in fugit quibusdam earum? Deleniti rem ullam ea excepturi dolor
                            obcaecati qui est nihil repellendus odio. Nobis, perspiciatis in sit minima quo at rem
                            animi. Eius, necessitatibus! Ipsum fugit ad dignissimos id placeat architecto voluptate et
                            neque laboriosam, sit modi nulla quam, doloremque illum aspernatur quis eveniet labore,
                            animi consequatur exercitationem quos eligendi laudantium natus. Corrupti deleniti dolor
                            amet tempore hic, laboriosam iusto vel nihil repellat repellendus asperiores expedita.
                            Dolorem illo voluptates molestias. Tempora libero dolores animi veniam veritatis odio eius?
                            Ratione minus necessitatibus repellat? Maxime quas ipsum esse repudiandae accusantium sed in
                            aliquam corrupti, ex dolorem minima et odit, vitae voluptate blanditiis. Architecto hic
                            fugiat velit necessitatibus expedita suscipit quia labore. Id, neque beatae? Odio eos,
                            reprehenderit veritatis dignissimos commodi illo optio quas iste. Facilis neque nisi
                            dolorum, culpa, eaque alias quasi quam inventore consectetur, tempore atque eius. Fugiat
                            deserunt eum explicabo sapiente numquam. Dolore, incidunt nostrum corporis sapiente
                            voluptatum aut, pariatur hic enim in fugiat consequuntur, expedita libero architecto!
                            Temporibus quia quaerat, eum alias provident debitis rerum nihil molestias facere animi
                            porro! Optio. Dolor consequuntur, nesciunt quibusdam laborum eos fugit debitis perferendis
                            atque consequatur ea ex repellendus quidem molestiae odit ipsam est nam ut voluptates,
                            ducimus placeat a? Repellendus magni ad facilis sit? Aspernatur dolorum numquam minus dicta
                            possimus velit quasi esse eos animi expedita fugiat dolore sed modi magni quos libero
                            placeat laudantium nam, veritatis architecto dolores repudiandae id. Quod, nam quia. Libero
                            deserunt hic fugit blanditiis consectetur, eveniet sed mollitia dolor similique adipisci
                            ipsa exercitationem cum tenetur dolores sunt sequi quisquam voluptate. Eos fuga aut
                            dignissimos est placeat obcaecati enim eaque. Magni reiciendis provident aspernatur tempora
                            autem vitae quasi iure debitis voluptatibus repellat.
                          </h4>
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
                  <div className=" align-content-center">
                    <svg
                      role="img"
                      aria-hidden="false"
                      aria-label="LinkedIn"
                      class="global-footer-compact__linkedin-logo"
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
