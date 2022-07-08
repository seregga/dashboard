import React, { useState, useEffect } from 'react';
import s from './Supplys.module.css';


const Supplys = (props) => {

    const [citys, setSitys] = useState([
        { id: 1, city: 'Санкт-Петеребург' },
        { id: 2, city: 'Москва' },
        { id: 3, city: 'Екатеринбург' },
        { id: 4, city: 'Краснодар' },
        { id: 5, city: 'Новосибирск' },
        { id: 6, city: 'Хабаровск' },
        { id: 7, city: 'Геленджик' },
        { id: 8, city: 'Севастополь' },
    ])

    const [citysFiltered, setCitysFiltered] = useState(citys)
    const [searchCity, setSearchCity] = useState('')

    useEffect(() => {
        setCitysFiltered(
            citys.filter(c => {
                return c.city.toLowerCase().indexOf(searchCity.toLowerCase()) > -1
            })
        )
    }, [searchCity])

    return (
        <div className={s.wrap}>
            <div className={s.nav}>
                <input
                    type="text"
                    value={searchCity}
                    onChange={e => setSearchCity(e.target.value)}
                    placeholder='фильтр'
                />
                <ul>
                    {citysFiltered.map(c => <li key={c.id}>{c.city}</li>)}
                </ul>
            </div>
            <div className={s.content}>

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
            </div>
        </div>
    )
}
export default Supplys