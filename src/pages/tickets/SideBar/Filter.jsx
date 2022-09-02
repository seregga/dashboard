import React from 'react';

const Filter = ({ transferValueInput, setTransferValueInput }) => {

    const changeValue = (e) => {
        setTransferValueInput(e.currentTarget.value)
    }
    return (
        <div>
            <form >
                <h5>Фильтровать</h5>
                <div>
                    <input name={'transfer'} type={'checkbox'} value='1'
                        checked={transferValueInput === '1' ? true : false}
                        onChange={changeValue} /> - 1 пересадка
                </div>
                <div>
                    <input name={'no-transfer'} type={'checkbox'} value='2'
                        checked={transferValueInput === '2' ? true : false}
                        onChange={changeValue} /> - без пересадок
                </div>

            </form>
        </div>
    )
}
export default Filter

