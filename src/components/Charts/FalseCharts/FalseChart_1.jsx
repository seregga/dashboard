import React from 'react'
import s from './FalseChart_1.module.css'

const FalseChart_1 = ({ children, ...props }) => {
    return (
        <div className={s.wrap}>
            <div className={s.image}>
                <img src={props.image} alt="график" />
            </div>
            {children}
        </div>
    )
}
export default FalseChart_1
