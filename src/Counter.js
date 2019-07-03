import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from "mobx-react"

@observer class Counter extends Component {
    render(){
        return(
            <div>
                counter: {this.props.store.counter} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
        )
    }

    handleInc = () => {
        this.props.store.increment()
    }

    handleDec = () => {
        this.props.store.decrement();
    }
}


export default Counter;