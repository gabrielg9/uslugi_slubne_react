import React, { Component } from 'react';
import Button from 'antd/lib/button';
//import login from './login';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import carRead from './components/carRead';
import Menu from './components/Menu';

import logo from './logo.svg';
import './App.css';

/*class App extends Component {
  render() {
      const responseGoogle = (response) => {
              console.log(response);
          }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <Router>
                <h2> Welcome to a wedding salon </h2>

            </Router>

          <div className="App">
              <Button type="primary">Tutaj będzie inny przycisk</Button>
          </div>

            <GoogleLogin
                clientId="674230190306-j5ej1onnpfhst1p5k6a9v4l0l8h04bgc.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />


        </header>
      </div>
    );
  }
}*/

class App extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <img src={logo} width="80" height="30" className="App-logo" alt="logo" />

                        <Link to="/" className="navbar-brand">Wedding salon</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/menu" className="nav-link">Menu</Link>
                                </li>
                            </ul>
                        </div>
                        <GoogleLogin
                            clientId="674230190306-j5ej1onnpfhst1p5k6a9v4l0l8h04bgc.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />
                    </nav>
                    <br/>

                    <Route path="/menu" exact component={Menu} />

                </div>


            </Router>

        );
    }
}

export default App;
