import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import data from '../Assets/JSON/HomePrd.json'

/* function Searchbr() { */
   const SearchAndFilter = () => {
    /*// Sample list of items
    const [items] = useState([Homelist]);
    // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered items based on search term
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  ); */
  /* const [searchTerm, setSearchTerm] = useState(""); */

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="d-flex justify-content-center">
{/*        <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll"  */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
{/*         </Navbar.Collapse> */}
      </Container>
    </Navbar>
    {/* <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        </div> */}
  </>
  );
}

export default SearchAndFilter;
/* import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App; */
/* import React, { useState } from 'react';

const SearchAndFilter = () => {
  // Sample list of items
  const [items] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
  ]);

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered items based on search term
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search and Filter</h1>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchAndFilter;
 */