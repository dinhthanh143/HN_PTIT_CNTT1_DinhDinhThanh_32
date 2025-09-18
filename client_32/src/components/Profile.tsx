import React from 'react'
import { useSelector } from 'react-redux'
import type { RootType } from '../store'
export const Profile = () => {
    const {Profile} = useSelector((state:RootType) => state)    
  return (
    <div>
        <h4>Thong tin ca nhan</h4>
        <p>ID: {Profile.id}</p>
        <p>Ho va ten: {Profile.fullName}</p>
        <p>Gioi tinh: {Profile.gender}</p>
        <p>Ngay sinh: {Profile.birthDate}</p>
        <p>Dia chi: {Profile.address}</p>
    </div>
  )
}
