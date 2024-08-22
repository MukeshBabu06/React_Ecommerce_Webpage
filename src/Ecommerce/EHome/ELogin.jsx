import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./ELogin.css";

function ELogin({ setLogin }) {
  const [register, setRegister] = useState("Login");

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    mobile:'',
    setpassword:'',
    Confirmpassword: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({
        ...userData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

    if(!userData.email.trim()) {
      validationErrors.email = "Email ID is required"
  } else if(!/\S+@\S+\.\S+/.test(userData.email)){
      validationErrors.email = "Email ID is not valid"
  }

  if(!userData.password.trim()) {
    validationErrors.password = "Password is required"
} else if(userData.password.length < 10){
    validationErrors.password = "Password should be at least 10 char"
}

    if(!userData.username.trim()) {
        validationErrors.username = "Username is required"
    }

    if(!userData.mobile.trim()) {
      validationErrors.mobile = "Mobile number is required"
  }
    if(!userData.setpassword.trim()) {
        validationErrors.setpassword = "Password is required"
    } else if(userData.setpassword.length < 10){
        validationErrors.setpassword = "Password should be at least 10 char"
    }

    if(!userData.Confirmpassword.trim()) {
      validationErrors.Confirmpassword = "Re-enter password"
  } else if(userData.Confirmpassword !== userData.setpassword){
      validationErrors.Confirmpassword = "Password not matched"
  }

    /* if(userData.ConfirmPassword !== userData.setpassword) {
        validationErrors.ConfirmPassword = "password not matched"
    } */

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    <div className="Login-container">
      <Form onSubmit={handleSubmit} className="Form-Login">
        <div className="Login-top">
          <h2>{register}</h2>
          <span onClick={() => {setLogin(false);}}><i class="bi bi-x"></i></span>
        </div>
        {register === "Login" ? (
          <>
          <div className="Form-Signinpage">
            <div className="form-Field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='enter your login or email id'  onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>} 
            </div>
            <div className="form-Field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder='enter your password'  onChange={handleChange} />
              {errors.password && <span>{errors.password}</span>}
            </div>
          </div>
          </>
        ) : (
          <>
          <div className="Form-signup">
            <div className="me-2">
            <div className="form-Field">
              <label htmlFor="name">Username</label>
              <input type="text" id="name" name="name" placeholder='enter your name'  onChange={handleChange} />
              {errors.username && <span>{errors.username}</span>}
            </div>
            <div className="form-Field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='enter your email id'  onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}  
            </div>
            <div className="form-Field">
              <label htmlFor="mobile">Phone Number</label>
              <input type="number" id="mobile" name="mobile" placeholder='+91 98765 43210'  onChange={handleChange} />
              {errors.mobile && <span>{errors.mobile}</span>}
            </div>
            </div>
            <div className="ms-2">
            <div className="form-Field">
              <label htmlFor="setpassword">Set Password</label>
              <input type="password" id="setpassword" name="setpassword" placeholder='set your password' onChange={handleChange} />
              {errors.setpassword && <span>{errors.setpassword}</span>}
            </div>
            <div className="form-Field">
              <label htmlFor="Confirmpassword">Confirm Password</label>
              <input type="password" id="Confirmpassword" name="Confirmpassword" placeholder='Re-enter password' onChange={handleChange} />
               {errors.Confirmpassword && <span>{errors.Confirmpassword}</span>} 
            </div>
            </div>
            </div>
          </>
        )}
        <Button type="submit" className="form-Field-btn" >
          {register === "Sign Up" ? "Create Account" : "Login"}
        </Button>
        <div className="form-btm">
          <div className="form-terms">
          <input type="checkbox" name="" id=""/>
          <p className="form-privacy">
            By continuing, I agree to the terms of 
             <a href=""> use & privacy policy.</a>
          </p>
          </div>
          {register === "Login" ? (
            <p className="form-acc">
              Don't have an account?{" "}
              <Link onClick={() => setRegister("Sign Up")}>Sign Up</Link>
            </p>
          ) : (
            <p className="form-acc">
              Already have an account?{" "}
              <Link onClick={() => setRegister("Login")}>Login</Link>
            </p>
          )}
        </div>
      </Form>
    </div>
  );
}

export default ELogin;
