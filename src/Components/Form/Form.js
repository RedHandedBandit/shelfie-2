import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: 0,
            image: '',
            newList: this.props.inventory
        }
    }

    addProduct = () => {
        const inventoryObj = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.image
        }
        axios.post('/api/product', inventoryObj).then( res => {
            console.log('axios', inventoryObj)
            console.log(res)
        })
        .catch(error => console.log('this didnt work',error))
        
        this.props.newInventory()
        this.setState({name: '', price: 0, image: ''})
    }

    handleInputChange(prop, val) {
        console.log(this.state)
        this.setState({
            [prop]: val
        })
    }

    resetState(){
        this.setState({
            name: '',
            price: 0,
            image: ''
        })
    }

    render(){
        
        return (
            <div>
                <input 
                    placeholder="product name" 
                    onChange={(e) => this.handleInputChange('name', e.target.value)}
                    type='text'
                    value={this.state.name} />
                <input
                    placeholder="price"
                    onChange={(e) => this.handleInputChange('price', e.target.value)}
                    type='number'
                    value={this.state.price} />
                <input
                    placeholder="image url"
                    onChange={(e) => this.handleInputChange('image', e.target.value)}
                    type='text'
                    value={this.state.image} />
                <button onClick={() => this.addProduct()}>
                    add to inventory
                </button>
                <button onClick={() => this.resetState()} > 
                    cancel
                </button>
            </div>
        )
    }
}

export default Form