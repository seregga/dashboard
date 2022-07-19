import React, { useEffect, useState } from 'react'
import s from './Notes.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setNotes } from '../../store/slices/notesSlice';

const Notes = () => {

    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch()
    let [id, setId] = useState(null)

    useEffect(() => {
        document.ondragstart = () => false;
        return () => {
            document.ondragstart = null;
        }
    }, [])


    const mDHandler = (e) => {
        let X = e.nativeEvent.offsetX
        let Y = e.nativeEvent.offsetY

        e.target.style.position = "absolute";
        e.target.style.zIndex = 100;

        document.onmousemove = (e) => {
            e.target.style.left = e.pageX - X + 'px';
            e.target.style.top = e.pageY - Y + 'px';
        }

        document.onmouseup = (e) => {
            e.target.style.zIndex = 0;
            document.onmousemove = null;
        };

    };

    const btnHandler = () => {
        setId(id += 1)
        dispatch(setNotes({
            id,
            draggable: "true",
            text: 'потяни меня или двойной click для ввода текста'
        }))
    }


    const editNote = (e) => {
        e.target.style.padding = 0;
        const textarea = document.createElement('textarea')
        textarea.style.width = e.target.clientWidth + 'px';
        textarea.style.height = e.target.clientHeight + 'px';
        textarea.className = s.textarea;
        textarea.value = e.target.innerText;
        e.target.innerHTML = '';
        e.target.appendChild(textarea)
        textarea.focus();

        textarea.onblur = () => {
            e.target.style.padding = 10 + 'px';
            e.target.innerText = textarea.value;
            textarea.value = '';
            notes.forEach(n => {
                if (n.id == e.target.id) {
                    n.text = e.target.innerText
                }
            })
            textarea.onblur = null;
        }
    }



    return (
        <>
            <button className={s.addBtn} onClick={btnHandler}>добавить заметку</button>
            <div className={s.container}>
                {notes.map(n => {
                    return <div key={n.id}
                        className={s.note}
                        draggable={n.draggable}
                        onMouseDown={mDHandler}
                        onDoubleClick={editNote}
                    >{n.text}</div>
                }
                )}
            </div>
        </>
    )
}
export default Notes