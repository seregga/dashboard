import NavBar from './NavBar';
import s from './NavBarContainer.module.css';
import { useSelector } from 'react-redux';


const NavBarContainer = () => {

    const navElems = useSelector(state => state.navBar.navBarElems)

    return (
        <div className={s.wrap}>
            <NavBar navElems={navElems} />
        </div>
    )
}

export default NavBarContainer;