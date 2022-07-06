import React from 'react'
import s from './PieChart.module.css'
import { NavLink } from 'react-router-dom';


const PieChart = ({ children, path, image }) => {

    return (
        <div className={s.wrap}>
            {
                path
                    ?
                    <NavLink to={path}>
                        <img className={s.pieImage} src={image} alt="image" />
                        <p className={s.text}>{children}</p>
                    </NavLink>
                    :
                    <>
                        <img className={s.pieImage} src={image} alt="image" />
                        <p className={s.text}>{children}</p>
                    </>
            }
        </div>
    )
}
export default PieChart