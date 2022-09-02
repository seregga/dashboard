import React from 'react';
import s from '../Tickets.module.css';
import Airlines from './Airlines';
import Cost from './Cost';
import Filter from './Filter';
import Sort from './Sort';

const Filters = ({ beginCostInput, setBeginCostInput, endCostInput, setEndCostInput,
    setSortValueInput, sortValueInput, transferValueInput, setTransferValueInput,
    flightList, setFlightList, setIsLoading }) => {

    return (
        <div className={s.filterWrap}>
            <Sort
                setSortValueInput={setSortValueInput}
                sortValueInput={sortValueInput}
                flightList={flightList}
                setFlightList={setFlightList}
                setIsLoading={setIsLoading}
            />
            <Filter transferValueInput={transferValueInput} setTransferValueInput={setTransferValueInput} />
            <Cost beginCostInput={beginCostInput}
                setBeginCostInput={setBeginCostInput}
                endCostInput={endCostInput}
                setEndCostInput={setEndCostInput} />
            <Airlines />
        </div>
    )
}

export default Filters
