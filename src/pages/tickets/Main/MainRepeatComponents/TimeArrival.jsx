import React from "react"
import s from './../Main.module.css';

const TimeArrival = ({ timeArrival, idxSegmentFlight }) => {

    const date = timeArrival.segments[idxSegmentFlight].arrivalDate.split('', 9).join('')
    const time = timeArrival.segments[idxSegmentFlight].arrivalDate.split('').splice(11, 5).join('')

    return (
        <div className={s.information__time_left}>
            <span className={s.date}>{date} </span>
            <span className={s.time}>{time} </span>
        </div>
    )
}
export default TimeArrival
