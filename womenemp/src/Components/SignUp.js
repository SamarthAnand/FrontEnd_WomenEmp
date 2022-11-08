import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function SignUp() {
  const initialValues = {
    traineeId:100,
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    location: "",
    contact: "",
    email: "",
    familyInfo: "",
    aadharNo: "",
    dob: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios
      .post(`http://localhost:8202/api/Trainee`, formValues)
      .then((data) => {
          console.log(data)
      })
      .catch((error) => {
        // console.log(error)
        document.getElementById('loginAfter').innerHTML = error.response.data.errorMessage
    });
    }
  },[formErrors])

  const validate = (value) => {
    const errors = {};
    if (!value.userName) {
      errors.userName = "Please provide username";
    }
    if (!value.password) {
      errors.password = "Please provide password";
    } else if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!value.firstName) {
      errors.firstName = "Please provide firstname";
    }
    if (!value.lastName) {
      errors.lastName = "Please provide lastname";
    }
    if (!value.location) {
      errors.location = "Please provide location";
    }
    if (!value.contact) {
      errors.contact = "Please provide contact";
    } else if (value.contact.length !== 10) {
      errors.contact = "Contact should be 10 digit number";
    }
    if (!value.email) {
      errors.email = "Please provide email";
    }
    if (!value.familyInfo) {
      errors.familyInfo = "Please provide family info";
    }
    if (!value.aadharNo) {
      errors.aadharNo = "Please provide Aadhar Number";
    } else if (value.aadharNo.length !== 12) {
      errors.aadharNo = "Aadhar number must be 12 digit number";
    }
    if (!value.dob) {
      errors.dob = "Please provide DOB";
    }
    return errors;
  };

  return (
    <div>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
      <form onSubmit={handleSubmit}>
        <h1>Register New User</h1>

        <div className="field">
          <label>Username</label>
          <input type="text" name="userName" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.userName}</p>

        <div className="field">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.password}</p>

        <div className="field">
          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.firstName}</p>

        <div className="field">
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.lastName}</p>

        <div className="field">
          <label>Location</label>
          <input type="text" name="location" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.location}</p>

        <div className="field">
          <label>Contact</label>
          <input type="number" name="contact" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.contact}</p>

        <div className="field">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.email}</p>

        <div className="field">
          <label>Family info</label>
          <input type="text" name="familyInfo" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.familyInfo}</p>

        <div className="field">
          <label>Aadhar Number</label>
          <input type="text" name="aadharNo" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.aadharNo}</p>

        <div className="field">
          <label>Date Of Birth</label>
          <input type="date" name="dob" onChange={handleChange}/>
        </div>
        <p className="error">{formErrors.dob}</p>
        
        <button type="submit" className="buttonBlue">
          Register
        </button>

        <div id="loginAfter"></div>
      </form>
    </div>
  );
}

export default SignUp;
