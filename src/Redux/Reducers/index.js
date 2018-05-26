import * as Type from './ActionTypes';

const initiatState={
  loginuser:false,
  username:'',
  password:'',
}


export default (state = initiatState, action) =>{

  switch(action.type){
    case Type.LOGIN_USER:
        return {...state}
        
    default :
      return {...state};

  }

}
