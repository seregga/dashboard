import React from 'react'
import FalseChart_1 from '../../components/Charts/FalseCharts/FalseChart_1'
import FalseInfoBlocks_1 from '../../components/InfoBlocks/FalseInfoBlocks/FalseInfoBlocks_1'
import FalseInfoCard_1 from '../../components/InfoBlocks/FalseInfoCards/FalseInfoCard_1'
import s from './HomePage.module.css'
// import Spline from './../../components/Charts/Spline/Spline';
import SupplysBoard from './../../components/SupplysBoard/SupplysBoard';
import ChartImg from './Chart.png'



const HomePage = () => {
    return (
        <div className={s.wrap}>
            <section className={s.row_1}>
                <FalseInfoBlocks_1>1000 000 ₽</FalseInfoBlocks_1>
                <FalseInfoBlocks_1>5600 000 ₽</FalseInfoBlocks_1>
                <FalseInfoBlocks_1>19 000 000 ₽</FalseInfoBlocks_1>
                <FalseInfoBlocks_1>876 000 000 000 ₽</FalseInfoBlocks_1>
            </section>
            <section className={s.row_2}>
                <FalseInfoCard_1 path={'/tasks'}>задачи <br /> (click)</FalseInfoCard_1>
                <FalseInfoCard_1 />
            </section>
            <section className={s.row_3}>
                <SupplysBoard />
                <FalseChart_1 image={ChartImg} />
            </section>
            {/* <Spline /> */}
        </div>
    )
}
export default HomePage 
