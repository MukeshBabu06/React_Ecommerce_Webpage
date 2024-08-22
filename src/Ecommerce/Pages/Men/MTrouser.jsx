import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import data from "../../Assets/JSON/Men.json";
import { useState } from "react";
import Productcard from "../Productcard";
import '../ECprd.css'

export default function MTrouser({ cart, setCart }) {
  const [MensTrousers] = useState(data.Trousers);

  return (
    <div>
      <Container fluid className="EPrdlist">
        <h1 className="mt-2 mb-2 text-center">Men's Trousers</h1>
        <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
          {MensTrousers.map((product) => (
            <Card
              key={product.id}
              className="EPrdcard justify-content-center align-items-center text-center"
            >
              <Productcard key={product.id} product={product} cart={cart} setCart={setCart}/>
              {/* <Card.Img
                style={{ width: "15rem", height: "16rem" }}
                className="m-0"
                variant="top"
                alt={product.name}
                src={product.pic}
              />
              <Card.Body>
                <Card.Title className="m-0">{product.name}</Card.Title>
                <Card.Text className="m-0">{product.price}</Card.Text>
                <Button
                  variant="primary"
                  className="ms-2 mt-0 mb-0 justify-content-center align-items-center"
                  onClick={() => addCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body> */}
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}
