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
    this.componentDidMount = this.componentDidMount.bind(this)
  }

    componentDidMount() {
      axios.get('/api/inventory').then( res => {
        // console.log(res.data)
        this.setState({
          inventory: res.data
        })
        // console.log(this.state.inventory)
      }).catch(error => console.log('frontend getAll didnt work', error))
    }

    submitNewPrice = (price, id) => {
      let newPrice = {
        price: price
      }
      console.log('updatePrice baby', newPrice)
      axios.put(`/api/updateProduct/${id}`, newPrice).then( res => {
        console.log('this is res.data in app',res.data)
        console.log('this is axios', newPrice)
        this.setState({inventory: res.data})
      })
      this.componentDidMount()
    }
  
  render() {
    return (
      <div className="App">
        <Dashboard submitNewPrice={this.submitNewPrice} newInventory={this.componentDidMount} inventory={this.state.inventory} />
        <Form newInventory={this.componentDidMount} />
        <Header />
      </div>
    );
  }
}

export default App;
