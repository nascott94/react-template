import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function BasicComponents() {
  return (
    <>
      <div className="section section-basic-components">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <h2 className="title"> Header</h2>
              <h6 className="category">The core elements of your website</h6>
              <h5 className="description">
              This section can be customized to fit your needs.  This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs This section can be customized to fit your needs.
              </h5>
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/img/ipad.png").default}
                ></img>
                <img
                  alt="..."
                  className="table-img"
                  src={
                    require("assets/img/presentation-page/table.jpg").default
                  }
                ></img>
                <img
                  alt="..."
                  className="share-btn-img"
                  src={
                    require("assets/img/presentation-page/share-btn.jpg")
                      .default
                  }
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={
                    require("assets/img/presentation-page/coloured-card-with-btn.jpg")
                      .default
                  }
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={
                    require("assets/img/presentation-page/coloured-card.jpg")
                      .default
                  }
                ></img>
                <img
                  alt="..."
                  className="social-img"
                  src={
                    require("assets/img/presentation-page/social-row.jpg")
                      .default
                  }
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={
                    require("assets/img/presentation-page/linkedin-btn.jpg")
                      .default
                  }
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicComponents;
