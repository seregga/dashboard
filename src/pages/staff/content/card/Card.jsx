import React from 'react'
import s from './Card.module.css'


const Card = ({ name, phone, email, openModal, el }) => {

    return (
        <div className={s.card} onClick={(e) => openModal(e, el)} >
            <div className={s.name}>{name}</div>
            <div className={s.phone} >
                <a href={phone} onClick={e => e.stopPropagation()}>{phone}</a>
            </div>
            <div className={s.email}>
                <a href={email}>{email}</a>
            </div>
        </div>
    )
}
export default Card
