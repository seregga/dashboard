import React from 'react'
import s from './Chart.module.css'

type FalseChartProps = {
    children?: string;
    image: any;
}

const FalseChart_1: React.FC<FalseChartProps> = ({ children, image }) => {
    return (
        <div className={s.wrap}>
            <div className={s.image}>
                <img src={image} alt="график" />
            </div>
            {children}
        </div>
    )
}
export default FalseChart_1
