import React from "react";
import auth from "./auth-service";
//importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();

//HOC para crear Consumer
const withAuth = (WrappedComponent) => {

    return class extends React.Component {
        render() {
            
            return (
                <Consumer>{/* El componente <Consumer> provee un callback que recibe el "value" con el objeto Providers */}  
                { 
                  ({login, signup, user, logout, isLoggedin}) => {
                  return (
                    <WrappedComponent 
                      login={login} 
                      signup={signup} 
                      user={user}
                      logout={logout}
                      isLoggedin={isLoggedin}
                      {...this.props} />
                  );
                }}</Consumer>
            )
            //Ahora necesitamos editar todos los componentes que necesitan usar las funciones del Provider, 
            //y hacerlos consumers, para que tengan acceso a él
            //pages/Signup.js , pages/Login.js , pages/Private.js y components/Navbar.js
        }
    }
};

//Provider
class AuthProvider extends React.Component {
  state = { 
    isLoggedin: false,
    user: null,
    isLoading: true 
  };

  componentDidMount() {
    auth
      .me()
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

  signup = (user) => {
      const { email, password } = user;

      auth.signup({ email, password })
        .then((user) => this.setState({ isLoggedin: true, user}) )
        .catch(({response}) => this.setState({ message: response.data.statusMessage}));
  };

  login = (user) => {
      const { email, password } = user;

      auth.login({ email, password })
        .then((user) => this.setState({ isLoggedin: true, user }))
        .catch((err) => console.log(err));
  };

  logout = () => {
      auth.logout()
        .then(() => this.setState({ isLoggedin: false, user: null }))
        .catch((err) => console.log(err));
  };

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider value={{ isLoggedin, user, login, logout, signup }}>
        {this.props.children}
      </Provider>
    ); //<Provider> "value={}" datos que estarán disponibles para todos
    //los componentes <Consumers>
  }
}

export { Consumer, withAuth }; //recuerda exportar!!!
export default AuthProvider;
