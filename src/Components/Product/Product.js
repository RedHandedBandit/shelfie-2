import React, {Component} from 'react'

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
                <div> {this.props.image} </div>
            </div>
        )
    }
}

export default Product