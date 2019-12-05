import {combineReducers} from 'redux';
import Login from '../views/Login/redux/reducer';
import Register from '../views/Signup/redux/reducer';

const rootReducer = combineReducers({
  Login,
  Register
})

export default rootReducer;