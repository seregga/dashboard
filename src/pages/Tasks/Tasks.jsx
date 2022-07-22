import React, { useState } from 'react'
import { editTdList } from '../../store/slices/tasksSlice'

import s from './Tasks.module.css'
import { useDispatch, useSelector } from 'react-redux';

const Tasks = (props) => {

    const [currentEl, setCurrentEl] = useState()

    const { thList, tdList } = useSelector(state => state.tasks)

    const tdListSort = Object.assign(JSON.parse(JSON.stringify(tdList))).sort((a, b) => a.num - b.num);

    const dispatch = useDispatch()

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

        dispatch(editTdList({
            dropId: el.id,
            dropNum: el.num,
            currentId: currentEl.id,
            currentNum: currentEl.num,
        }))
    }

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
                        {tdListSort.map(td =>
                            <td key={td.id}
                                onDragStart={(e) => dragStartHandler(e, td)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                // onDragEnd={(e) => dragEndHandler(e)}
                                onDrop={(e) => dropHandler(e, td)}
                                draggable={td.draggable}
                            >
                                {td.text}
                            </td>)
                        }
                    </tr>
                </tbody>
            </table>
            {/* <button onClick={clickHandler}>добавить задачу</button> */}
        </div>
    )
}
export default Tasks
