import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Orderstatus from "./Emodel";
import "./EPrdCart.css";

 const EPrdCart=({ cart, setCart })=> {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((total, item) => total + item.price * item.Qty, 0)
    );
  }, [cart]);

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, Qty: item.Qty + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, Qty: Math.max(1, item.Qty - 1) } : item
      )
    );
  };
  const handleRemove = () => {
    const delitem = [...cart];
    delitem.splice(cart, 1);
    setCart(delitem);
  };

  return (
    <Container fluid className="Ecart_container mt-5">
    <h1 className="text-center">Shopping Cart</h1>
    <Row lg={12} className="">
      <div className="Ecart_column1 col-lg-7 col-md-7 col-12">
        {cart.length === 0 ? (
          <div className="text-center">
            <h3 className="mt-5 pt-5">Your Cart is empty</h3>
            <h4 className="mb-5 pb-5">Please add Item's</h4>
          </div>
        ) : (
          cart.map((item) => (
            <Card key={item.id} className="Ecart_card">
              <Card.Img
                src={item.pic}
                alt={item.name}
                className="Ecart_cardimg img-fluid"
                variant="top"
              />
              <Card.Body className="Ecart_cardbody">
                <Card.Title className="Ecart_cardname">
                  <h4>{item.name}</h4>
                </Card.Title>
                <Card.Title className="Ecart_cardqty">
                  <h4>Rs {item.price} ₹</h4>
                </Card.Title>
              </Card.Body>
              <Card.Body className="Ecart_cardbody1">
                <Card.Text className="m-0">
                  <p className="Binde">
                    <Button
                      className="Btn"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </Button>
                    <span>{item.Qty} </span>
                    <Button
                      className="Btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </Button>
                  </p>
                </Card.Text>
              </Card.Body>
              <div className="Ecart_cardbody2">
                <Button
                  className="ERmBtn btn-danger"
                  onClick={() => handleRemove()}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
        <div>
          <h4 className="ECol1Tot">Total Amount ({cart.length} items): ₹ {total} </h4>
        </div>
      </div>
      <Card className="Ecart_column2 col-lg-3 col-md-6 col-12">
        <div>
          <div>
          {cart.map((item) => (
            <h5>
              {item.name} x {item.Qty}
            </h5>
          ))}
          </div>
          <div className="Ecart_column2btm">
            <h4>Total Amount ({cart.length} items): ₹ {total}</h4>
            <Button className="btn-warning">Proceed for payment</Button>
            <Orderstatus />
          </div>
        </div>
      </Card>
    </Row>
  </Container>
  );
}
export default EPrdCart;


{/* <Card key={product.id} style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={product.pic}/> cart={cart} setCart={setCart}
                <Card.Body>
                   <Card.Title className="m-0" >{product.name}</Card.Title>
                   <Card.Text className="m-0">{product.price}</Card.Text>
                <Link to={"/Prdcart"}><Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center"  onClick={() => addToCart(product)}>Add to Cart</Button></Link>
                   </Card.Body>
            </Card> */}

