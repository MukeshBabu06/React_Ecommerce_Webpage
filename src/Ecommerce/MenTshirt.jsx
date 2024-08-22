import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {Container,Row, Col, Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Homelist from './Assets/JSON/HomePrd.json'
import { useNavigate } from "react-router-dom";
import './MenTshirt.css'

    
const Mtshirt=({addCart})=> {
   const [Homeprd]=useState(Homelist);
   /* const percentage =(Homeprd.Featured.price/Homeprd.Featured.MRP)*100 */
  return (
    <>
    <Container fluid className="ms-0 me-0 mt-3 mb-3 EHmePrdlist">
        <h1 className="ms-5 me-5 mt-4 mb-2">Featured Products</h1>
        <Row lg={12} md={2}  className="mt-2 mb-2 justify-content-center align-items-center flex-wrp">
        {Homeprd.Featured.map((product) => (
            <Card key={product.id} className="EHmePrdcard justify-content-center align-items-center text-center">
              {/* <Link to={navigate("/Viewpage")} product={product}> */}<Card.Img className="EHmeprdimg m-0" variant="top" alt={product.name}
                src={product.pic}
              />{/* </Link> */}
              <Card.Body className="EHmeprdBody m-0 p-0">
                <Card.Title className="EHmeprdTitle m-0 p-0"><h4>{product.name}</h4></Card.Title>
                <Card.Text className="EHmeprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> {/* <span>{percentage.toFixed(0)}%off</span> */}</h5></Card.Text>
                <Button variant="primary" className="ECHmeButn btn-warning"
                  onClick={() =>addCart(product)}
                >Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
          
        </Row>
        <h1 className="ms-5 me-5 mt-5 mb-2">Latest New Collections</h1>
        <Row lg={12} md={2}  className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
          {Homeprd.LatestNew.map((product) => (
            <Card key={product.id} className="EHmePrdcard justify-content-center align-items-center text-center">
            <Card.Img className="EHmeprdimg m-0" variant="top" alt={product.name}
              src={product.pic}
            />
            <Card.Body className="EHmeprdBody m-0 p-0">
              <Card.Title className="EHmeprdTitle m-0 p-0"><h4>{product.name}</h4></Card.Title>
              <Card.Text className="EHmeprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> {/* <span>{percentage.toFixed(0)}%off</span> */}</h5></Card.Text>
              <Button variant="primary" className="ECHmeButn btn-warning"
                onClick={() =>addCart(product)}
              >Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        </Row>
        <h1 className="ms-5 me-5 mt-5 mb-2">Shirt Collections</h1>
        <Row lg={12} md={2}  className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
          {Homeprd.ShirtCol.map((product) => (
            <Card key={product.id} className="EHmePrdcard justify-content-center align-items-center text-center">
            <Card.Img className="EHmeprdimg m-0" variant="top" alt={product.name}
              src={product.pic}
            />
            <Card.Body className="EHmeprdBody m-0 p-0">
              <Card.Title className="EHmeprdTitle m-0 p-0"><h4>{product.name}</h4></Card.Title>
              <Card.Text className="EHmeprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> {/* <span>{percentage.toFixed(0)}%off</span> */}</h5></Card.Text>
              <Button variant="primary" className="ECHmeButn btn-warning"
                onClick={() =>addCart(product)}
              >Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        </Row>
        <h1 className="ms-5 me-5 mt-5 mb-2">Trouser Collections</h1>
        <Row lg={12} md={2}  className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
          {Homeprd.TrouserCol.map((product) => (
            <Card key={product.id} className="EHmePrdcard justify-content-center align-items-center text-center">
            <Card.Img className="EHmeprdimg m-0" variant="top" alt={product.name}
              src={product.pic}
            />
            <Card.Body className="EHmeprdBody m-0 p-0">
              <Card.Title className="EHmeprdTitle m-0 p-0"><h4>{product.name}</h4></Card.Title>
              <Card.Text className="EHmeprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> {/* <span>{percentage.toFixed(0)}%off</span> */}</h5></Card.Text>
              <Button variant="primary" className="ECHmeButn btn-warning"
                onClick={() =>addCart(product)}
              >Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        </Row>
        <h1 className="ms-5 me-5 mt-5 mb-2">Hoodie Collections</h1>
        <Row lg={12} md={2}  className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
          {Homeprd.HoodieCol.map((product) => (
            <Card key={product.id} className="EHmePrdcard justify-content-center align-items-center text-center">
            <Card.Img className="EHmeprdimg m-0" variant="top" alt={product.name}
              src={product.pic}
            />
            <Card.Body className="EHmeprdBody m-0 p-0">
              <Card.Title className="EHmeprdTitle m-0 p-0"><h4>{product.name}</h4></Card.Title>
              <Card.Text className="EHmeprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> {/* <span>{percentage.toFixed(0)}%off</span> */}</h5></Card.Text>
              <Button variant="primary" className="ECHmeButn btn-warning"
                onClick={() =>addCart(product)}
              >Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        </Row>
        <h1 className="ms-5 me-5 mt-5 mb-2">Casual Footware Collections</h1>
        <Row lg={12} md={2}  className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
          {Homeprd.FootwareCol.map((product) => (
            <Card key={product.id} className="EHmePrdcard justify-content-center align-items-center text-center">
            <Card.Img className="EHmeprdimg m-0" variant="top" alt={product.name}
              src={product.pic}
            />
            <Card.Body className="EHmeprdBody m-0 p-0">
              <Card.Title className="EHmeprdTitle m-0 p-0"><h4>{product.name}</h4></Card.Title>
              <Card.Text className="EHmeprdprice m-0 p-0"><h5>₹{product.price} MRP: <s>₹{product.MRP}</s> <br /> {/* <span>{percentage.toFixed(0)}%off</span> */}</h5></Card.Text>
              <Button variant="primary" className="ECHmeButn btn-warning"
                onClick={() =>addCart(product)}
              >Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        </Row>
   </Container>
         
    {/* <Container fluid className="ms-5 me-5 mt-3 mb-3">
        <h1 className="ms-5 me-5 mt-4 mb-4">Featured Products</h1>
        <Row lg={12} className="ms-5 me-5 mt-4 mb-4">
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684474986_7713406.jpg")}/>
                <Card.Body>
                   <Card.Title className="m-0" >F.R.I.E.N.D.S How You</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684476065_7027192.jpg")} />
                <Card.Body>
                   <Card.Title className="m-0" >Popeye The Sailor</Card.Title>
                   <Card.Text className="m-0"><p>₹ 399 <s>₹ 899</s> <b>₹ 500 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1691059494_6434987.webp")}/>
                <Card.Body>
                   <Card.Title className="m-0" >Tom And Jerry</Card.Title>
                   <Card.Text className="m-0"><p>₹ 449 <s>₹ 999</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1711105693_3950884.webp")}/>
                <Card.Body>
                   <Card.Title className="m-0" >Scooby Doo: Wildly</Card.Title>
                   <Card.Text className="m-0"><p>₹ 449 <s>₹ 899</s> <b>₹ 450 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684474986_7713406.jpg")}/>
                <Card.Body>
                   <Card.Title className="m-0" >Mens Tshirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
        </Row>

    <h1 className="ms-5 me-5 mt-4 mb-4">Latest New Collections</h1>
    <Row lg={12} className="ms-5 me-5 mt-4 mb-4">
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Supima Burnt Sienna.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Supima Burnt Sienna</Card.Title>
                   <Card.Text className="m-0"><p>₹ 249 <s>₹ 799</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Supima Jade Green.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Supima Jade Green</Card.Title>
                   <Card.Text className="m-0"><p>₹ 249 <s>₹ 799</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Supima Frost Grey.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Supima Frost Grey</Card.Title>
                   <Card.Text className="m-0"><p>₹ 449 <s>₹ 999</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Supima Peach.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Supima Peach</Card.Title>
                   <Card.Text className="m-0"><p>₹ 249 <s>₹ 799</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Supima Burnt Sienna.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Mens Tshirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
        </Row>

        <h1 className="ms-5 me-5 mt-4 mb-4">Shirt Collections</h1>
        <Row lg={12} className="ms-5 me-5 mt-4 mb-4">
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Cotton Linen Sky Blue.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Cotton Linen Sky Blue</Card.Title>
                   <Card.Text className="m-0"><p>₹ 649 <s>₹ 1399</s> <b>₹ 700 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Solids Brown.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Solids Brown</Card.Title>
                   <Card.Text className="m-0"><p>₹ 649 <s>₹ 1199</s> <b>₹ 650 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/TSS Originals Blue Bonnet Ombre (Utility).jpg")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >TSS Originals Blue</Card.Title>
                   <Card.Text className="m-0"><p>₹ 899 <s>₹ 1599</s> <b>₹ 700 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Textured Shirt Coral Sand.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Textured Shirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 999 <s>₹ 1599</s> <b>₹ 600 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684474986_7713406.jpg")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Mens Tshirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
        </Row>

        <h1 className="ms-5 me-5 mt-4 mb-4">Trouser Collections</h1>
        <Row lg={12} className="ms-5 me-5 mt-4 mb-4">
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Parachute Pants Mocha Brown.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Parachute Pants</Card.Title>
                   <Card.Text className="m-0"><p>₹ 849 <s>₹ 1699</s> <b>₹ 850 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Solids Ash Grey (Straight Fit).webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Solids Ash Grey</Card.Title>
                   <Card.Text className="m-0"><p>₹ 949 <s>₹ 1799</s> <b>₹ 850 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Solids Beige.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Solids Beige</Card.Title>
                   <Card.Text className="m-0"><p>₹ 899 <s>₹ 1699</s> <b>₹ 800 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Solids Black.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Solids Black</Card.Title>
                   <Card.Text className="m-0"><p>₹ 999 <s>₹ 1399</s> <b>₹ 400 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684474986_7713406.jpg")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Mens Tshirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
        </Row>

        <h1 className="ms-5 me-5 mt-4 mb-4">Hoodie Collections</h1>
        <Row lg={12} className="ms-5 me-5 mt-4 mb-4">
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Captain America Shield Tie Dye.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Captain America</Card.Title>
                   <Card.Text className="m-0"><p>₹ 1199 <s>₹ 1999</s> <b>₹ 800 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Tie Dye Black Chase.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Tie Dye Black</Card.Title>
                   <Card.Text className="m-0"><p>₹ 949 <s>₹ 1799</s> <b>₹ 850 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Wanderlust.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Wanderlust</Card.Title>
                   <Card.Text className="m-0"><p>₹ 999 <s>₹ 1899</s> <b>₹ 900 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/TSS Originals Burgundy Bliss.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >TSS Originals Burgun</Card.Title>
                   <Card.Text className="m-0"><p>₹ 999 <s>₹ 1999</s> <b>₹ 1000 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684474986_7713406.jpg")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Mens Tshirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
        </Row>


        <h1 className="ms-5 me-5 mt-4 mb-4">Casual Footware Collections</h1>
        <Row lg={12} className="ms-5 me-5 mt-4 mb-4">
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/All Day Classics Dune.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >All Day Classics </Card.Title>
                   <Card.Text className="m-0"><p>₹ 1299 <s>₹ 2499</s> <b>₹ 1200 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Batman Caped Crusader.jpg")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Batman Caped</Card.Title>
                   <Card.Text className="m-0"><p>₹ 1499 <s>₹ 2799</s> <b>₹ 1300 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/Urban Blaze Underwater.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Urban Blaze</Card.Title>
                   <Card.Text className="m-0"><p>₹ 1399 <s>₹ 2699</s> <b>₹ 1300 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/TSS Originals Black Hawk.webp")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >TSS Originals Black</Card.Title>
                   <Card.Text className="m-0"><p>₹ 1699 <s>₹ 3399</s> <b>₹ 1700 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height:'24rem'}} className="ms-3 me-3 p-0 justify-content-center align-items-center text-center">
                <Card.Img style={{ width: '15rem', height:'16rem'}} className="m-0" variant="top" src={require("../Ecommerce/Assets/Tshirt/1684474986_7713406.jpg")} fluid />
                <Card.Body>
                   <Card.Title className="m-0" >Mens Tshirt</Card.Title>
                   <Card.Text className="m-0"><p>₹ 349 <s>₹ 899</s> <b>₹ 550 off</b></p></Card.Text>
                <Button variant="primary" className="ms-2 mt-0 mb-0 justify-content-center align-items-center">Add to Cart</Button>
                   </Card.Body>
            </Card>
        </Row>
    </Container> */}
    </>
  );
}

export default Mtshirt;