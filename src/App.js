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
import HelpMeForm from "./pages/Helpmeform";
import HelpOthersList from "./pages/Helpotherslist";
import HelpOthersDetail from "./pages/Helpothersdetail";
import EditUser from "./pages/EditUser";
import SenderForm from "./pages/Senderform";
import HelpMeFormEdit from "./pages/Helpmeformedit";
import Userprofile from "./pages/Userprofile";
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
        
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <AnonRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/userindex" component={UserIndex} />
            <PrivateRoute exact path="/userindex/edit" component={EditUser} />
            <PrivateRoute exact path="/userindex/helpmeform" component={HelpMeForm} />
            <PrivateRoute exact path="/userindex/helpmeform/edit/:requestId" component={HelpMeFormEdit} />
            <PrivateRoute exact path="/helpotherslist" component={HelpOthersList} />
            <PrivateRoute exact path="/helpothersdetail/senderform/:requestId" component={SenderForm} />
            <PrivateRoute exact path="/helpothersdetail/:requestId" component={HelpOthersDetail} />
            <PrivateRoute exact path="/userindex/profile" component={Userprofile} />
            </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
