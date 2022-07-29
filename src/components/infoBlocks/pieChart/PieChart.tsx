import React from 'react'
import s from './PieChart.module.css'

type PieChartProps = {
    children: string;
    image: any;
}

const PieChart: React.FC<PieChartProps> = ({ children, image }) => {

    return (
        <div className={s.wrap}>
            <img className={s.pieImage} src={image} alt="image" />
            <p className={s.text}>{children}</p>
        </div>

    )
}
export default PieChart