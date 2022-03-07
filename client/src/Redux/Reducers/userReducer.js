import { USERS } from "../types";

  const initialstate= {
      users:[],
      error:'',
      loading:false
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

              default: return state;
      }
  }

  export default reducer