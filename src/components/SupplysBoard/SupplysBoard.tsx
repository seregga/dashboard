import React from 'react';
import s from './SupplysBoard.module.css';
import { NavLink } from 'react-router-dom';


const SupplysBoard: React.FC = () => {
    return (
        <div className={s.wrap}>
            <NavLink to='/supplys'>
                <table className={s.supplysTable}>
                    <thead>
                        <tr>
                            <th colSpan={2}>План поставок</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Товар 1</td>
                            <td>100 шт</td>
                        </tr>
                        <tr>
                            <td>Товар 2</td>
                            <td>200 шт</td>
                        </tr>
                        <tr>
                            <td>Товар 3</td>
                            <td>250 шт</td>
                        </tr>
                    </tbody>
                </table>
            </NavLink>
        </div>
    )
}
export default SupplysBoard
