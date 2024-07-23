import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Container,
  CardText,
  Row,
  Col,
} from "reactstrap";

function Cards(props) {
  const { listTour } = props;
  return (
    <Container id="cards">
      <Row lg="4" md="2" sm="1">
        {listTour.map((tour, index) => (
          <Col key={index}>
            <Card className="h-100 box-shadow">
              <div className="position-relative">
                <CardImg alt="Card image cap" src={tour.img} top width="100%" />
                <span className="position-absolute top-0 start-0 bg-danger text-white mt-2 ms-2 py-1 px-2 h6 rounded">
                  12 off
                </span>
              </div>
              <CardBody>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <p className="text-gray font-light">
                    <i className="fa-solid fa-map-pin"></i> {tour.category}
                  </p>
                </CardSubtitle>
                <CardTitle tag="h5">{tour.title}</CardTitle>

                <CardText>
                  From
                  <span className="font-bold text-primary mx-2">
                    ${tour.price}
                  </span>
                  <span className="text-decoration-line-through text-gray fs-08">
                    $250.00
                  </span>
                </CardText>
                <div>
                  <div className="fs-08 text-yellow">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
