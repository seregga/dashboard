import React from "react"
import s from './../Main.module.css';

const Transfer = ({ infoTransfer }) => {
    return (
        <div >
            <h6 className={s.information__transfer}>{
                infoTransfer.segments.length && infoTransfer.segments.length === 1
                    ? 'без пересадок'
                    : infoTransfer.segments.length - 1 + ' пересадка'}
            </h6>
        </div>
    )
}
export default Transfer
