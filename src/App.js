import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addTickets} from './actions/index';

class App extends Component {

    componentDidMount() {
        this.props.onAddTickets(); //Вызов action который получит данные
    }

    render() {
        if (this.props.propsTickets.length) {
            console.log(this.props.propsTickets);
        }

        return (
            <div className="App">
                <p>{}</p>
            </div>
        );
    }

}

//Здеь получаем state из reducer (который передан в store)
function mapStateToProps(state) {
    return {
        propsTickets: state.tickets
    }
}

//Здесь получаем action
function mapDispatchToProps(dispatch) {
    return {
        onAddTickets: () => dispatch(addTickets()) //Получили action addBooks и записали его в props onAddBooks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
