//Этап второй описываем actions которые импортировлаи из actionsType
import {ADD_TICKET_STARTED, ADD_TICKET_SUCCESS, ADD_TICKET_FAILURE, ADD_TICKET_CART} from '../actions/actionsType'
import axios from 'axios';

//Здесь описываем каждый action который потом передаем в Reducer
const addTicketStarted = () => ({type: ADD_TICKET_STARTED})
const addTicketSuccess = (payload) => ({type: ADD_TICKET_SUCCESS, payload: payload})
const addTicketFailure = (error) => ({type: ADD_TICKET_FAILURE, payload: {error}})
const addTicketCart = (payload) => ({type: ADD_TICKET_CART, payload: payload})

//Thunk - который получает данные путем вызовов actions
export const addTickets = () => {
    return dispatch => {
        dispatch(addTicketStarted());
        axios
            .get(`prices/week-matrix?currency=rub&origin=LED&destination=HKT&show_to_affiliates=true&depart_date=2020-09-04&return_date=2020-09-18`, { //Важно чтобы CoRS не блакировал запрос (в package,json нужно передать url API параметр proxy)
                //Параметры запроса
                params: {
                    "token": "31e2554c30625b0c0fd88ef8cddf8a63"
                },
            })
            .then(res => {
                dispatch(addTicketSuccess(res.data));
            })
            .catch(err => {
                dispatch(addTicketFailure(err.message));
            });
    };
};

export {
    addTicketStarted,
    addTicketSuccess,
    addTicketFailure,
    addTicketCart
}

