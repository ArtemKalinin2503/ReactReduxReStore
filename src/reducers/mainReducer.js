import {combineReducers} from "redux";
import ticketReducer from './ticketReducer'

//Основной Reducer - это основной reducer - который принимает остальные reducer
export default combineReducers({
    ticketReducer
})




