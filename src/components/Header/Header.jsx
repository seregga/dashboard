import React from 'react';
import s from './Header.module.css';
import { hideNavBar, setNavBar } from '../../store/slices/navBarSlice';
import { useDispatch } from 'react-redux'


const Header = (props) => {

    const dispatch = useDispatch()
    // const navElems = useSelector(state => state.navBar.navBarElems)

    return (
        <header className={s.wrap}>
            <button onClick={() => dispatch(hideNavBar())}>скрыть</button>
            <button onClick={() => dispatch(setNavBar())}>показать</button>
            LOGO
        </header>

    )
}
export default Header;