import React from 'react'

const Textarea = (props) => {

    const {
        backgroundColor,
        height,
        width,
        blur,
        value,
        change,
        autoFocus,
        pdngTxtr
    } = props

    return (
        <textarea
            style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: `${backgroundColor}`,
                resize: 'none',
                boxSizing: 'border-box',
                outline: 'none',
                border: 'none',
                padding: pdngTxtr
            }}
            onBlur={blur}
            value={value}
            onChange={change}
            autoFocus={autoFocus}
        />
    )
}
export default Textarea
