import React from 'react'
import s from './FalseInfoCard_1.module.css'
import { NavLink } from 'react-router-dom';


const FalseInfoCard_1 = ({ children, path, image }) => {

    return (
        <div className={s.wrap}>
            {
                path
                    ?
                    <NavLink to={path}>
                        <img src="" alt="" />
                        <p className={s.inside}>{children}</p>
                    </NavLink>
                    :
                    <p className={s.inside}>{children}</p>
            }
        </div>
    )
}
export default FalseInfoCard_1
