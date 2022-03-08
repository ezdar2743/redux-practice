import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({toDos}) => {
    const id = useParams().id;
    const toDo = toDos.find(toDo => toDo.id ===parseInt(id));
    console.log(toDo)
    return (
        <div> 
            <h1>name:{toDo?.text}</h1>
           <h1>id:{toDo?.id}</h1>
        </div>
    );
};


function mapStateToprops(state){
    return{toDos : state}
}
export default connect(mapStateToprops) (Detail);