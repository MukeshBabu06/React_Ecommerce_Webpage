import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Container,Row, Col} from 'react-bootstrap';

function Carsol() {
  return (
    <Container fluid>
        <Row>
        <Col lg={12}>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require("../Assets/319b7efebd28c148d75f948d8ab1d3c8_279337_0.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src={require("../Assets/D-1.0-UHP-27072024-MainBanner-Z3-P2-VanHeusen-Wrangler-Min40-.avif")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require("../Assets/D-1.0-UHP-27072024-MainBanner-Z3-P5-gas-gant-min50.avif")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require("../Assets/D-1.0-UHP-27072024-MainBanner-Z3-P6-mavi-trendyol-flat50.avif")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require("../Assets/D-1.0-UHP-27072024-MainBanner-Z3-P7-ishin-shewill-min75.avif")}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  );
}

export default Carsol;