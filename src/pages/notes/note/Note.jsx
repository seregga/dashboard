import React from 'react'
import s from './Note.module.css'
import Textarea from '../../../components/textarea/Textarea'

const Note = (props) => {
    const {
        doubleClick,
        mouseDown,
        children,
        isEdit,
        value,
        change,
        backgroundColor,
        width,
        height,
        blur,
        padding,
        pdngTxtr,
    } = props;

    return (
        <div
            style={{
                padding: padding,
            }}
            className={s.note}
            onMouseDown={mouseDown}
            onDoubleClick={doubleClick}
        >
            {
                isEdit
                    ? <Textarea
                        backgroundColor={'#cadd23'} // перенести в state
                        width={'175'} // перенести в state
                        height={'200'} // перенести в state
                        blur={blur}
                        value={value}
                        change={change}
                        autoFocus={true}
                        pdngTxtr={pdngTxtr}
                    />
                    : children
            }
        </div>
    )
}
export default Note
