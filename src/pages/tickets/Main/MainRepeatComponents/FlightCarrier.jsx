import React from "react"
import s from './../Main.module.css';

const FlightCarrier = ({ flightCarrier }) => {
    return (
        <div className={s.information__airlines}>
            Рейс выполняет: {flightCarrier}
        </div>
    )
}
export default FlightCarrier
