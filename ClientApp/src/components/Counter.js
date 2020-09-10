import React, { Component } from 'react';
import {connect} from "react-redux";
export class Counter extends Component {
  

  render() {
    return (
      <div>
        Counter:{this.props.counter}
        <br/><br/>
       

        <button onClick={this.props.increase}>+</button><span></span>
        <button onClick={this.props.decrease}>-</button>

      </div>
    );
  }
}

const maping=(state)=>{
  return{
    counter:state.counter
  }
};

const dispatching =(dispatch)=>
{
  return{
    increase :() => dispatch({type:'Incrase'}),
    decrease :() => dispatch({type:'decrease'}),
    
  }
}

export default connect (maping,dispatching)(Counter);
