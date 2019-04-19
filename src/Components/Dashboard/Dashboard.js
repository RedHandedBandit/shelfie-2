import React, {Component} from 'react'
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        let allProducts = this.props.inventory.map((el, i) => {
            return (
                <Product key={i} name={el.product_name} price={el.product_price} image={el.product_image} />
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