import React from 'react'
import s from './Task.module.css'
import { NavLink } from 'react-router-dom';


const Task = ({ children, path, image }) => {

    return (
        <div className={s.wrap}>
            {
                path
                    ?
                    <NavLink to={path}>
                        <img src={image} alt="image" />
                        <p className={s.text}>{children}</p>
                    </NavLink>
                    :
                    <>
                        <img src={image} alt="image" />
                        <p className={s.text}>{children}</p>
                    </>
            }
        </div>
    )
}
export default Task