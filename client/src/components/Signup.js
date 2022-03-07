import React, { useState } from 'react'
import './signup.css'

export default function SignUp() {
 const[ user ,setUser]= useState({
     firstname:'',
     email:''
 })


 const handleChange=e=>{
     setUser({...prev ,[ e.target.name]: e.target.value})
 }

  return (

    <div>
<h2> Signup Form</h2>
<p> Please SignUp here</p>

<div className='form'>
    <div className='form-input'>
    <label>User Email</label>
    <input
    value={user.email}
    name='name'
    onChange={handleChange}/>

    </div>

    <div className='form-input'>
    <label>User Email</label>
    <input
    value={user.email}
    name='name'
    onChange={handleChange}/>

    </div>

</div>

    </div>
  )
}
