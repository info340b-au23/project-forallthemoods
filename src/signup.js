import { Link } from "react-router-dom";
import React, { useState } from 'react';

export function SignUpPage() {

  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [errors, setErrors] = useState({});


  let EmailChange = (e) => {
    setEmail(e.target.value);
  };

  let NameChange = (e) => {
    setName(e.target.value);
  };

  let PasswordChange = (e) => {
    setPassword(e.target.value);
  };


  let Submit = (e) => {
    e.preventDefault();
  
    let validationErrors = {};
  
    if (!email) {
      validationErrors.email = 'Email is required';
    }
  
    if (!name) {
      validationErrors.name = 'Name is required';
    }
  
    if (!password) {
      validationErrors.password = 'Password is required';
    }
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setEmail('');
    setName('');
    setPassword('');
    setErrors({});
  };

    return (
      <div>
        <div className="nav-container">
          <span className="menu material-icons">menu</span>
          <header>FOR ALL THE MOODS</header>
          <span className="profile material-icons">account_circle</span>
      
        </div>
          <main>
    
            <div className="signin-container">
              <h1 className="subscribe">FOR ALL THE MOODS PROFILE</h1>
              <h2 className="notice">CREATE AN ACCOUNT TO BE NOTIFIED WITH POST REVIEWS, QUIZ RESULTS, AND DRAKE NEWS.</h2>
              <form className="sign-up" onSubmit={Submit}>
                <label className="signup-labels" htmlFor="email">EMAIL *</label>
                <input className="signup-inputs" type="text" id="email" name="email" value={email} onChange={EmailChange} required /><br />
                {errors.email && <p className="error-message">{errors.email}</p>}
                <label className="signup-labels" htmlFor="name">NAME *</label>
                <input className="signup-inputs" type="text" id="name" name="name" value={name} onChange={NameChange} required /><br />
                {errors.name && <p className="error-message">{errors.name}</p>}
                <label className="signup-labels" htmlFor="password">PASSWORD *</label>
                <input className="signup-inputs" type="password" id="password" name="password" value={password} onChange={PasswordChange} required /><br />
                {errors.password && <p className="error-message">{errors.password}</p>}
                <input className="submit" type="submit" aria-label="submit button" value="submit" />
              </form>
            </div>
          </main>
        <footer>
            <small>
              &copy; 2023 For All the Moods
            </small>
        </footer>
      </div>
    );
  }
  