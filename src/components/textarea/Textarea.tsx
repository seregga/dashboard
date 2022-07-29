import React from 'react'

type TextareaProps = {
    blur: any,
    value: string,
    change: any,
}

const Textarea: React.FC<TextareaProps> = ({ blur, value, change, }) => {

    const clikcHandler = (e: any) => {
        e.stopPropagation()
    }

    return (
        <textarea
            style={{
                fontFamily: 'inherit',
                fontSize: 'inherit',
                height: '100%',
                width: '100%',
                backgroundColor: 'inherit',
                resize: 'none',
                boxSizing: 'border-box',
                outline: 'none',
                border: 'none',
            }}
            onBlur={blur}
            value={value}
            onChange={change}
            autoFocus
            onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
            onMouseDown={clikcHandler}
        />
    )
}
export default Textarea
