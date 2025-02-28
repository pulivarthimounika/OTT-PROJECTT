// import React ,{useState}from 'react'
// import CustomRadioButtons from '../components/CustomRadioButton'
// import InputField from '../components/InputField';
// import CustomButton from '../components/CustomButton'
// import { Form, Button, Row, Col } from 'react-bootstrap';
// function SignIn() {
//   const [selected, setSelected] = useState("create");
//   const [formData, setFormData] = useState({
//     firstName: "",
//      password: "",
//     username: "",
   
//   });
  
//   const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//       console.log(formData,e.target.value)
//       // console.log(setFormData())
//   };
  
//   const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("Submitted Data:", formData);
//   };
//   const handleRadioChange = (event) => {
//     setSelected(event.target.value);
//   };

//   const radioOptions = [
//     { value: "create", label: "Create account" },
   
//   ];
//   const showPassword=[
//     { value:"show",label:"Show Password"},
//   ];
//   const  signin=[
//     { value:"sign in",label:"Sign in Already a customer ?"}
//   ]
  
  


//     return (

//         <div className='d-flex justify-content-center p-5'>
          
//           <div>
//             <div className='text-center'>
//               <label><h3>Welcome</h3></label>
//             </div>
//           <form>  
//               <CustomRadioButtons options={radioOptions} selectedValue={selected} onChange={handleRadioChange} />
//               <div className="row w-100">
//               <InputField  
                             
//                   type="text"
//                   name="firstName"
//                   placeholder="First & last name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   minLength={3}
//                   maxLength={20}
//                   required
//               />
//               </div>
//               <div className="row w-100">
//               { <InputField                 
//                   type="text"
//                   name="name"
//                   placeholder="Mobile number or email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   minLength={10}
//                   maxLength={10}
//                   required
//               /> }
//               { <InputField                 
//                   type="password"
//                   name="password"
//                   placeholder="Create a password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//               /> }

//               </div>
//               <div className="row w-100">
//                 <CustomRadioButtons
//                 options={showPassword}
//                 selectedValue={selected}
//                 onChange={handleRadioChange} 
               
//                 />
//                </div>
//               <div className="d-flex justify-content-center">
                
//               <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary" />
//               </div>
//               <pre className="mt-5">       By Creating an account ,you agree to the<br/>
//               Terms of Use and license agreement which can be found on the<br/>
//               website
//               </pre>
             
//               <div className="row w-100">
//                 <CustomRadioButtons
//                 options= {signin}
//                 selectedValue={selected}
//                 onChange={handleRadioChange} 
               
//                 />
//               </div>
              

//             </form>
//           </div>
            
//         </div>
//     )
// }

// export default SignIn
import React, { useState } from 'react';
import CustomRadioButtons from '../components/CustomRadioButton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
function SignIn() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("create");  // For the "create" account option
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
    navigate('/Signout');
  };

  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);  // Toggle password visibility
  };

  const radioOptions = [
    { value: "create", label: "Create account" },
  ];

  const showPasswordOptions = [
    { value: "show", label: "Show Password" },
  ];

  const signinOptions = [
    { value: "signin", label: "Sign in Already a customer ?" },
  ];

  return (
    <>
    {/* Add NavBar component at the top */}
   
   
   
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
          
          <Row className="mb-3">
            <Col xs={12}>
              <InputField
                type="text"
                name="firstName"
                placeholder="First & last name"
                value={formData.firstName}
                onChange={handleChange}
                minLength={3}
                maxLength={20}
                required
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
            <Row className="mb-3"></Row>
            <Col xs={12}>
              <InputField
                type={showPassword ? "text" : "password"}  // Conditionally show password
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
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
            <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
          </div>

          <p className="text-center mt-2">  By creating an account, you agree to the<br />
            Terms of Use and License Agreement, which can be found on the<br />
            website.
          </p>
          
          { <Row className="mt-3">
            <Col xs={12}>
              <CustomRadioButtons
                options={signinOptions}
                selectedValue={selected}
                onChange={handleRadioChange}
              />
            </Col>
          </Row> }
         
         


        </form>
      </div>
    </div>
    </>
  );
}

export default SignIn;

