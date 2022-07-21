import React, { useState, useEffect } from 'react';
import s from './Supplys.module.css';
import { getAllCitys } from './../../http/citysApi';


const Supplys = (props) => {

    const [citys, setCitys] = useState([
        { id: 1, title: 'Санкт-Петеребург' },
        { id: 2, title: 'Москва' },
        { id: 3, title: 'Екатеринбург' },
        { id: 4, title: 'Краснодар' },
        { id: 5, title: 'Новосибирск' },
        { id: 6, title: 'Хабаровск' },
        { id: 7, title: 'Геленджик' },
        { id: 8, title: 'Севастополь' },
    ])

    const [citysFiltered, setCitysFiltered] = useState(citys)
    const [searchCity, setSearchCity] = useState('')

    // useEffect(() => {
    //     getAllCitys().then(r => setCitys(r.data))
    // }, [])

    useEffect(() => {
        setCitysFiltered(
            citys.filter(c => c.title.toLowerCase().indexOf(searchCity.toLowerCase()) > -1)
        )
    }, [searchCity, citys])

    return (
        <div className={s.wrap}>
            <div className={s.nav}>
                <input
                    type="text"
                    value={searchCity}
                    onChange={e => setSearchCity(e.target.value)}
                    placeholder='искать город'
                />
                <ul>
                    {citysFiltered.map(c => <li key={c.id}>{c.title}</li>)}
                </ul>
            </div>
            <div className={s.content}>

                <table className={s.supplysTable}>
                    <thead>
                        <tr>
                            <th colSpan="2">План поставок</th>
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
        </div>
    )
}
export default Supplys