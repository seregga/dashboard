import React from 'react'
import Chart from '../../components/charts/chart/Chart'

import s from './HomePage.module.css'

// import Spline from './../../components/charts/spline/Spline';
import SupplysBoard from '../../components/supplysBoard/SupplysBoard';
import Card from '../../components/infoBlocks/card/Card';
import Task from '../../components/infoBlocks/task/Task';
import PieChart from '../../components/infoBlocks/pieChart/PieChart';

import chartImg from './chart.png'
import pieChartImg from './pieChart.png'
import taskIcon from './taskIcon.png'


const HomePage: React.FC = () => {

    const [cardInfo, setCardInfo] = React.useState([
        { id: 1, title: 'Доход за 1й квартал', sum: '5 600 000 ₽' },
        { id: 2, title: 'Доход за 1й квартал', sum: '19 000 000 ₽ ₽' },
        { id: 3, title: 'Доход за 1й квартал', sum: '568 000 000 ₽' },
    ])

    return (
        <div className={s.wrap}>
            <section className={s.row_1}>
                {cardInfo.map(el => <Card desc={el.title} key={el.id}>{el.sum}</Card>)}
            </section>
            <section className={s.row_2}>
                <Task image={taskIcon} path={'/tasks'}>задачи <br /> (нажми на меня)</Task>
                <PieChart image={pieChartImg} >Dados 10 000 000 $</PieChart>
            </section>
            <section className={s.row_3}>
                <SupplysBoard />
                <Chart image={chartImg} />
            </section>
            {/* <Spline /> */}
        </div>
    )
}
export default HomePage 
