import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import DashLayout from "layouts/DashLayout.jsx";
import Start from "views/Start.jsx";
import Login from "components/login/Login.jsx";
import GetBill from "components/GetBill.jsx";

import routesAdmin from "routes/adminRoutes.js";
import routesOperator from "routes/operatorRoutes.js";
import routesManager from "routes/managerRoutes.js";

import {ProtectedRoute, ProtectedLoginRoute} from "components/auth/ProtectedRoute.js";

const hist = createBrowserHistory();

function App() {
    return (
        <Router history={hist}>
            <Switch>
                <Route exact path="/" component={Start} />
                <ProtectedLoginRoute exact path="/login" component={Login} />
                <Route exact path="/getBill" component={GetBill} />

                <ProtectedRoute path="/admin" userType="admin" render={props => <DashLayout {...props} routes={routesAdmin} loggedInBtn={true} />} />
                <ProtectedRoute path="/operator" userType="operator"render={props => <DashLayout {...props} routes={routesOperator} loggedInBtn={true} />} />
                <ProtectedRoute path="/manager" userType="manager" render={props => <DashLayout {...props} routes={routesManager} loggedInBtn={true} />} />

                <Redirect exact to="/" />
            </Switch>
        </Router>
    )
}

export default App;