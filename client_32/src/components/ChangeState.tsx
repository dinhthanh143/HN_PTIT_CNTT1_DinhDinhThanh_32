import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootType } from '../store'
export const ChangeState = () => {
    const {changeState} = useSelector((state: RootType)=>state)
    const dispatch = useDispatch()
    const handleChange = ()=>{
        dispatch({type: "CHANGE"})
    }
  return (
    <div>
        <h3>{changeState}</h3>
        <button onClick={handleChange}>Change State</button>
    </div>
  )
}
