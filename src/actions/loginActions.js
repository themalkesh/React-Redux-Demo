import { USER_LOING } from './types';
import { USER_LOGOUT } from './types';
import { API_URL } from '../Config'
import  { notify } from 'react-notify-toast';

 

export const doLogin = postData => dispatch => {
  
  var loginData = {
    'login_type' : 'simple',
    'user_type' : 'user',
    'email' : 'ashvini.citrusbug@gmail.com',
    'password' : '123456',
  }

  fetch(API_URL + 'user/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(res => res.json())
    .then(user => {
      //console.log(user);
      if(user.status === true){
        user.result.userlogin = 'true';
        sessionStorage.setItem('userlogin', 'true');
        dispatch({
          type: USER_LOING,
          payload: user.result
        })
        notify.show('Login Success..!!');
        //do success login msg and redirect
      }else{
        //do error msg
        notify.show('Login Error..!!');
      }
    });
     
};

export const doLogout = postData => dispatch => {
    
    postData.userlogin = 'false';
    sessionStorage.setItem('userlogin', 'false');

    dispatch({
      type: USER_LOGOUT,
      payload: postData
    });

    console.log(postData);

    notify.show('Logout Success..!!');
    
};

