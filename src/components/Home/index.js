import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Home extends Component {
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
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Home</h1>
        </header>

      </div>
    );
  }
}

export default Home;
