import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { updateUser } from '../Redux/Actions';
import { useParams } from 'react-router';
export default function UpdateUser() {
    const {message}= useSelector ((state) =>state.users);
    const dispatch =useDispatch()

    const[ user ,setUser]= useState({
        firstname:'',
        email:''
    })
   
   
    const handleChange=e=>{
        setUser(prev=>({ ...prev , [ e.target.name]: e.target.value}))
    }

    const {id} = useParams()
    const handleSubmit=()=>{
        if(!user.firstname || !user.email){
            console.log('Please Fill in all Fields..')
           
           
        }
        dispatch(updateUser(id, user))
       
        
    }
  return (
    <div>

        <div className='header'>
            <div className='header-details'>
        <h2> Update Form</h2>
        <p> Update Details Here</p>

        {message ? <h1>message</h1> :  <h1>No message</h1>}
    <span> {id}</span>

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
     Update User
    </button>

</div>
</div>
  )
}
