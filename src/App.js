import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useState } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { PaginaPrincipal } from "./pages/PaginaFeed/PaginaFeed";
import { PaginaPostar } from "./pages/PaginaPostar/PaginaPostar";
import { Login } from "./pages/Login/Login";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar";
import history from "./history";
export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({ token: null, username: null });

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <Router history={history}>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          {auth.token == null ?
            <Redirect to="/login" /> :
            <PaginaPrincipal />
          }
        </Route>
        <Route exact path="/postar">
          <PaginaPostar></PaginaPostar>
        </Route>
        <Route exact path="/cadastrar">
          <Cadastrar></Cadastrar>
        </Route>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
