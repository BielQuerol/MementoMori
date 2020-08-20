import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
//`Context.Provider`
//El valor dentro de `<Provider  value={/* some value */}/>` estará disponible para todos los components `<Consumer>`
//Importamos `AuthProvider` en `App.js` y envolvemos todo el component (a fin de que comparta el contexto)
import AuthProvider from "./lib/AuthProvider";
//Agregamos route para renderizar los componentes Login y Signup en App.js
class App extends Component {
  render() {
    return (
      <AuthProvider>
        {" "}
        {
          //envolvemos los componentes
          //con AuthProvider
        }
        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
