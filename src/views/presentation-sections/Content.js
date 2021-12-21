import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col md="5">
              <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-comments rellax"
                  data-rellax-speed="1"
                  src={
                    require("assets/img/presentation-page/content1.jpg").default
                  }
                ></img>
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={
                    require("assets/img/presentation-page/content4.jpg").default
                  }
                ></img>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <div className="section-description">
                <h2 className="title">Content Areas</h2>
                <h6 className="category">For Areas that Need More Space</h6>
                <h5 className="description">
                This section can be customized to fit your needs.  This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs.
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Content;
