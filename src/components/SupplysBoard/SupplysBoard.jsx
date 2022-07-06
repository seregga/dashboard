import React from 'react';
import s from './SupplysBoard.module.css';
import { NavLink } from 'react-router-dom';


const SupplysBoard = (props) => {
    return (
        <div className={s.wrap}>
            <NavLink to='/supplys'>
                <table className={s.supplysTable}>
                    <thead>
                        <tr>
                            <th colSpan="2">План поставок крови</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Кровь 1</td>
                            <td>100 л</td>
                        </tr>
                        <tr>
                            <td>Кровь 2</td>
                            <td>200 л</td>
                        </tr>
                        <tr>
                            <td>Кровь 3</td>
                            <td>250 л</td>
                        </tr>
                    </tbody>
                </table>

            </NavLink>
        </div>
    )
}
export default SupplysBoard
