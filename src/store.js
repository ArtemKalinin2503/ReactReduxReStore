import {createStore, applyMiddleware} from "redux";
import ticketReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension"; //npm install redux-devtools-extension
import thunk from 'redux-thunk'; //npm install redux-thunk

const store = createStore(ticketReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;