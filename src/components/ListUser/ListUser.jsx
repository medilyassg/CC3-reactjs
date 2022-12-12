import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getusers } from '../../redux/UserSlice'
import User from '../User/User'
import style from './ListUser.module.css'
export default function ListUser() {
    const data=useSelector(state=>state.users.data.users)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getusers())
    },[dispatch])
  return (
    <div className={style.users}>
        {
           data && data.map(item=><User data={item} />)
        }
    </div>
  )
}
