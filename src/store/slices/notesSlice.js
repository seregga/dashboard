import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [
        // id: action.payload.id,
        // text: '',
        // isEdit: false,
        // position: static,
        // coords:{
        // x: 0,
        // y: 0
        // }
    ],
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes(state, action) {
            state.notes = [...state.notes,
            {
                id: action.payload.id,
                text: '',
                isEdit: false,
            }
            ]
        },
        setEditNote(state, action) {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id) {
                    return {
                        ...n,
                        isEdit: true,
                    }
                } else {
                    return n
                }
            })
        },
        setEndEditNote(state, action) {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id) {
                    return {
                        ...n,
                        isEdit: false,
                    }
                } else {
                    return n
                }
            })
        },
        setTextNote(state, action) {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id) {
                    return {
                        ...n,
                        text: action.payload.text
                    }
                } else {
                    return n
                }
            })
        },
        // setCoords(state, action) {
        //     console.log(action.payload.id);
        //     state.notes = state.notes.map(n => {
        //         if (n.id === action.payload.id) {
        //             return {
        //                 ...n,
        //                 x: action.payload.x,
        //                 y: action.payload.y,
        //             }
        //         } else {
        //             return n
        //         }
        //     })
        // },
        deleteNote(state, action) {
            state.notes = state.notes.filter(n => n.id !== action.payload.id)
        },
    }
})

export const { setNotes, setEditNote, setEndEditNote, setTextNote, deleteNote, setCoords } = notesSlice.actions;

export default notesSlice.reducer;