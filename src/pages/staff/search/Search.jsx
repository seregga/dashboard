import React from 'react'
import s from './Search.module.css'

const Search = ({ insert, setInsert }) => {

    return (
        <section className={s.container}>
            <input
                type="text"
                value={insert}
                onChange={e => setInsert(e.target.value)}
            // placeholder='искать сотрудника'
            />
        </section >
    )
}
export default Search
