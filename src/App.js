import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import UserIndex from "./pages/Userindex";
import HelpMeForm from "./pages/helpmeform";
import HelpOthersList from "./pages/helpotherslist";
import HelpOthersDetail from "./pages/helpothersdetail";
import EditUser from "./pages/EditUser";
import SenderForm from "./pages/Senderform";
import HelpMeFormEdit from "./pages/helpmeformedit";
//`Context.Provider`
//El valor dentro de `<Provider  value={/* some value */}/>` estará disponible para todos los components `<Consumer>`
//Importamos `AuthProvider` en `App.js` y envolvemos todo el component (a fin de que comparta el contexto)
import AuthProvider from "./lib/AuthProvider";
//Agregamos route para renderizar los componentes Login y Signup en App.js
class App extends Component {
  render() {
    return (
      <AuthProvider>
        {
          //envolvemos los componentes
          //con AuthProvider
        }
        <div className="container">
          <h1>Memento Mori</h1>
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/userindex" component={UserIndex} />
            <Route exact path="/userindex/edit" component={EditUser} />
            <Route exact path="/userindex/helpmeform" component={HelpMeForm} />
            <Route exact path="/userindex/helpmeform/edit" component={HelpMeFormEdit} />
            <Route exact path="/helpotherslist" component={HelpOthersList} />
            <Route exact path="/helpothersdetail/senderform" component={SenderForm} />
            <Route exact path="/helpothersdetail" component={HelpOthersDetail} />
            
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
