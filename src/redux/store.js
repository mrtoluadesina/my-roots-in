import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';

const middleware = [thunkMiddleware];

const composeEnhancers = compose(
  applyMiddleware(...middleware)
)

const store = createStore(rootReducer, composeEnhancers);

export default store;