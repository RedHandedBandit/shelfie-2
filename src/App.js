import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

    componentDidMount() {
      axios.get('/api/inventory').then( res => {
        console.log(res.data)
        this.setState({
          inventory: res.data
        })
      }).catch(error => console.log('frontend getAll didnt work', error))
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
