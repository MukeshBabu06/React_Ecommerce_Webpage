import React from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ESignup() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log('Signup values:', values);
        // Add your signup logic here
        navigate('/login'); // Redirect to login page after signup
      };
      
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  )
}

export default ESignup
