import React ,{useState}from 'react'
import CustomRadioButtons from '../components/CustomRadioButton'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton'
import { blue } from '@mui/material/colors';
import { Height, Password } from '@mui/icons-material';
function SignIn() {
  const [selected, setSelected] = useState("create");
  const [formData, setFormData] = useState({
    firstName: "",
    // password: "",
    // username: "",
    // age: "",
  });
 
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData,e.target.value)
      // console.log(setFormData())
  };
 
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
  };
  const handleRadioChange = (event) => {
    setSelected(event.target.value);
  };
 
  // const radioOptions = [
  //   { value: "create", label: "Create account" },
  //   // { value: "signin", label: "Sign in Already a customer?" },
  // ];
  const show=[
    {
      value:"show" , label:"Show Password"}
      // value:"forgot", label:"Forgot Password"}
  ]
 
    return (
     
        <div className='d-flex justify-content-center align-items-center p-5 main' style={{minheight:"100vh"}}>
          <div>
            <div className='text-center'>
              <label><h2>Sign in</h2></label>
              <h4>Hacker432@gmail.com <span className='mt-2 blue'>Change</span></h4>
            </div>
          <form>  
              {/* <CustomRadioButtons options={radioOptions} selectedValue={selected} onChange={handleRadioChange} /> */}
              <div className="mt-5 mb-3 row w-100%">
              <InputField  
                             
                  type="text"
                  name="Password"
                  placeholder="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  minLength={3}
                  maxLength={20}
                  required
              />
              </div>
              <div className="w-100 d-flex">
                <CustomRadioButtons
                options={show}
                selectedValue={selected}
                onChange={handleRadioChange}
                  />
                  <span className='mt-2 blue fw-bolder'>Forgot Password</span>
 
                </div>
 
             
              <div className="row w-100">
              {/* <InputField                
                  type="text"
                  name="name"
                  placeholder="Mobile number or email"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
              /> */}
              </div>
              <div className='row mt-3 mb-4 '><CustomButton label="Sign in" type="submit" color="primary" /></div>
              <hr/>
              <h4 className='mt-4 blue fw-bolder'>Are you New User?</h4>
            </form>
          </div>
           
        </div>
    )
}
 
export default SignIn
 
 