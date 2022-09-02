import React from "react"
import s from './../Main.module.css';



const TimeFlight = ({ timeFlight }) => {

    const hour = Math.floor(timeFlight.duration / 24)
    const min = timeFlight.duration % 24

    return (
        <div className={s.information__time_center}>
            <span>{hour} ч </span>
            <span>{min} мин </span>
        </div>
    )
}
export default TimeFlight
