import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            image: ''
        }
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
                <button>
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