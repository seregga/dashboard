import React from 'react'
import s from './Note.module.css'
import Textarea from '../../../components/textarea/Textarea'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../store/slices/notesSlice';

type NoteProps = {
    id: number;
    doubleClick: any;
    mouseDown: any;
    children: string;
    isEdit: boolean;
    value: any;
    change: any;
    blur: any;
}

const Note: React.FC<NoteProps> = (props) => {
    const {
        id,
        doubleClick,
        mouseDown,
        children,
        isEdit,
        value,
        change,
        blur,
    } = props;

    const dispatch = useDispatch()

    const clickHandler = (e: any) => {
        dispatch(deleteNote({ id }))
    }

    const mouseDHandler = (e: any) => {
        e.stopPropagation()
    }

    return (
        <div className={s.note}
            onMouseDown={mouseDown}
            onDoubleClick={doubleClick}
        >
            <div><button className={s.button} onClick={clickHandler} onMouseDown={mouseDHandler}>x</button></div>
            {
                isEdit
                    ? <Textarea
                        blur={blur}
                        value={value}
                        change={change}
                    />
                    : <p>{children}</p>
            }
        </div>
    )
}
export default Note
