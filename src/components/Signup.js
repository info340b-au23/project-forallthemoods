import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';

export function SignUpPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };

  const NameChange = (e) => {
    setName(e.target.value);
  };

  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const Submit = async (e) => {
    e.preventDefault();
  
    const validationErrors = {};
  
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
  
    // Assuming you have already initialized your Firebase app
  
    const database = getDatabase();
    const usersRef = ref(database, 'users');
  
    // Push user data to the 'users' node
    push(usersRef, {
      email: email,
      name: name,
      password: password,
    })
      .then(() => {
        setIsSubmitted(true);
        // Additional logic or state updates after successful submission
      })
      .catch((error) => {
        console.error("Error writing to Firebase Database", error);
      });
  };
      // } else {
      //     setErrors(validationErrors);
      // }
    // };

    return (
      <div>
          <main>
            {isSubmitted ? (
              <div className='confirmation-container'>
                <h1 className="confirmation-message">SIGNED UP SUCCESSFULLY!</h1>
              </div>
            ) : (
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
                <input className="submit" type="submit" aria-label="submit button" value="SUBMIT" />
              </form>
            </div>
            )}
          </main>
      </div>
    );
  }
  
