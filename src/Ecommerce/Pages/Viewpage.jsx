/* import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './Viewpage.css'

function Viewpage({product, cart, setCart}) {
    const addCart=()=>{
        setCart([...cart,product])
    }
    const percentage =(product.price/product.MRP)*100
  return (
        <Container fluid className="EPrdview">
        <Row className="mt-2 mb-2">
        <Col lg={6} md={6} className="Viewcol_1">
        <div>
        <img className="Eprdviewimg m-0 p-0 img-fluid" variant="top" src={product.pic} alt=""/>
        </div>
        </Col>
        <Col lg={6} md={6} className="Viewcol_2">
        <div className="EprdviewBody m-0 p-0">
           <h4 className="EprdviewTitle m-0 p-0">Hello Buds{product.name}</h4>
           <h5 className="Eprdviewprice m-0 p-0">₹500 {product.price} MRP: <s>₹800 {product.MRP}</s> <br /> <span>60%</span></h5>
        <Button variant="primary" className="ECviewButn btn-warning" onClick={addCart}>Add to Cart</Button>
        </div>
        </Col>
        </Row>
      </Container>
  )
}

export default Viewpage */