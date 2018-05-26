import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(props){
      super(props);
      //defining the state to the component
      this.state = {
        username:'',
        password:'',
      };
    }


    componentWillMount(){
    }

    componentDidMount(){}

    componentWillReceiveProps(){}

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleSingupButton = (e) =>{
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="parent-login">
            <div className="username" >
                  <label>Username : </label>
                  <input type="text" value={this.state.username}  name="username" onChange={this.handleInputChange}  />
            </div>
            <div className="password">
                  <label>Password :  </label>
                  <input type="password" name="password"  value={this.state.password} onChange={this.handleInputChange}/>
            </div>
            <div className="singup">
                <input type="button" value="signup" onClick={this.handleSingupButton}/>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
