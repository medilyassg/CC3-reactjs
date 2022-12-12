import React from 'react'
import { useNavigate } from 'react-router'
import style from './User.module.css'
export default function (props) {
    const navigate=useNavigate()

  return (
    <div className={style.user}>
        <img src={props.data.image} alt="" />
        <p>{props.data.firstName} {props.data.lastName}</p>
        <button onClick={()=>navigate(`details/${props.data.id}`)}>Detail User</button>
        <button onClick={()=>navigate(`taches/${props.data.id}`)}>Liste des taches</button>
    </div>
  )
}
