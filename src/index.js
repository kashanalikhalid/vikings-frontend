
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from'react-redux'
import store from './store'
import Login from './views/Login'
import Receipt from "./views/Receipt";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
    <Provider store={store}>

  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login" component={Login} />
      <Route path="/receipt" component={Receipt} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
