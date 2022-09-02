import React from "react"
import s from './../Main.module.css';


const MainHeader = ({ cost }) => {
    return (
        <div className={s.card__header}>
            <div className={s.card__logo}>LOGO</div>
            <div className={s.card__cost}>
                <div className={s.card__cost_right}>{cost} P</div>
                <div>Стоимость для одного взрослого пассажира</div>
            </div>
        </div>
    )
}
export default MainHeader
