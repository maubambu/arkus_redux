import React, {Component} from 'react';

import {connect} from 'react-redux';

class Counter extends Component{

    handleClick = ()=>{
        this.props.dispatch({type: "ACTION_HOLA"})
    }

    render(){
        return (
            <button onClick={this.handleClick}>dispatch action</button>
        )
    }
}

export default connect()(Counter);