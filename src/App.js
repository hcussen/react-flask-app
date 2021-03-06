import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";
import "./GlobalStyles.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/home";
import DashboardPage from "./pages/DashboardPage";
import Page2 from "./pages/Page2";

const App = () => {
  return (
    <div id="app">
      <Auth0Provider
        domain="dev-rfxe-cap.us.auth0.com"
        clientId="Bp15bvDnRF7kmKhFDyi1pz9WofQCl2j1"
        redirectUri={`${window.location.origin}/dashboard`}
      >
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <PrivateRoute path="/dashboard*" component={DashboardPage} />
            <Route path="/page-2" exact component={Page2} />
          </Switch>
        </Router>
      </Auth0Provider>
    </div>
  );
};

export default App;
