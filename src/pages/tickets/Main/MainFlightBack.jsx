import React from "react"
import s from './Main.module.css';
import InfoDeparture from './MainRepeatComponents/InfoDeparture';
import InfoArrival from './MainRepeatComponents/InfoArrival';
import TimeDeparture from './MainRepeatComponents/TimeDeparture';
import TimeFlight from './MainRepeatComponents/TimeFlight';
import TimeArrival from './MainRepeatComponents/TimeArrival';
import Transfer from './MainRepeatComponents/Transfer';
import FlightCarrier from './MainRepeatComponents/FlightCarrier';

const MainFlightBack = ({ flightBack, idxSegmentFlightBack, flightCarrier }) => {
    return (
        <div className={s.card__info}>
            <div className={s.information}>
                <div className={s.information__city}>
                    {/* ------------   город и аэропорт отправления -------------*/}
                    <InfoDeparture infoDeparture={flightBack} />

                    <span>---</span>

                    {/* ------------   город и аэропорт прибытия -------------*/}
                    <InfoArrival infoArrival={flightBack} infoIdxSegmentFlight={idxSegmentFlightBack} />

                </div>

                <hr className={s.information__line} />

                {/* --------------- время отправления и прибытия ------------------*/}

                <div className={s.information__time}>
                    <TimeDeparture timeDeparture={flightBack} />

                    <TimeFlight timeFlight={flightBack} />

                    <TimeArrival timeArrival={flightBack} idxSegmentFlight={idxSegmentFlightBack} />
                </div >

                <hr className={s.information__line_short} />

                {/* ------------- информация о пересадке --------------*/}

                <Transfer infoTransfer={flightBack} />

                {/* // информация о перевозчике */}

                <FlightCarrier flightCarrier={flightCarrier} />
            </div>
        </div>
    )
}
export default MainFlightBack
