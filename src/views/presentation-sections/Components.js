import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Components() {
  return (
    <>
      <div
        className="section section-components"
        data-background-color="dark-blue"
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center title">
                Collection of elements <br></br>
                <small className="description">
                  Designed to look great together
                </small>
              </h2>
              <h5 className="text-center description">
This section can be customized to fit your needs.  This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs.              </h5>
              <div className="space-50"></div>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="card-container first-card">
                <div className="card-component">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="front">
                      <img
                        alt="..."
                        src={
                          require("assets/img/presentation-page/basic_thumb.jpg")
                            .default
                        }
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container second-card">
                <div className="card-component">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="front">
                      <img
                        alt="..."
                        src={
                          require("assets/img/presentation-page/cards_thumb.jpg")
                            .default
                        }
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container third-card">
                <div className="card-component">
                  <a href="sections.html">
                    <div className="front">
                      <img
                        alt="..."
                        src={
                          require("assets/img/presentation-page/sections_thumb.jpg")
                            .default
                        }
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container fourth-card">
                <div className="card-component">
                  <a href="examples/product-page.html">
                    <div className="front">
                      <img
                        alt="..."
                        src={
                          require("assets/img/presentation-page/pages2_thumb.jpg")
                            .default
                        }
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Components;
