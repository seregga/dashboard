import React, { useState } from 'react'
import { editTdList } from '../../store/slices/tasksSlice'
import s from './Tasks.module.css'
import { useDispatch, useSelector } from 'react-redux';

type TaskObj = {
    id: number,
    num: number,
    draggable: boolean,
    text?: any
}

const Tasks: React.FC = () => {

    const [currentEl, setCurrentEl] = useState<TaskObj>()

    const { thList, tdList } = useSelector((state: any) => state.tasks)

    const tdListSorted = Object.assign(JSON.parse(JSON.stringify(tdList))).sort((a: TaskObj, b: TaskObj) => a.num - b.num);

    const dispatch = useDispatch()

    const dragStartHandler = (e: any, el: TaskObj) => {
        setCurrentEl(el)
    }

    const dragOverHandler = (e: any) => {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    const dragLeaveHandler = (e: any) => {
        e.target.style.background = 'darkgray'
    }

    const dropHandler = (e: any, el: TaskObj) => {
        e.preventDefault()
        e.target.style.background = 'darkgray'

        currentEl
            ? dispatch(editTdList({
                dropId: el.id,
                dropNum: el.num,
                currentId: currentEl.id,
                currentNum: currentEl.num,
            }))
            : alert('Ошибка загрузки списка задач')

    }

    return (
        <div className={s.wrap}>
            <table className={s.taskTable}>
                <thead>
                    <tr>
                        {thList.map((th: any) =>
                            <th key={th.id} colSpan={th.colSpan}>{th.text}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tdListSorted.map((td: TaskObj) =>
                            <td key={td.id}
                                onDragStart={(e) => dragStartHandler(e, td)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                // onDragEnd={(e) => dragEndHandler(e)}
                                onDrop={(e) => dropHandler(e, td)}
                                draggable={td.draggable}
                            >
                                {td.text}
                            </td>).sort((a: TaskObj, b: TaskObj) => a.num - b.num)
                        }
                    </tr>
                </tbody>
            </table>
            {/* <button onClick={clickHandler}>добавить задачу</button> */}
        </div>
    )
}
export default Tasks
