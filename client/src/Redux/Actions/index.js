import{ USERS,ADD_USERS,UPDATE_USERS,DELETE_USERS} from '../types'
import axios from "axios"

export const getUsers = () => async dispatch => {
    
    dispatch({
        type: USERS.REQUEST
    })

    try {
        const { data } = await axios.get("http://localhost:4005/users")
       
       dispatch(
        {
            type:USERS.SUCCESS,
            user:data
            }
       )
        
    } catch (error) {

        dispatch(
            {
              type:USERS.FAIL,
               error:"Failed an Error Occured"
             }
            
        )
        
    }
}

export const  addUser = user => async dispatch => {

    dispatch({
        type: ADD_USERS.REQUEST
    })

    try {
       await axios.post("http://localhost:4005/users", user)
       
       dispatch(
        {
            type:ADD_USERS.SUCCESS,
            message:"User Registered Successfully"
            }
       )
        
    }
    catch(error){
        dispatch({
            type:ADD_USERS.SUCCESS,
            error:error.message
        }
        )
    }

}




export const  updateUser = (id, user) => async dispatch => {

    dispatch({
        type: UPDATE_USERS.REQUEST
    })

    try {
       await axios.put(`http://localhost:4005/users/${id}`, user)
       
       dispatch(
        {
            type:UPDATE_USERS.SUCCESS,
            message:"User Updated Successfully"
            }
       )
        
    }
    catch(error){
        dispatch({
            type:UPDATE_USERS.FAIL,
            error:error
        }
        )
    }

}



export const  deleteUser = (id) => async dispatch => {

    dispatch({
        type: DELETE_USERS.REQUEST
    })

    try {
       await axios.delete(`http://localhost:4005/users/${id}`)       
       dispatch(
        {
            type:DELETE_USERS.SUCCESS,
            message:"User deleted Successfully"
            }
       )
        
    }
    catch(error){
        dispatch({
            type:DELETE_USERS.FAIL,
            error:error
        }
        )
    }
getUsers()
}
