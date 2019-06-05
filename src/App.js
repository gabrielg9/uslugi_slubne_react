import React, { Component } from 'react';
import Button from 'antd/lib/button';
//import login from './login';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { AppRegistry, View, Image } from 'react-native';

//import carRead from './components/carRead';
import Menu from './components/Menu';

import logo from './logo.svg';
import car_image from './car_image.jpg';
import './App.css';
import openFile from "./components/files/openFile";

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

                                <li className="navbar-item">
                                    <Link to="requirement" className="nav-link">Requirement</Link>
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
                    <Route path="/requirement" exact component={openFile} />


                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={car_image} className={"App-image"}  alt="fireSpot" />
                </div>
            </Router>


        );
    }
}

export default App;
