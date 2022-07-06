import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

    const navBarElement = props.navElems.map((el) => {
        return <NavLink className={s.item} key={el.id} to={el.path} >
            <img className={s.image} src={el.icon} alt="icon" />
            {el.name}
        </NavLink>
    })

    return (
        <nav>
            {navBarElement}
        </nav>
    )
}

export default NavBar;