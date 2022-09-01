import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

type NavBarProps = {
    navElems: any;
}

const NavBar: React.FC<NavBarProps> = ({ navElems }) => {

    const navBarElement = navElems.map((el: any) => {
        return <NavLink className={s.item} key={el.id} to={el.path}>
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