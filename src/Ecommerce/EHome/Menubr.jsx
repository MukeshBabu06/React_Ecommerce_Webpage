import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/NavDropdown';

function Menubar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RageMania</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Men" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Casual Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Formal Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sweatshirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Blazers & Coats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Suits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Rain Jackets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Kurtas & Kurta Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sherwanis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Dhotis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Casual Trousers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Formal Trousers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Innerwear & Sleepwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Briefs & Trunks</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Women" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Kurtis, Tunics & Tops</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sarees</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ethnic Wear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Leggings, Salwars & Churidars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Dress Materials</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Lehenga Cholis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Dupattas & Shawls</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jackets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tshirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jumpsuits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sweaters & Sweatshirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jackets & Coats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Shrugs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Kids" id="basic-nav-dropdown">
            <NavDropdown.Item>Boys Clothing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Shorts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Clothing Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ethnic Wear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Girls Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tshirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Clothing Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Lehenga choli</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Kurta Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Party wear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Nightwear & Loungewear</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Beauty" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Makeup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lipstick</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mascara</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Eyeliner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Foundation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Nail Polish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Skincare, Bath & Body</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Shampoo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Conditioner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Hair Oil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Fragrances</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Perfume</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Deodorant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Beard Oil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Hair Wax</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;