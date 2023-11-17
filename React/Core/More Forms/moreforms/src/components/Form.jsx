import React, { useState } from 'react';

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    //creation of error variables
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [mailError, setmailError] = useState("");
    const [pwdError, setpwdError] = useState("");
    const [conpwdError, setconpwdError] = useState("");
    //validation for first name
    const handleFname = (e) => {
      setFirstName(e.target.value);
      if(e.target.value.length <2) {
        setFnameError("That field must be at least 2 characters!");
      }
      else {
        setFnameError("");
    }
      }
    //validation for last name

    const handleLname = (e) => {
      setLastName(e.target.value);
      if(e.target.value.length <2) {
          setLnameError("That field must be at least 2 characters!");
        }
      else {
          setLnameError("");
      }
    }
        
    //validation for mail
    const handlemail = (e) => {
      setEmail(e.target.value);
      if(e.target.value.length <5) {
        setmailError("That field must be at least 5 characters!");
      }
      else {
        setmailError("");
      }
    }
        
    //validation for password
    const handlePwd = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length <8) {
      setpwdError("That field must be at least 8 characters!");
      }
    else {
      setpwdError("");
      }
  }
      
  //validation for password confirmation
  const handleconPwd = (e) => {
  setConfirmPassword(e.target.value);
  if(e.target.value!==password)
    { setconpwdError("check your password confirmation!");}
  else {
    setconpwdError("");
    }
}
    
return (
      <div>
        <form >
          <div class="ligne">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" onChange={handleFname}/>
            {
                    fnameError ?
                    <p>{ fnameError }</p> :
                    ''
            }
          </div>
          <div class="ligne">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={handleLname} />
            {
                    lnameError ?
                    <p>{ lnameError }</p> :
                    ''
            }
          </div>
          <div class="ligne">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={ handlemail }/>
            {
                    mailError ?
                    <p>{ mailError }</p> :
                    ''
            }

          </div>
          <div class="ligne">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={ handlePwd }/>
            {
                    pwdError ?
                    <p>{ pwdError }</p> :
                    ''
            }
          </div>
          <div class="ligne">
            <label htmlFor="confirmPassord">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={ handleconPwd }/>
            {
                    conpwdError ?
                    <p>{ conpwdError }</p> :
                    ''
            }
          </div>
        </form>
  
        <div class="result">
          <h3>Your Form Data</h3>
          <p>
            <label class="res">First Name: </label>{ firstName }
          </p>
          <p>
            <label class="res">Last Name: </label>{ lastName }
          </p>
          <p>
            <label>Email: </label>{ email }
          </p>
          <p>
            <label>Password: </label>{ password }
          </p>
          <p>
            <label>Confirm Password: </label>{ confirmPassword }
          </p>
        </div>
      </div>
    )
  }
  
  export default Form;