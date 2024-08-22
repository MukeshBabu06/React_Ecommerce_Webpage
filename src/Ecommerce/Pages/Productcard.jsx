import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Productcard=({product, cart, setCart})=>{
    const addCart=()=>{
        setCart([...cart,product])
    }
    const percentage =(product.price/product.MRP)*100
    return(
        <>
        <Card.Img className="Eprdimg m-0 p-0 img-fluid" variant="top" src={product.pic} alt={product.name} />
        <Card.Body className="EprdBody m-0 p-0">
           <Card.Title className="EprdTitle m-0 p-0" ><h4>{product.name}</h4></Card.Title>
           <Card.Text className="Eprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> <span>{percentage.toFixed(0)}%off</span></h5></Card.Text>
        <Button variant="primary" className="ECButn btn-warning" onClick={addCart}>Add to Cart</Button>
        </Card.Body>
        </>
    )
}
export default Productcard;
