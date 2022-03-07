import React from 'react';
import {connect} from 'react-redux';
import {add,minus} from './store';

const App = ({count,increment,decrement}) => {
  return (
    <>
     <h1>count={count}</h1> 
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>

    </>
  );
};

function mapStateToProps(state,ownProps) {
  return {count : state}
  
}
function mapDispatchToProps(dispatch,ownProps) {
    return{
      increment:()=>{
        dispatch(add())
      },
      decrement:()=>{
        dispatch(minus())
      }
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (App);