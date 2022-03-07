import { USERS,ADD_USERS,DELETE_USERS,UPDATE_USERS} from "../types";

  const initialstate= {
      users:[],
      error:'',
      message:'',
      addMessage:'',
      addError:'',
      loading:false,
      updateMessage:"",
      deleteMessage:"",
      deleteError:'',
      updateError:''
  }

  const reducer=(state= initialstate, action)=>{
      switch(action.type){
           case USERS.REQUEST:
              return{
                  ...state,
                  users:[] ,loading:true, error:'',
              }

              case USERS.SUCCESS:
                return{
                    ...state,
                    users:action.user ,loading:false, error:'',
                }

              case USERS.FAIL:
                return{
                    ...state,
                    users:[] ,loading:false, error:action.error,
                }



                case ADD_USERS.REQUEST:
              return{
                  ...state,
                  addMessage:'', addError:'',
              }

              case ADD_USERS.SUCCESS:
                return{
                    ...state,
                    addMessage:action.message, addError:''
                }

              case ADD_USERS.FAIL:
                return{
                    ...state,
                    addMessage:'', addError:action.error
                }


                
                case UPDATE_USERS.REQUEST:
                  return{
                      ...state,
                      updateMessage:'', updateError:'',
                  }
    
                  case UPDATE_USERS.SUCCESS:
                    return{
                        ...state,
                        updateMessage:action.message, updateError:''
                    }
    
                  case UPDATE_USERS.FAIL:
                    return{
                        ...state,
                        updateMessage:'', updateError:action.error
                    }


                case DELETE_USERS.REQUEST:
                  return{
                      ...state,
                      deleteMessage:'', deleteError:'',
                  }
    
                  case DELETE_USERS.SUCCESS:
                    return{
                        ...state,
                        deleteMessage:action.message, deleteError:''
                    }
    
                  case DELETE_USERS.FAIL:
                    return{
                        ...state,
                        deleteMessage:'', deleteError:action.error
                    }





              default: return state;
      }
  }

  export default reducer