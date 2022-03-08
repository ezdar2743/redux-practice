import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteList } from '../store';
import styles from './list.module.css';

const List = ({remove,text,id}) => {
    return (
        <>
            <div className={styles.container}>
               <Link to={`/${id}`}><li>{text}</li></Link>
                <button onClick={remove}>del</button>
            </div>
        </>
    );
};
function mapDispatchToProps(dispatch,ownProps){
    
    return {
        remove:()=>dispatch(deleteList(ownProps.id))
        
    }

}
export default connect(null,mapDispatchToProps) (List);