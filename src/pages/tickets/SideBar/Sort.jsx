import React, { useEffect } from 'react';

const Sort = ({ sortValueInput, setSortValueInput, flightList, setFlightList, setIsLoading }) => {

    const sortedByTypeFlightList = () => {
        if (sortValueInput === '1') {
            return flightList.result.flights
                .sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
        }
        if (sortValueInput === '2') {
            return flightList.result.flights
                .sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
        }
        if (sortValueInput === '3') {
            return flightList.result.flights
                .sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration)
        }

    }

    useEffect(() => {

        setIsLoading(true)

        const timeOut = setTimeout(() => {
            setFlightList(
                {
                    ...flightList,
                    result: {
                        ...flightList.result,
                        flights: [...sortedByTypeFlightList()]
                    }
                }
            )

            setIsLoading(false)

        }, 500)

        return () => clearTimeout(timeOut)

    }, [sortValueInput])


    const changeValue = (e) => {
        setSortValueInput(e.currentTarget.value)
    }

    return (
        <div>
            <form >
                <h5>Сортировать</h5>
                <div>
                    <input name='up-price' type='radio'
                        onChange={changeValue} value='1'
                        checked={sortValueInput === '1' ? true : false} /> - по возрастанию цены
                </div>
                <div>
                    <input name='down-price' type='radio'
                        onChange={changeValue} value='2'
                        checked={sortValueInput === '2' ? true : false} /> - по убыванию цены
                </div>
                <div>
                    <input name='time-path' type="radio"
                        onChange={changeValue} value='3'
                        checked={sortValueInput === '3' ? true : false} /> - по времени в пути
                </div>
            </form>
        </div>
    )
}
export default Sort
