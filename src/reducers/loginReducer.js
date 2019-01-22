import { USER_LOING } from '../actions/types';
import { USER_LOGOUT } from '../actions/types';
 

const initialState = {
  user: {
    'userlogin' : sessionStorage.getItem('userlogin')
  } 
};



export default function(state = initialState, action) {
   
  switch (action.type) {
    case USER_LOING:
      return {
        ...state,
        user: action.payload
      };
    case USER_LOGOUT:
    
      return {
        ...state,
        user: action.payload
      };   
    default:
      return state;
  }
}
