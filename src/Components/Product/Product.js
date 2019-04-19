import React, {Component} from 'react'
import './Product.css'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return (
            <div>
                <h4> {this.props.name} </h4>
                <div> {this.props.price} </div>
                <img className="product_img" src={this.props.image} alt="products" />
                <button onClick={() => this.props.removeProduct(this.props.id)} > delete </button>
            </div>
        )
    }
}

export default Product