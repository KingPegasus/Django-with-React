import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
  productListReducers,
  productDetailsReducers,
} from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
});

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
/* eslint-enable */
export default store;
