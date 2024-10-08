import React from'react'  
import { useState } from 'react'
import './App.css'
import axios from'axios';

function App() {
  const [formData,setFormData] = useState({
    name:' ',
    email :' ',
    message:' ',
 });
  
  const handleChange = (e) => {
    const{name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };
  const handleSubmit = async (e) =>{ 
    e.PreventDefalut();
    try{
      const response = await axios.post('http://localhost:5000/submit',formData)
      console.log(response.data);
      alert('form submitted sucessfully');

    }catch (error){
      console.erreo('error submitting form',error);
      alert('failed to submit form');
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
      <label>name:</label>
      <input type='text' name='name' value={formData.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required/>
      </div>
      <div>
        <label>password:</label>
        <input type='text' name='message' value={formData.message} onChange={handleChange} required/>   
         </div>
         <button type = 'submit button'>submit</button>       
          </form>
      
       </>
  );
};

     export default App
