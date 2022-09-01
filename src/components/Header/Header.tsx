import React from 'react';
import s from './Header.module.css';
import logo from './../../assets/icons/logo.png';

// import { hideNavBar, setNavBar } from '../../store/slices/navBarSlice';
// import { useDispatch, useSelector } from 'react-redux'


const Header: React.FC = () => {

    // const dispatch = useDispatch()
    // const navElems = useSelector(state => state.navBar.navBarElems)

    return (
        <header className={s.wrap}>
            <img src={logo} alt="LOGO" />
            {/* <button onClick={() => dispatch(hideNavBar())}>скрыть</button>
            <button onClick={() => dispatch(setNavBar())}>показать</button> */}
            <p className={s.title}>Панель управления</p>

        </header>

    )
}
export default Header;