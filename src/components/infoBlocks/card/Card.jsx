import React from 'react'
import s from './Card.module.css'


const Card = ({ children }) => {
    return (
        <div className={s.wrap}>
            {children}
        </div>
    )
}
export default Card

