import {combineReducers} from 'redux';
import Login from '../views/Login/redux/reducer';
import Register from '../views/Signup/redux/reducer';
import Verify from '../views/Verify/redux/reducer';

const rootReducer = combineReducers({
  Login,
  Register,
  Verify
})

export default rootReducer;