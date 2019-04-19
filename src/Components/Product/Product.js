import React, {Component} from 'react'
import './Product.css'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            price: 0
        }
    }

    priceChange = (val) => {
        console.log(this.state.price)
        this.setState({ price: val})
    }


    render(){
        return (
            <div>
                <h4> {this.props.name} </h4>
                <div> {this.props.price} </div>
                <img className="product_img" src={this.props.image} alt="products" />
                <button onClick={() => this.props.removeProduct(this.props.id)} > delete </button>
                {!this.props.editPrice ?
                    <button onClick={() => this.props.handleEditPriceClick()}> 
                       edit 
                    </button> :
                    <div>
                    <input
                        onChange={(e) => this.priceChange(e.target.value)}
                        type="number" />
                    <button 
                        onClick={() => this.props.submitNewPrice(+this.state.price, +this.props.id)} >
                        submit 
                    </button> 
                    </div>
                }
               
            </div>
        )
    }
}

export default Product