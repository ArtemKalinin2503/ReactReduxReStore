//Этап третий описиваем логику actions
import {ADD_TICKET_STARTED, ADD_TICKET_SUCCESS, ADD_TICKET_FAILURE} from '../actions/actionsType'

//Основной state для данного reducer
const initialState = {
    tickets: [],
    loading: false,
    error: null
}

//Reducer - для tickets
export default function ticketReducer(state = initialState, action) { //Reducer - принимает state и actions
    switch (action.type) {
        case ADD_TICKET_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tickets: [...state.tickets, action.payload]
            };
        case ADD_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state
    }
}