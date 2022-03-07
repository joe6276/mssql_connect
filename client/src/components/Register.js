import React from 'react'
import { useState } from 'react'
import './signup.css'
import { addUser } from '../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
    const {addMessage}= useSelector ((state) =>state);
    const dispatch =useDispatch()
    const navigate = useNavigate();

    const[ user ,setUser]= useState({
        firstname:'',
        email:''
    })
   


   
    const handleChange=e=>{
        setUser(prev=>({ ...prev , [ e.target.name]: e.target.value}))
    }
    const handleSubmit=()=>{
        if(!user.firstname || !user.email){
            console.log('Please Fill in all Fields..')
           
           
        }
        dispatch(addUser(user))
        toast.success(addMessage)
        // navigate('/users')

        
       
        
    }

    const notify = () => toast.success("Wow so easy!");
   
  return (
    <div>

        <div className='header'>
            <div className='header-details'>
        <h2> Signup Form</h2>
        <p> Please SignUp here</p>

        {addMessage ? <h1>{addMessage}</h1> :  <h1>No message</h1>}
        {/* {addMessage && <h1> {addMessage}</h1>} */}

</div>
</div>
<div className='form'>
    <div className='form-input'>
    <label>FirstName</label>
    <input
    value={user.firstname}
    name='firstname'
    onChange={handleChange}/>

    </div>

    <div className='form-input'>
    <label>User Email</label>
    <input
    value={user.email}
    name='email'
    onChange={handleChange}/>

    </div>

    <button className='btn' onClick={handleSubmit}>
     SignUp
    </button>
    <button onClick={notify}>Notify!</button>
</div>

    </div>
  )
}
