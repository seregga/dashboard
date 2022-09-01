import React from 'react'
import s from './Modal.module.css'

const Modal = (props) => {
    const {
        closeModal,
        name,
        phone,
        email,
        address,
        position_name,
        department,
        hire_date
    } = props

    const [titles, setTitles] = React.useState([
        'Телефон:',
        'Почта:',
        'Адрес:',
        'Должность:',
        'Департамент:',
        'Дата найма:',
    ])

    return (
        <div className={s.container} onClick={closeModal}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.name}>{name}</div>
                <div className={s.info}>
                    <div className={s.titles} >
                        {titles.map(el => <p className={s.title}>{el}</p>)}
                    </div>
                    <div className={s.desc}>
                        <p className={s.phone}>
                            <a href={phone}>{phone}</a>
                        </p>
                        <p className={s.email}>
                            <a href={email}>{email}</a>
                        </p>
                        <p>{address}</p>
                        <p>{position_name}</p>
                        <p>{department}</p>
                        <p>{hire_date}</p>
                        <button onClick={closeModal}>x</button>
                    </div>
                </div>


            </div>
        </div>
    )
    // return (
    //     <div className={s.container} onClick={closeModal}>
    //         <div className={s.content} onClick={e => e.stopPropagation()}>
    //             <div className={s.name}>{name}</div>
    //             <div className={s.phone}>
    //                 <span>Телефон:</span>
    //                 <a href={phone}>{phone}</a>
    //             </div>
    //             <div className={s.email}>
    //                 <a href={email}>{email}</a>
    //             </div>
    //             <p>{address}</p>
    //             <p>{position_name}</p>
    //             <p>{department}</p>
    //             <p>{hire_date}</p>
    //             <button onClick={closeModal}>x</button>
    //         </div>
    //     </div>
    // )
}
export default Modal
