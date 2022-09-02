import React from 'react';
// import '../../App.css';


const Cost = ({ beginCostInput, setBeginCostInput, endCostInput, setEndCostInput, }) => {

    return (
        <div>
            <div >
                <h5>Цена</h5>
                <div>От
                    <input type="text"
                        value={beginCostInput}
                        autoFocus={true}
                        placeholder='0'
                        onChange={e => setBeginCostInput(e.currentTarget.value)}
                    />
                </div>
                <div>До
                    <input type="text"
                        value={endCostInput}
                        autoFocus={true}
                        placeholder='1000000'
                        onChange={e => setEndCostInput(e.currentTarget.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Cost
