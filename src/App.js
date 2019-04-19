import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {
          name: 'boots', 
          price: 87.00, 
          image:'boots for you'
        },
        {
          name: 'dark seas T-shirt',
          price: 25,
          image: 't shirt'
        },
        {
          name: 'joggers',
          price: 45,
          image: 'hello'
        }
      ]
    }
  }

  
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
