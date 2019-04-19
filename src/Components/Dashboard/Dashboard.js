import React, {Component} from 'react'
import Product from '../Product/Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            editPrice: false
        }
    }

    removeProduct = (id) => {
        axios.delete(`/api/removeProduct/${id}`).then( res => {
            this.props.newInventory(res.data)
        })
    }

    handleEditPriceClick = () => {
        this.setState({
            editPrice: !this.state.editPrice
        })
    }

    render(){
        let allProducts = this.props.inventory.map((el, i) => {
            return (
                <Product key={i} handleEditPriceClick={this.handleEditPriceClick} editPrice={this.state.editPrice} submitNewPrice={this.props.submitNewPrice} id={el.product_id} name={el.product_name} price={el.product_price} image={el.product_image} removeProduct={this.removeProduct} />
            )
        })
        return (
            <div>
                Dashboard
                {allProducts}
            </div>
        )
    }
}

export default Dashboard