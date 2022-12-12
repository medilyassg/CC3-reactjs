import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { gettodos } from '../../redux/TodoSlice';
import { IoCheckmarkDoneSharp  } from 'react-icons/io5';
import {MdOutlineRemoveDone} from 'react-icons/md'
import style from './ListTodo.module.css'

const ListTodo = () => {
    const {id}=useParams()
    const data=useSelector(state=>state.todos.data.todos)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(gettodos())
    },[dispatch])
    return (
        <div>
            <h1>Liste Des Taches</h1>
            <div className={style.taches}>
            {
                data && data.filter(item=>item.userId==id).map(item=><div>
                    {item.completed ? <IoCheckmarkDoneSharp style={{ color:'green' }}/> : <MdOutlineRemoveDone style={{ color:'red' }} />}
                    {item.todo}
                    </div>)
                    
            }
        </div>
        </div>
        
    );
}

export default ListTodo;
