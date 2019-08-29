import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CountAgeins, DecrementAgeds} from '../../actions'

class Agereduxindex extends Component {
  
    render() {
        // บวกอายุ
        const increteAge = () => {
                return (
                    this.props.dispatch(CountAgeins())
                )
        }

        // ลบอายุ
        const decrement = () => {
            return (
                this.props.dispatch(DecrementAgeds())
            )
        }
        return (
            <div>
                <h3>อายุของคุณ : {this.props.age} ปี</h3>
                <button onClick={increteAge}>+ คลิกบวกอายุ</button>
                <button onClick={decrement}>- คลิกลบอายุ</button>
            </div>
        )
    }
}

function mapStateToProps(state){
        return {
            age:state.count
        }
}

export default connect(mapStateToProps)(Agereduxindex)