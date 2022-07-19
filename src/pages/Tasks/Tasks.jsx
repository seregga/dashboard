import React, { useState } from 'react'

import s from './Tasks.module.css'

const Tasks = (props) => {

    const [thList, setThList] = useState([
        { id: 1, colSpan: 1, text: 'создана задача' },
        { id: 2, colSpan: 1, text: 'в работе' },
        { id: 3, colSpan: 1, text: 'на проверке' },
        { id: 4, colSpan: 1, text: 'завершена' },
    ])

    const [tdList, setTdList] = useState([
        { id: 1, num: 1, draggable: true, text: 'потяни меня' },
        { id: 2, num: 2, draggable: false, text: null },
        { id: 3, num: 3, draggable: false, text: null },
        { id: 4, num: 4, draggable: false, text: null }
    ])

    const [currentEl, setCurrentEl] = useState()

    function dragStartHandler(e, el) {
        setCurrentEl(el)
    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }
    function dragLeaveHandler(e) {
        e.target.style.background = 'darkgray'
    }
    function dropHandler(e, el) {
        e.preventDefault()
        e.target.style.background = 'darkgray'
        setTdList(tdList.map(element => {
            if (element.id === el.id) {
                return { ...element, num: currentEl.num }
            }
            if (element.id === currentEl.id) {
                return { ...element, num: el.num }
            }
            return element

        }))
    }

    // const clickHandler = () => {
    //     console.log('ok');
    // }

    return (
        <div className={s.wrap}>
            <table className={s.taskTable}>
                <thead>
                    <tr>
                        {thList.map(th =>
                            <th key={th.id} colSpan={th.colSpan}>{th.text}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tdList.sort((a, b) => a.num - b.num).map(td =>
                            <td key={td.id}
                                onDragStart={(e) => dragStartHandler(e, td)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                // onDragEnd={(e) => dragEndHandler(e)}
                                onDrop={(e) => dropHandler(e, td)}
                                draggable={td.draggable}
                            >
                                {td.text}
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
            {/* <button onClick={clickHandler}>добавить задачу</button> */}
        </div>
    )
}
export default Tasks

{/* <input type="text" placeholder='создать задачу' /> */ }