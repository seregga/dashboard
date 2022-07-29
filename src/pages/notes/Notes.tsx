import React, { useEffect } from 'react'
import s from './Notes.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setEditNote, setNotes, setEndEditNote, setTextNote } from '../../store/slices/notesSlice';
import Note from './note/Note';

const Notes: React.FC = () => {

    const notes = useSelector((state: any) => state.notes.notes)

    const dispatch = useDispatch()

    useEffect(() => {
        document.ondragstart = () => false;
        return () => {
            document.ondragstart = null;
        }
    }, [])

    const btnHandler = () => {
        const id = Math.random().toString().substring(2, 9);
        dispatch(setNotes({
            id,
        }))
    }

    const mouseDownHandler = (e: any) => {
        let X = e.nativeEvent.offsetX
        let Y = e.nativeEvent.offsetY
        e.target.style.position = "absolute";
        e.target.style.zIndex = 100;

        document.onmousemove = (e: any) => {
            e.target.style.left = e.pageX - X + 'px';
            e.target.style.top = e.pageY - Y + 'px';
        }

        document.onmouseup = (e: any) => {
            e.target.style.zIndex = null;
            document.onmousemove = null;
            document.onmouseup = null;
        };

    };

    const doubleClickHandler = (e: any, note: any) => {
        dispatch(setEditNote({
            id: note.id,
        }))
    }

    const blurHandler = (e: any, note: any) => {
        dispatch(setEndEditNote({
            id: note.id,
        }))
        e.target.onblur = null;
    }


    const changeHandler = (e: any, note: any) => {
        dispatch(setTextNote({
            id: note.id,
            text: e.target.value
        }))
    }

    return (
        <>
            <div className={s.container}>
                <button className={s.addBtn} onClick={btnHandler}>добавить заметку</button>
                <p>заметку можно перетаскивать, удалять и редактировать(дважды кликни на заметке ) </p>
                <div>
                    {notes.map((n: any) => {
                        return <Note
                            key={n.id}
                            isEdit={n.isEdit}
                            id={n.id}
                            value={n.text}
                            mouseDown={mouseDownHandler}
                            doubleClick={(e: any) => doubleClickHandler(e, n)}
                            blur={(e: any) => blurHandler(e, n)}
                            change={(e: any) => changeHandler(e, n)}
                        >{n.text}</Note>
                    }
                    )}
                </div>
            </div>
        </>
    )
}
export default Notes