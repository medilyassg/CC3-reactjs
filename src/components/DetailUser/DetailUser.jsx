import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getusers } from '../../redux/UserSlice'
import style from './DetailUser.module.css'
export default function () {
    const {id}=useParams()
    const data=useSelector(state=>state.users.data.users)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getusers())
    },[dispatch])
  return (
    <div className={style.content}>
        {
                data && data.filter(item=>item.id==id).map(item=>{
                   return  <div>
                        <img src={item.image} alt="" />
                        <div className={style.detail}>
                            <p>FirstName : <span>{item.firstName}</span></p>
                            <p>LasteeName : <span>{item.lastName}</span></p>
                            <p>age : <span>{item.age}</span></p>
                            <p>gender : <span>{item.gender}</span></p>
                            <p>email : <span>{item.email}</span></p>
                            <p>weight : <span>{item.weight}</span></p>
                            <p>height: <span>{item.height}</span></p>
                            <p>birthDate : <span>{item.birthDate}</span></p>
                            <p>bloodGroup : <span>{item.bloodGroup}</span></p> 
                            <p>eyeColor : <span>{item.eyeColor}</span></p>
                        </div>
                        

                    </div>
                }
                )
        }
        <h1>

        </h1>
    </div>
  )
}
