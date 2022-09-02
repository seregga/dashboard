import React from "react"
import s from './../Main.module.css';

const InfoArrival = ({ infoArrival, infoIdxSegmentFlight }) => {
    return (<>
        <span>{infoArrival.segments[infoIdxSegmentFlight].arrivalCity
            ? infoArrival.segments[infoIdxSegmentFlight].arrivalCity.caption
            : 'не найден'}, </span>
        <span>{infoArrival.segments[infoIdxSegmentFlight].arrivalAirport.caption} </span>
        <span className={s.information__city_blue}>({infoArrival.segments[infoIdxSegmentFlight].arrivalAirport.uid}) </span>
    </>)
}
export default InfoArrival
