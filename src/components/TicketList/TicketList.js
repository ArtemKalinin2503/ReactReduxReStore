import React, {Component} from "react";
import {addTickets} from "../../actions";
import {connect} from "react-redux";
import TicketItem from "../TicketItem/TicketItem";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/Error-indicator";

//Компонент с выводом списка билетов
class TicketList extends Component {

    componentDidMount() {
        this.props.onAddTickets(); //Вызов action который получит данные
    }

    //Функция которая проверит если данные пришли то вывести JSX
    renderTicketsItem() {

        //Если произошла ошибка вызываем компонет ErrorIndicator
        if(this.props.propsError) {
            return <ErrorIndicator/>
        }

        if (this.props.propsTickets.length) {
            return (
                <div>
                    {this.props.propsTickets[0].data.map((item, index) => {
                        return (
                            <div className="ticket__item">
                                <TicketItem
                                    key={index}
                                    id={index}
                                    price={item.value}
                                    departure={item.origin}
                                    destination={item.destination}
                                    departData={item.depart_date}
                                    returnData={item.return_date}
                                    gate={item.gate}
                                    onAddedToCart={() => this.props.onAddedToCart({index})} //Передадим метод как props, чтобы получить id билета
                                />
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return <Spinner/> //Если данных нет покажим компонент Preloader
        }
    }

    render() {
        return (
            <div className="ticketList__wrapper">
                {this.renderTicketsItem()}
            </div>
        )
    }
}

//Здеь получаем state из reducer (который передан в store)
function mapStateToProps(state) {
    return {
        propsTickets: state.ticketReducer.tickets,
        propsError: state.ticketReducer.error
    }
}

//Здесь получаем action
function mapDispatchToProps(dispatch) {
    return {
        onAddTickets: () => dispatch(addTickets()) //Получили action addTickets и записали его в props onAddTickets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)