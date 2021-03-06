//Этап третий описиваем логику actions
import {
    ADD_TICKET_STARTED,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAILURE,
    ADD_TICKET_CART,
    ADD_TICKET_SELECT,
    REMOVE_TICKET_CART
} from '../actions/actionsType'

//Основной state для данного reducer
const initialState = {
    tickets: [], //все данные по билетам
    loading: false,
    error: null,
    cartItems: [], //Билеты в корзине
    orderTotal: 0, //Общая цена билетов в корзине
    selectTicket: {} //Выбраный билет
}

//Функция которая вызывается в action
const updateOrder = (state, payload, quntity) => {
    let ticketSelect = payload; //Получим выбранный билет
    //Создаим новый объект и запишем в него данные о выбраном билете
    let newItem = {
     id: ticketSelect.id,
     departure: ticketSelect.departure,
     destination: ticketSelect.destination,
     count: 0,
     price: ticketSelect.price
    }
    //Фильтрация данных, чтобы небыло повторяющиехся элементов массива (каждый билет с уникальным id)
    let newArrItems = [...state.cartItems, newItem];
    let used = {};
    let filtered = newArrItems.filter(function(obj) { //Это уже новый массив с элементами которые имеют уникальный id, а значит каждый добавленый билет в карзину уникальный
     return obj.id in used ? 0:(used[obj.id]=1);
    });
    //Подсчет количества выбраных билетов + цена
    for (let i = 0; i < filtered.length; i++) {
     if (filtered[i].id === ticketSelect.id) { //Проверка если в массиве с выбранными билетами есть id с билетом по которому кликнули купить
         let quntityTicket = filtered[i].count + quntity; //Тогда увеличем количество выбраных билетов
         filtered[i].count = quntityTicket
         // console.log(filtered[i].price * quntityTicket)
         let totalPrice = filtered[i].price * quntityTicket; //Подсчитаем цену выбраных одинаковых билетов
         filtered[i].price = totalPrice;
     }
    }

    return {
     ...state,
     cartItems: filtered
    }
}

//Reducer - для tickets
export default function ticketReducer(state = initialState, action) { //Reducer - принимает state и actions
    switch (action.type) {
        //Начало загрузки данных
        case ADD_TICKET_STARTED:
            return {
                ...state,
                loading: true
            };
        //Получение данных
        case ADD_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tickets: [...state.tickets, action.payload]
            };
        //При ошибке в загрузке данных
        case ADD_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        //Выбранные билеты в карзине
        case ADD_TICKET_CART:
            return updateOrder(state, action.payload, 1)
        //Выбранный билет
        case ADD_TICKET_SELECT:
            return {
                ...state,
                selectTicket: action.payload
            }
        //Удалить из карзины билет
        case REMOVE_TICKET_CART:
            return updateOrder(state, action.payload, -1)
        default:
            return state
    }
}