import React from "react";
import Card from 'react-bootstrap/Card';
import {Container,Row, Col} from 'react-bootstrap';

function Displaycard() {
  return (
    <Container fluid>
        <Row lg={12} className="ms-3 me-3 mt-3 mb-3 d-flex justify-content-center">
       <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-USPA-Teamspirit-Min50.jpg" fluid />
    </Card>
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Shirts-TIG-Britishclub-Flat50.jpg" fluid />
    </Card>
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Jeans-LeeSpykar-Min40.jpg" fluid />
    </Card>
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-Ethnicwear-LehengeCholiSets-Upto70.jpg" fluid />
    </Card>
    </Row>
    <Row lg={12} className="ms-3 me-3 mt-3 mb-3 d-flex justify-content-center">
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-Ethnicwear-Sarees-Min50.jpg" fluid />
    </Card>
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-Ethnicwear-KurtaSuitSets-5070.jpg" fluid />
    </Card>
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/050724-D-1.0-UHP-GFS-Ethnicwear-header-rev.jpg" fluid />
    </Card>
    <Card className="col-lg-2 col-md-5 col-9 m-1 p-0">
      <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-Kidwear-Header.jpg" fluid />
    </Card>
    </Row>
    </Container>
  );
}

export default Displaycard;