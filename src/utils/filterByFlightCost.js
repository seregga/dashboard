// массив цен попадающих в параметры цен от и до
export const filterByFlightCost = (MOCK_FLIGHT, beginCostInput, endCostInput) => {

    return MOCK_FLIGHT.result.flights.map((f) => {
        return Number(f.flight.price.total.amount)
    }).filter((el) => {
        return el >= beginCostInput && el <= endCostInput
    })
}