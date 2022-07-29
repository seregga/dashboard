import React from 'react'
import s from './Card.module.css'

type CardProps = {
    children: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className={s.wrap}>
            {children}
        </div>
    )
}
export default Card

