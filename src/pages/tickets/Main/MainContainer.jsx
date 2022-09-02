import React, { useState } from 'react';
import Main from './Main';
import s from './Main.module.css';

const MainContainer = ({ flightList }) => {
    let [quantityElementsOnPage, setQuantityElementsOnPage] = useState(2)
    const [dataFlight, setDataFlight] = useState({
        ...flightList,
        result: {
            ...flightList.result,
            flights: flightList.result.flights.filter((el, idx) => idx < quantityElementsOnPage)
        }
    })


    if (flightList.result.flights.length === 0) {
        return <h3 className={s.query__nofound}>по вашему запросу ничего не найдено</h3>
    } else {
        const addMore = () => {
            setQuantityElementsOnPage(quantityElementsOnPage += 5)
            setDataFlight({
                ...dataFlight,
                result: {
                    ...dataFlight.result,
                    flights: flightList.result.flights.filter((el, idx) => idx < quantityElementsOnPage)
                }
            })
        }

        return (<>
            <Main flightList={dataFlight} addMore={addMore} />
        </>)
    }
}
export default MainContainer
