import React, { useEffect } from 'react'
import s from './Notes.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setNotes } from '../../store/slices/notesSlice';
import Note from './note/Note';

const Notes = () => {
    const notes = useSelector(state => state.notes.notes)
    const dispatch = useDispatch()

    useEffect(() => {
        document.ondragstart = () => false;
        return () => {
            document.ondragstart = null;
        }
    }, [])

    const btnHandler = () => {
        dispatch(setNotes([...notes, {
            id: Math.random().toString().substring(2, 9),
            text: '',
            isEdit: false,
            pdng: '10px',
            pdngTxtr: null,
        }]))
    }

    const mouseDownHandler = (e) => {
        let X = e.nativeEvent.offsetX
        let Y = e.nativeEvent.offsetY

        e.target.style.position = "absolute";
        e.target.style.zIndex = 100;

        document.onmousemove = (e) => {
            e.target.style.left = e.pageX - X + 'px';
            e.target.style.top = e.pageY - Y + 'px';
        }

        document.onmouseup = (e) => {
            e.target.style.zIndex = null;
            document.onmousemove = null;
        };

    };



    const doubleClickHandler = (e, el) => {

        dispatch(setNotes(notes.map(n => {
            if (n.id == el.id) {
                return {
                    ...n,
                    isEdit: true,
                    pdng: 0,
                    pdngTxtr: e.target.style.padding,
                }
            } else {
                return n
            }
        })))
    }

    const blurHandler = (e, el) => {

        dispatch(setNotes(notes.map(n => {
            if (n.id == el.id) {
                return {
                    ...n,
                    isEdit: false,
                    pdng: e.target.style.padding,
                    pdngTxtr: null,
                }
            } else {
                return n
            }
        })))
        e.target.onblur = null;
    }

    const changeHandler = (e, el) => {
        dispatch(setNotes(notes.map(n => {
            if (el.id == n.id) {
                return { ...n, text: e.target.value }
            } else {
                return n
            }
        })))
    }

    return (
        <>
            <button className={s.addBtn} onClick={btnHandler}>добавить заметку</button>
            <div className={s.container}>
                <p>заметку можно перетаскивать, для ввода текста дважды кликни на заметке</p>
                {notes.map(n => {
                    return <Note
                        key={n.id}
                        isEdit={n.isEdit}
                        mouseDown={mouseDownHandler}
                        doubleClick={(e) => doubleClickHandler(e, n)}
                        blur={(e) => blurHandler(e, n)}
                        value={n.text}
                        change={(e) => changeHandler(e, n)}
                        padding={n.pdng}
                        pdngTxtr={n.pdngTxtr}
                    >{n.text}</Note>
                }
                )}
            </div>
        </>
    )
}
export default Notes