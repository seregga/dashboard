import React from "react"
import s from './../Main.module.css';

const TimeDeparture = ({ timeDeparture }) => {

    const date = timeDeparture.segments[0].departureDate.split('', 9).join('')
    const time = timeDeparture.segments[0].departureDate.split('').splice(11, 5).join('')

    return (
        <div className={s.information__time_left}>
            <span className={s.time}>{time} </span>
            <span className={s.date}>{date} </span>
        </div>
    )
}
export default TimeDeparture
