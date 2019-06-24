import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from "mobx-react"

class Counter extends Component {
    @observable count = 0;

    render(){
        return(
            <div>
                counter: {this.count} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> + </button>
            </div>
        )
    }

    handleInc = () => {

    }

    handleDec = () => {

    }
}

export default Counter;