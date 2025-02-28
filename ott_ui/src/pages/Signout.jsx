import React, { useState } from 'react';
import CustomRadioButtons from '../components/CustomRadioButton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Signout() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("signin");  // For the "create" account option
  const [showPassword, setShowPassword] = useState(false);  // For the "show password" option
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",  // Mobile number or email field
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
    navigate('/');
  };

  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);  // Toggle password visibility
  };
  const signinOptions = [
    { value: "signin", label: "Sign in Already a customer ?" },
  ];
  const radioOptions = [
    { value: "create", label: "Create account" },
  ];

  const showPasswordOptions = [
    { value: "show", label: "Show Password" },
  ];

 

  return (
    <>
    
   
      <div className="d-flex justify-content-center p-5" style={{ overflow: 'hidden',}}>

      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="text-center mb-4">
          <label><h3>Welcome</h3></label>
        </div>
        <form onSubmit={handleSubmit}>
          <CustomRadioButtons
            options={radioOptions}
            selectedValue={selected}
            onChange={handleRadioChange}
          />
          <Row className="mt-3">
            <Col xs={12}>
              <CustomRadioButtons
                options={signinOptions}
                selectedValue={selected}
                onChange={handleRadioChange}
              />
            </Col>
          </Row>
          
         
          
           <Row className="mb-3">
            <Col xs={12}>
              <InputField
                type="text"
                name="username"  // Should match the state
                placeholder="Mobile number or email"
                value={formData.username}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                required
              />
            </Col>
           </Row>
          
          <Row className="mb-3">
            <Col xs={12}>
              <CustomRadioButtons
                options={showPasswordOptions}
                selectedValue={showPassword ? "show" : ""}
                onChange={handlePasswordToggle}
              />
            </Col>
          </Row>
          

          <div className="d-flex justify-content-center mb-3">
            <CustomButton className="fw-bolder" label="Signout" type="submit" color="primary" />
          </div>

          <p>By creating an account, you agree to the<br />
            Terms of Use and License Agreement, which can be found on the<br />
            website.
          </p>
          
          
        </form>
      </div>
    </div>
    </>
  );
}


export default Signout;

