import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import HomeScreen from './Components/Home'
import UserScreen from './Components/Users'
import RolsScreen from './Components/Rols'
import ProductsScreen from './Components/Products'

import logo from './asset/Captura.PNG'

export default function App() {
  return (
    <Router>
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src={logo} width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <NavLink to="/">Inicio</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/products">Productos</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/rols">Roles</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/users">Usuarios</NavLink>
            </div>
          </div>
        </div>
        </nav>
        <Switch>
          <Route path="/users">
            <UserScreen />
          </Route>
          <Route path="/rols">
            <RolsScreen />
          </Route>
          <Route path="/products">
            <ProductsScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>

    </Router>
  );
}
