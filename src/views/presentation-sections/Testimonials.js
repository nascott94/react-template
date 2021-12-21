import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Awesome Design and very well organized code structure! Great job!"
          </h5>
          <CardTitle tag="h4">John</CardTitle>
          <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Great product, would recommend."
          </h5>
          <CardTitle tag="h4">Anthony</CardTitle>
          <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Everything is perfect. Codes are really organized." <br></br>
            <br></br>
          </h5>
          <CardTitle tag="h4">Clay</CardTitle>
          <h6 className="category text-muted">Web Developer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: "",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div
        className="section section-testimonials"
        data-background-color="black"
      >
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Testimonials</h2>
            <h5 className="description">
        
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            
          </Col>
          <Col md="8">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Col>
          <Col md="2">
            
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Testimonials;
