import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootType } from '../store'
export const Random = () => {
    const {random} = useSelector((state:RootType) => state)
    const dispatch = useDispatch()
    const handleRandom = ()=>{
      dispatch({type: "RANDOM", payload: Math.ceil(Math.random()*1000)})
    }
  return (
    <div style={{width:"20%"}}>
        <h3>Random numbers: {JSON.stringify(random)} </h3>
        <button onClick={handleRandom}>Generate Randomm Number</button>
    </div>
  )
}
