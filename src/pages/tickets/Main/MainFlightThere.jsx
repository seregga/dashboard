import React from "react"
import s from './Main.module.css';
import InfoDeparture from "./MainRepeatComponents/InfoDeparture";
import InfoArrival from './MainRepeatComponents/InfoArrival';
import TimeFlight from "./MainRepeatComponents/TimeFlight";
import TimeDeparture from './MainRepeatComponents/TimeDeparture';
import TimeArrival from './MainRepeatComponents/TimeArrival';
import Transfer from "./MainRepeatComponents/Transfer";
import FlightCarrier from "./MainRepeatComponents/FlightCarrier";

const MainFlightThere = ({ flightThere, idxSegmentFlightThere, flightCarrier }) => {
    return (
        <div className={s.card__info}>
            <div className={s.information}>
                <div className={s.information__city}>
                    {/* ------------   город и аэропорт отправления -------------*/}
                    <InfoDeparture infoDeparture={flightThere} />

                    <span>---</span>

                    {/* ------------   город и аэропорт прибытия -------------*/}
                    <InfoArrival infoArrival={flightThere} infoIdxSegmentFlight={idxSegmentFlightThere} />

                </div>

                <hr className={s.information__line} />

                {/* --------------- время отправления и прибытия ------------------*/}

                <div className={s.information__time}>
                    <TimeDeparture timeDeparture={flightThere} />

                    <TimeFlight timeFlight={flightThere} />

                    <TimeArrival timeArrival={flightThere} idxSegmentFlight={idxSegmentFlightThere} />
                </div >

                <hr className={s.information__line_short} />

                {/* ------------- информация о пересадке --------------*/}

                <Transfer infoTransfer={flightThere} />

                {/* // информация о перевозчике */}

                <FlightCarrier flightCarrier={flightCarrier} />
            </div>
        </div>

    )
}
export default MainFlightThere
