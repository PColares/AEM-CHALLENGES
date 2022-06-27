import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import StoreProvider from '../Store/Provider';
import RoutesPrivate from '../Routes/Private/Private';
import HomePage from '../HomePage/index';
import LoginPage from '../LoginPage/index';

const PagesRoute = () => (
    <Router>
        <StoreProvider>
            <Switch>
                <Route title="Compass - Login" path="/content/reactapp/us/en/login.html" component={LoginPage} />
                <RoutesPrivate title="Compass - Home" path="/content/reactapp/us/en/homepage.html" component={HomePage} />
            </Switch>
        </StoreProvider>
    </Router>
)


export default PagesRoute;