import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import HearderShop from "./components/HearderShop/HearderShop";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HearderShop/>
                <Switch>
                    <Route
                        path="/"
                        component={HomePage}
                        exact
                    />
                    <Route
                        path="/cart"
                        component={CartPage}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
