import React from 'react'
import s from './Card.module.css'

type CardProps = {
    children: string;
    desc: string
}

const Card: React.FC<CardProps> = ({ children, desc }) => {
    return (
        <div className={s.wrap}>
            <div>
                <p>{desc}</p>
                <p>{children}</p>
            </div>
        </div>
    )
}
export default Card

