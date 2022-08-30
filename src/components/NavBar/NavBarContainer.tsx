import React from 'react';
import NavBar from './NavBar';
import s from './NavBarContainer.module.css';
import { useSelector } from 'react-redux';


const NavBarContainer: React.FC = () => {

    const navElems = useSelector((state: any) => state.navBar.navBarElems)

    return (
        <div className={s.wrap}>
            <NavBar navElems={navElems} />
        </div>
    )
}

export default NavBarContainer;