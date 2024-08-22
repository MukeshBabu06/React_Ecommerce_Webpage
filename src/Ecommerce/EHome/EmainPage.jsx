import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './EmainPage.css'

 const EmainPage=({setLogin, cart})=>{

    return(
        <div className="">
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="ms-2 fw-bolder fs"><Link className="linkstyle ms-5 ps-3 h2" to="/">TrendyZone</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="ms-5 ps-4">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Men" id="basic-nav-dropdown" className="ms-4 me-4 fw-bolder">
              <NavDropdown.Item href=""><Link className="EClink" to={"/MTshirt"}>T-Shirts</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/MShirt"}>Shirts</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/MTrouser"}>Trousers</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/Hoodie"}>Hoodies/Sweatshirts</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="">Blazers & Coats</NavDropdown.Item>
              <NavDropdown.Item href="">Suits</NavDropdown.Item>
              <NavDropdown.Item href="">Rain Jackets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Kurtas & Kurta Sets</NavDropdown.Item>
              <NavDropdown.Item href="">Sherwanis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Dhotis</NavDropdown.Item>
              <NavDropdown.Item href="">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="">Casual Trousers</NavDropdown.Item>
              <NavDropdown.Item href="">Formal Trousers</NavDropdown.Item>
              <NavDropdown.Item href="">Innerwear & Sleepwear</NavDropdown.Item>
              <NavDropdown.Item href="">Briefs & Trunks</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Women" id="basic-nav-dropdown" className="ms-4 me-4 fw-bolder">
            <NavDropdown.Item href=""><Link className="EClink" to={"/Kurti"}>Kurtis, Tunics & Tops</Link></NavDropdown.Item>
            <NavDropdown.Item href=""><Link className="EClink" to={"/Sarees"}>Sarees</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/Ethicwear"}>Ethnic Wear</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Leggings, Salwars & Churidars</NavDropdown.Item>
              <NavDropdown.Item href="">Dress Materials</NavDropdown.Item>
              <NavDropdown.Item href="">Lehenga Cholis</NavDropdown.Item>
              <NavDropdown.Item href="">Dupattas & Shawls</NavDropdown.Item>
              <NavDropdown.Item href="">Jackets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=""><Link className="EClink" to={"/WTshirt"}>Tshirts</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Tops</NavDropdown.Item>
              <NavDropdown.Item href="">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="">Jumpsuits</NavDropdown.Item>
              <NavDropdown.Item href="">Sweaters & Sweatshirts</NavDropdown.Item>
              <NavDropdown.Item href="">Jackets & Coats</NavDropdown.Item>
              <NavDropdown.Item href="">Shrugs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Kids" id="basic-nav-dropdown" className="ms-4 me-4 fw-bolder">
            <NavDropdown.Item>Boys Clothing</NavDropdown.Item>
            <NavDropdown.Item href=""><Link className="EClink" to={"/BoysTshirt"}>TShirts</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/BoysJacket"}>Jackets</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Shorts</NavDropdown.Item>
              <NavDropdown.Item href="">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="">Clothing Sets</NavDropdown.Item>
              <NavDropdown.Item href="">Ethnic Wear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Girls Clothing</NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/GirlsDress"}>Dresses</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/Girlstshirt"}>T-Shirts</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Tops</NavDropdown.Item>
              <NavDropdown.Item href="">Clothing Sets</NavDropdown.Item>
              <NavDropdown.Item href="">Lehenga choli</NavDropdown.Item>
              <NavDropdown.Item href="">Kurta Sets</NavDropdown.Item>
              <NavDropdown.Item href="">Party wear</NavDropdown.Item>
              <NavDropdown.Item href="">Nightwear & Loungewear</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Watches" id="basic-nav-dropdown" className="ms-4 me-4 fw-bolder">
            <NavDropdown.Item href=""><Link className="EClink" to={"/Menwatch"}>Mens</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/WomenWatch"}>Womens</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Sunglasses" id="basic-nav-dropdown" className="ms-4 me-4 fw-bolder">
            <NavDropdown.Item href=""><Link className="EClink" to={"/Menglass"}>Mens</Link></NavDropdown.Item>
            <NavDropdown.Item href=""><Link className="EClink" to={"/Womenglass"}>Womens</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Beauty" id="basic-nav-dropdown" className="ms-4 me-4 fw-bolder">
            <NavDropdown.Item href="">Makeup</NavDropdown.Item>
              <NavDropdown.Item href="">Lipstick</NavDropdown.Item>
              <NavDropdown.Item href="">Mascara</NavDropdown.Item>
              <NavDropdown.Item href="">Eyeliner</NavDropdown.Item>
              <NavDropdown.Item href="">Foundation</NavDropdown.Item>
              <NavDropdown.Item href="">Nail Polish</NavDropdown.Item>
              <NavDropdown.Item href="">Skincare, Bath & Body</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Shampoo</NavDropdown.Item>
              <NavDropdown.Item href="">Conditioner</NavDropdown.Item>
              <NavDropdown.Item href="">Hair Oil</NavDropdown.Item>
              <NavDropdown.Item href="">Fragrances</NavDropdown.Item>
              <NavDropdown.Item href=""><Link className="EClink" to={"/Perfume"}>Perfume</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Deodorant</NavDropdown.Item>
              <NavDropdown.Item href="">Beard Oil</NavDropdown.Item>
              <NavDropdown.Item href="">Hair Wax</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex ms-5 ps-4">
            <Nav.Link className="m-2" href=""><Link className="EClink" to=""><img src={require("../Assets/search.png")} alt="" style={{ width: '21px', height:'21px'}}/></Link></Nav.Link>
            <Nav.Link className="m-2" href=""><Link className="EClink" to=""><img src={require("../Assets/account.png")} alt="" style={{ width: '21px', height:'21px'}}/></Link></Nav.Link>
            <Nav.Link className="m-2" href=""><Link className="EClink" to=""><img src={require("../Assets/love.png")} alt="" style={{ width: '21px', height:'21px'}}/></Link></Nav.Link>
            <Nav.Link className="m-2" href=""><Link className="EClink" to="/EPrdcart"><img src={require("../Assets/market.png")} alt="" style={{ width: '21px', height:'21px'}}/><span>{cart.length}</span></Link></Nav.Link>
            <Button variant="primary" className="btn-warning ms-4" onClick={()=>setLogin(true)}>Login</Button>
          </div>
        </Navbar.Collapse>
            
      </Container>
    </Navbar>
    <Outlet/>
    </div>
        
    )
}
export default EmainPage;