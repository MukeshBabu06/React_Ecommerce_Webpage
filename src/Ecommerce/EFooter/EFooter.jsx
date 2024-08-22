import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './EFooter.css'

function EFooter(){
  return (
<div classNameName="container my-2">
  <footer
          classNameName="text-center text-lg-start text-white"
          style={{backgroundColor: "darkslategray"}}
          >
    <div className="Container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-white">
              TrendyZone
            </h6>
            <p className="text-white">
            The way of shopping has been revolutionized by online shopping. It has made it possible and convenient to shop virtually from literally anywhere.The sheer convenience of shopping is one of the biggest advantages of online shopping. For those individuals who are busy and struggle to find time to visit stores, online shopping is a boon. 
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-white">Products</h6>
            <p>
              <Link to="/" className="text-white">Home</Link>
            </p>
            <p>
            <Link to={"/MTshirt"} className="text-white">Men</Link>
            </p>
            <p>
            <Link to={"/Sarees"} className="text-white">Women</Link>
            </p>
            <p>
            <Link to={"/BoysTshirt"} className="text-white">Kids</Link>
            </p>
            <p>
            <Link to={"/Menwatch"} className="text-white">Watches</Link>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-white">
              Useful links
            </h6>
            <p>
              <Link to={""} className="text-white">Your Account</Link>
            </p>
            <p>
              <Link to={""} className="text-white">Become an Affiliate</Link>
            </p>
            <p>
              <Link to={""} className="text-white">Shipping Rates</Link>
            </p>
            <p>
              <Link to={""} className="text-white">Help</Link>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-white">
            <h6 className="text-uppercase mb-4 font-weight-bold text-white">Contact</h6>
            <p><i class="bi bi-house-check"></i> Chennai, India</p>
            <p><i class="bi bi-envelope-at"></i> trendyzone@gmail.com</p>
            <p><i class="bi bi-telephone"></i> + 91 234 567 88</p>
            <p><i class="bi bi-printer"></i> + 91 234 567 89</p>
          </div>
        </div>
      </section>
      <hr className="my-2"/>
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3 text-white">
              © 2024 Copyright <Link to="/" className="text-white">TrendyZone.com</Link>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end text-white">
            <Link to={"https://www.facebook.com/"}  className="btn btn-outline-light btn-floating m-1"
               role="button"><i class="bi bi-facebook"></i></Link>
            <Link to={"https://x.com/i/flow/login"}  className="btn btn-outline-light btn-floating m-1"
               role="button"><i class="bi bi-twitter"></i></Link>
            <Link to={"https://www.google.co.in/"}  className="btn btn-outline-light btn-floating m-1"
               role="button"><i class="bi bi-google"></i></Link>   
            <Link to={"https://www.instagram.com/"}  className="btn btn-outline-light btn-floating m-1"
               role="button"><i class="bi bi-instagram"></i></Link>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>
  );
}
export default EFooter;
