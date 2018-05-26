import * as Type from './ActionTypes';

export const loginUser =(username, password, loginObj)=>{
  return {
    type:Type.LOGIN_USER,
    username,
    password,
    loginObj
  }
}
