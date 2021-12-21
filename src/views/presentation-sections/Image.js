import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Image() {
  return (
    <>
      <div
        className="section features-7 section-image"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg51.jpg").default + ")",
        }}
      >
        <Container fluid>
          <Row>
            <Col className="px-0" md="6">
              <Col sm="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons business_money-coins"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Save Time &amp; Money</h5>
                    <p className="description">
                      This section can be customized to fit your needs. This
                      section can be customized to fit your needs This section
                      can be customized to fit your needs This section can be
                      customized to fit your needs This section can be
                      customized to fit your needs This section can be
                      customized to fit your needs
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons text_bold"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Build </h5>
                    <p className="description">
                      This section can be customized to fit your needs. This
                      section can be customized to fit your needs This section
                      can be customized to fit your needs This section can be
                      customized to fit your needs
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons education_paper"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Prototype</h5>
                    <p className="description">
                      This section can be customized to fit your needs. This
                      section can be customized to fit your needs This section
                      can be customized to fit your needs This section can be
                      customized to fit your needs This section can be
                      customized to fit your needs
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md="6">
              <div className="image-container">
                <img
                  alt="..."
                  src={require("assets/img/ipad3.png").default}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Image;
