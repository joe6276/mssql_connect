import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import{deleteUser, getUsers} from '../Redux/Actions/index'
import './user.css'
export default function User() {
  const users= useSelector ((state) =>state.users);
  console.log(users);
    const dispatch =useDispatch()

    useEffect(()=>{
      dispatch(getUsers())
    }, [])

 const handleDelete= (id, names)=>{

  dispatch(deleteUser(id))
  console.log(`${names} Deleted Successfully`)
  

}
   
  return (
    <div>
      {users.map((user)=>(
       
        <tr key={user.id} className='userclass'>
               <td>{user.id}</td>
          <td>{user.firstname}</td>
        
          <td>{user.email}</td> 
    
          <button > <Link to={`/update/${user.id}`} style={{color:'white'}}>Edit </Link></button>
          <button onClick={()=>handleDelete(user.id, user.firstname)}> Delete</button>
        </tr>
      ))}


    </div>
  )
}
