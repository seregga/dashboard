import React from 'react';
import s from './Main.module.css';
import MainFlightThere from './MainFlightThere';
import MainHeader from './MainHeader/MainHeader';
import MainFlightBack from './MainFlightBack';


const Main = ({ flightList, addMore }) => {


    return (
        <div className={s.main__wrap}>
            {flightList.result.flights.map((f, idx) => {
                const flightThere = f.flight.legs[0] // перелет туда
                const flightBack = f.flight.legs[1] // перелет обратно
                const flightCarrier = f.flight.carrier.caption // перевозчик

                const idxSegmentFlightThere = flightThere.segments.length === 1
                    ? 0
                    : flightThere.segments.length - 1

                const idxSegmentFlightBack = flightBack.segments.length === 1
                    ? 0
                    : flightBack.segments.length - 1

                return <div key={f.flightToken}>{

                    <div className={s.card}>

                        {/* ------------------  Header  --------------------*/}

                        <MainHeader cost={f.flight.price.total.amount} />

                        {/* ------------------ рейс туда ------------------ */}

                        <MainFlightThere flightThere={flightThere}
                            idxSegmentFlightThere={idxSegmentFlightThere}
                            flightCarrier={flightCarrier} />

                        <hr className={s.information__line_bold} />

                        {/* ------------------- рейс обратно ---------------- */}

                        <MainFlightBack flightBack={flightBack}
                            idxSegmentFlightBack={idxSegmentFlightBack}
                            flightCarrier={flightCarrier} />

                        <div className={s.card__footer}>ВЫБРАТЬ</div>
                    </div>
                }</div>
            })}
            <button className={s.main__button} onClick={addMore}>Показать еще</button>
        </div>
    )
}
export default Main
