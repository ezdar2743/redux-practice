import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../store';
import List from './list';

const Home = ({addList,toDos}) => {
    const [text,setText]= useState("")
    const onChange= (e)=>{
        setText(e.target.value)
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        addList(text)
        setText('')
    }

 
    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="list">Todo</label>
                <input
                    type="text"
                    name="list"
                    value={text}
                    onChange={onChange}
                ></input>
                <button>add</button>
            </form>
            <ul>{toDos.map((todo)=>(
                <List {...todo} key={todo.id}/>
            ))}</ul>
        </>
    );
};
function mapStateToProps(state,ownProps){
    return {toDos : state}
}
function mapDispatchToProps(dispatch,ownProps){
    return{
        addList: (text)=> {
            dispatch(addList(text))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Home);