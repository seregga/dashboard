import React, { useState, useEffect } from 'react';
import s from './Supplys.module.css';
// import { fetchCitys } from '../../store/slices/citysSlice'; // включить при рабочем сервере
import { useSelector, useDispatch } from 'react-redux';


const Supplys: React.FC = () => {

    const { citys } = useSelector((state: any) => state.citys)

    // включить при рабочем сервере
    // const dispatch = useDispatch()

    const [citysFiltered, setCitysFiltered] = useState(citys)
    const [searchCity, setSearchCity] = useState('')

    // включить при рабочем сервере
    // useEffect(() => {
    //     dispatch(fetchCitys())
    // }, [])

    useEffect(() => {
        setCitysFiltered(
            citys.filter((c: any) => c.title.toLowerCase().indexOf(searchCity.toLowerCase()) > -1)
        )
    }, [searchCity, citys])

    return (<div className={s.wrap}>
        <div className={s.nav}>
            <input
                type="text"
                value={searchCity}
                onChange={e => setSearchCity(e.target.value)}
                placeholder='искать город'
            />
            <ul>
                {citysFiltered.map((c: any) => <li key={c.id}>{c.title}</li>)}
            </ul>
        </div>
        <div className={s.content}>

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
        </div>
    </div>)
}
export default Supplys